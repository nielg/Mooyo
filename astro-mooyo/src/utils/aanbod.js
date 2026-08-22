import s from "../styles/aanbodCards.module.css";

function initAanbodCards() {
  const cards = document.querySelectorAll(`.${s.expanding}`);

  cards.forEach((card) => {
    card.addEventListener("click", () => {
      cards.forEach((anyCard) => {
        anyCard.classList.remove(s["is-active"]);
      });

      card.classList.add(s["is-active"]);
    });
  });
}

document.addEventListener("astro:page-load", initAanbodCards);
