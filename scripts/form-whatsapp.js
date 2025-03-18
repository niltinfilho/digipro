function sendWhatsApp() {
  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;
  let phone = document.getElementById("phone").value;
  let message = document.getElementById("message").value;

  let phoneNumber = '+5511912276682'

  let url = "https://api.whatsapp.com/send?phone=" + phoneNumber + "&text="
    + "*Nome:* " + name + "%0A"
    + "*Email:* " + email + "%0A"
    + "*Telefone:* " + phone + "%0A"
    + "*Mensagem:* " + message + "%0A"
    ;
  window.open(url, "_blank");
}
