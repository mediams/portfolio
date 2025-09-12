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

document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("contact");
  const statusEl = document.getElementById("status");

  if (form && statusEl) {
    form.addEventListener("submit", async (e) => {
      e.preventDefault();

      const submitBtn = form.querySelector('button[type="submit"]');
      if (submitBtn) submitBtn.disabled = true;
      statusEl.textContent = "Sending...";

      try {
        const data = new FormData(form);
        const resp = await fetch(form.action, {
          method: form.method,
          body: data,
          headers: { Accept: "application/json" },
        });

        if (resp.ok) {
          statusEl.textContent = "Thank you! Your message has been sent.";
          form.reset();
        } else {
          let msg = "Failed to submit the form. Please try again later.";
          try {
            const { errors } = await resp.json();
            if (errors && errors.length) {
              msg = errors.map((e) => e.message).join(", ");
            }
          } catch (_) {}
          statusEl.textContent = msg;
        }
      } catch (err) {
        statusEl.textContent =
          "Network error. Please check your connection and try again.";
      } finally {
        if (submitBtn) submitBtn.disabled = false;
      }
    });
  }

  const msg = document.getElementById("message");
  const msgCount = document.getElementById("msgCount");
  if (msg && msgCount) {
    const update = () => (msgCount.textContent = `${msg.value.length}/300`);
    msg.addEventListener("input", update);
    update();
  }
});
(function () {
  const right = document.querySelector('.right');
  if (!right) return;

  document.querySelectorAll('.side-nav[data-target]').forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const sel = link.getAttribute('data-target');
      const target = document.querySelector(sel);
      if (!target) return;

      const top = target.getBoundingClientRect().top
                - right.getBoundingClientRect().top
                + right.scrollTop;

      right.scrollTo({ top, behavior: 'smooth' });
    });
  });
})();


