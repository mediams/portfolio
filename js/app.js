(() => {
  const link = document.getElementById("contactLink");
  if (!link) return;

  const u = "veirak".split("").reverse().join("");  
  const d = "ed.bew".split("").reverse().join("");  
  const email = `${u}@${d}`;

  const subject = "Collaboration request";
  const body = "Hello Eugene,\n\nI saw your landing and would like to discuss a project.";

  const params = new URLSearchParams({
    to: email, 
    subject,
    body
  });

   
  const mailto = `mailto:${email}?${params.toString()}`;

  link.setAttribute("href", mailto);
})();
