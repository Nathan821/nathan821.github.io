function sendMail() {
  let params = { 
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    message: document.getElementById("message1").value
  };

  const servId = "service_wnahzah";
  const templateId = "template_kpqynh3";

  emailjs.send(servId, templateId, params).then(
    res => {
      document.getElementById("name").value = "";
      document.getElementById("email").value = "";
      document.getElementById("message1").value = "";
      alert("Your message was sent successfully!");
    }
  ).catch(err => {
    console.error("Failed to send email:", err);
    alert("There was an error sending your message. Please try again later.");
  });
}

