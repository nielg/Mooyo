# AI Changes

This file records changes made by the AI assistant for review.

## Localization

- Added localized keys for:
  - Footer navigation and copyright text
  - Scroll-to-top accessible label
  - Homepage profile labels and “read more” link
  - Welcome-page action links
  - Missing English descriptions
  - Decorative image alt text
- Replaced hardcoded visible text in the footer, homepage, welcome page, and layout.
- Added a build-time script that verifies Dutch and English JSON files contain the same keys and no empty values.
- Added `check:translations` to the package scripts and made `build` run it before compiling.

## Accessibility

- Converted the offering tabs from clickable `<div>` elements to accessible buttons.
- Added tab roles, `aria-selected`, `aria-controls`, tab panels, roving tab focus, and keyboard arrow/Home/End navigation.
- Removed duplicate tab/panel IDs and fixed the default selected offering tab.
- Removed a nested `<button>` element inside a card link.
- Replaced nested buttons in social links with decorative icon spans.
- Added live-region and busy-state handling to the contact form status.
- Added localized labels and controls metadata to the scroll-to-top button.
- Added localized/empty alt text where appropriate.

## SEO and metadata

- Added `hreflang` alternate links and an `x-default` alternate link.
- Added the localized `og:locale` value.
- Added `noindex, nofollow` support to page layouts and enabled it on the 404 page.
- Kept canonical URL generation.

## Sanity and blog routing

- Filtered blog posts in Sanity queries by the active language.
- Updated static post generation to create routes only for posts matching each supported language.
- Updated individual post fetching to include both slug and language.
- Added localized date formatting for post listings and article pages.

## Responsive layout

- Replaced fixed two-column and three-column widths with `minmax(0, 1fr)` grid tracks.

## Cleanup

- Removed the tab-debug `console.log` statements.
- Removed `any` usage from the nested translation lookup with guarded unknown-value handling.
- Added CSS styling for the service-card link as a link rather than a button.

## Validation

- `npm run check:translations`: passed.
- `npm run build`: passed.
- Production build successfully generated the static routes available in the current Sanity content.
