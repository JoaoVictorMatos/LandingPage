document.getElementById("portfolio").addEventListener("click", () => {
  document.getElementById("head").scrollIntoView({ behavior: "smooth" });
});

document.getElementById("about-me").addEventListener("click", () => {
  document
    .getElementById("about-me-section")
    .scrollIntoView({ behavior: "smooth" });
});

document.getElementById("projects").addEventListener("click", () => {
  document
    .getElementById("project-section")
    .scrollIntoView({ behavior: "smooth" });
});

document.getElementById("btn-primary").addEventListener("click", () => {
  document
    .getElementById("project-section")
    .scrollIntoView({ behavior: "smooth" });
});

document.getElementById("skills").addEventListener("click", () => {
  document
    .getElementById("skills-section")
    .scrollIntoView({ behavior: "smooth" });
});

document.getElementById("contact").addEventListener("click", () => {
  document
    .getElementById("contact-section")
    .scrollIntoView({ behavior: "smooth" });
});

document.getElementById("btn-outline").addEventListener("click", () => {
  document
    .getElementById("contact-section")
    .scrollIntoView({ behavior: "smooth" });
});

// Inicializa EmailJS
(function () {
  emailjs.init("fGKp4XpRDPjNOqldy");
})();

// Formulário
const form = document.getElementById("contact-form");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  emailjs
    .sendForm("service_54o7q4q", "template_8urgwxh", this)
    .then(() => {
      alert("Mensagem enviada com sucesso!");
      form.reset();
    })
    .catch((error) => {
      alert("Erro ao enviar a mensagem.");
      console.log(error);
    });
});
