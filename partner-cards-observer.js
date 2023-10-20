const ENABLE_CARDS_ANIMATION = true;

window.onload = () => {
    if (ENABLE_CARDS_ANIMATION) {
        observePartnerCards();
    }
};

function observePartnerCards() {
    const cards = document.querySelectorAll(".partner-card");

    cards.forEach((card) => {
        card.classList.add("partner-card_observer-animation-hidden");
    });

    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                entry.target.classList.toggle("partner-card_observer-animation-shown", entry.isIntersecting);
            });
        },
        { threshold: 0, rootMargin: "0px -100px 0px 0px" }
    );

    cards.forEach((card) => {
        observer.observe(card);
    });
}
