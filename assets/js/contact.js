document.addEventListener("DOMContentLoaded", () => {
  const nameInput = document.querySelector('input[placeholder="Name"]');
  const emailInput = document.querySelector('input[placeholder="Email"]');
  const messageInput = document.querySelector('input[placeholder="Message"]');

  const btnWhatsapp = document.getElementById('btnWhatsapp');
  const btnGmail = document.getElementById('btnGmail');
  const btnMailto = document.getElementById('btnMailto');

  const nombreCliente = "Consentido Brands"; // Cambia esto por el tuyo
  const correoDestino = "consentido.branding@gmail.com"; // Cambia este correo

  function getMessageData() {
    const name = nameInput.value.trim();
    const email = emailInput.value.trim();
    const message = messageInput.value.trim();
    return { name, email, message };
  }

  btnWhatsapp.addEventListener("click", (e) => {
    e.preventDefault();
    const { name, email, message } = getMessageData();
    const whatsappMsg = `¡Hola ${nombreCliente}! \n\nMi nombre es ${name}.\nMi correo es: ${email}\n\n${message}`;
    const url = `https://wa.me/5218717098673?text=${encodeURIComponent(whatsappMsg)}`;
    window.open(url, "_blank");
  });

  btnGmail.addEventListener("click", (e) => {
    e.preventDefault();
    const { name, email, message } = getMessageData();
    const gmailLink = `https://mail.google.com/mail/?view=cm&fs=1&to=${correoDestino}&su=Nuevo mensaje de ${name}&body=Correo: ${email}%0A%0A${message}`;
    window.open(gmailLink, "_blank");
  });

  btnMailto.addEventListener("click", (e) => {
    e.preventDefault();
    const { name, email, message } = getMessageData();
    const mailtoLink = `mailto:${correoDestino}?subject=Nuevo mensaje de ${name}&body=Correo: ${email}%0A%0A${message}`;
    window.location.href = mailtoLink;
  });
});