// Warte, bis der DOM-Inhalt vollständig geladen ist
document.addEventListener("DOMContentLoaded", function () {
  // Scroll-Animation: Sichtbarkeit der Sektionen mittels IntersectionObserver steuern
  const sections = document.querySelectorAll("section");

  const observerOptions = {
    threshold: 0.3  // Sobald 30 % der Sektion sichtbar sind, wird sie eingeblendet
  };

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      } else {
        // Optional: Klasse entfernen, wenn die Sektion aus dem Viewport scrollt
        entry.target.classList.remove("visible");
      }
    });
  }, observerOptions);

  sections.forEach(section => {
    observer.observe(section);
  });
});
