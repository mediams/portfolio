(() => {
  const link = document.getElementById("contactLink");
  if (!link) return;

  const u = "veirak".split("").reverse().join("");  
  const d = "ed.bew".split("").reverse().join("");  
  const email = `${u}@${d}`;

  const subject = "";
  const body = "";

  const params = new URLSearchParams({
    to: email, 
    subject,
    body
  });

   
  const mailto = `mailto:${email}?${params.toString()}`;

  link.setAttribute("href", mailto);
})();
