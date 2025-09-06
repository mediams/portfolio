document.addEventListener("DOMContentLoaded", () => {
  const link = document.getElementById("contactLink");
  const target = document.getElementById("contact-section");
  if (!link || !target) return;

  link.setAttribute("href", "#contact-section");

  link.addEventListener("click", (e) => {
    e.preventDefault();
    target.scrollIntoView({ behavior: "smooth", block: "start" });
    history.replaceState(null, "", "#contact-section");
  });
});
