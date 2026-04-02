import { defaultLang, ui, showDefaultLang, languages } from "./ui";

export function getStaticPaths() {
  return Object.keys(ui).map((locale) => ({ params: { locale } }));
}

export function getLangFromUrl(url: URL) {
  const base = import.meta.env.BASE_URL.replace(/\/$/, "");
  let pathname = url.pathname;
  if (base && pathname.startsWith(base)) {
    pathname = pathname.slice(base.length);
  }
  const [, lang] = pathname.split("/");
  if (lang in ui) return lang as keyof typeof ui;
  return defaultLang;
}

export function useTranslations(lang: keyof typeof ui) {
  return function t(key: keyof (typeof ui)[typeof defaultLang]) {
    return ui[lang][key] || ui[defaultLang][key];
  };
}

export function useTranslatedPath(lang: keyof typeof ui) {
  return function translatePath(path: string, l: string = lang) {
    const base = import.meta.env.BASE_URL.replace(/\/$/, "");

    const prefix = showDefaultLang || l !== defaultLang ? `/${l}` : "";
    const cleanedPath = path.startsWith("/") ? path : `/${path}`;

    let fullPath = `${base}${prefix}${cleanedPath}`;
    fullPath = fullPath.replace(/\/+/g, "/");

    // Ensure it ends with a slash if it's the root of a locale
    if (Object.keys(languages).some(l => fullPath.endsWith(`/${l}`))) {
      fullPath += '/';
    }

    return fullPath;
  };
}

export function getRouteFromUrl(url: URL) {
  const base = import.meta.env.BASE_URL.replace(/\/$/, "");
  let pathname = url.pathname;
  if (base && pathname.startsWith(base)) {
    pathname = pathname.slice(base.length);
  }
  const parts = pathname.split("/").filter(Boolean);

  if (parts[0] in languages) {
    parts.shift();
  }

  return parts.join("/") || undefined;
}
