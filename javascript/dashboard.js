document.querySelector(".category-title").addEventListener("mouseenter", () => {
    document.querySelector(".arrow-icon").classList.add("hover");
});

document.querySelector(".category-title").addEventListener("mouseleave", () => {
    document.querySelector(".arrow-icon").classList.remove("hover");
});