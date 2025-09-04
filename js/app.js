(() => {
        const link = document.getElementById("contactLink");

        // имя и домен храним «перевёрнутыми», чтобы их не было видно простым парсерам
        const u = "veirak".split("").reverse().join(""); // "you"
        const d = "ed.bew".split("").reverse().join(""); // "example.com"

        const subject = "Collaboration request";
        const body =
          "Hello Eugene,\n\nI saw your landing and would like to discuss a project.";

        function makeMailto() {
          return (
            "mailto:" +
            u +
            "@" +
            d +
            "?subject=" +
            encodeURIComponent(subject) +
            "&body=" +
            encodeURIComponent(body)
          );
        }

        link.addEventListener(
          "click",
          (e) => {
            e.preventDefault();
            const mailto = makeMailto();
            link.setAttribute("href", mailto); // задаём href «в последний момент»
            window.location.href = mailto; // и переходим
          },
          { once: true }
        );
      })();
