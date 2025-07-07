document.addEventListener("DOMContentLoaded", () => {
  const copyBtn = document.getElementById("copyIcon");
  const emailText = document.getElementById("emailText");

  copyBtn.addEventListener("click", () => {
    const text = emailText.textContent;

    navigator.clipboard.writeText(text).then(() => {
      // Confirmación visual opcional
      copyBtn.classList.add("copied");
      copyBtn.title = "Copiado!";
      setTimeout(() => {
        copyBtn.classList.remove("copied");
        copyBtn.title = "";
      }, 1500);
    }).catch(err => {
      console.error("No se pudo copiar:", err);
    });
  });
});