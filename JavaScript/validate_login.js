function validateLogin() {
  let email = document.getElementById("email").value.trim();
  let password = document.getElementById("password").value.trim();

  if (email.length === 0 || password.length === 0) {
    alert("Por favor, complete todos los campos.");
    return false;
  }

  $.ajax({
    type: "POST",
    url: "../PHP/process_login.php",
    contentType: "application/json",
    data: JSON.stringify({ email: email, password: password }),
    success: function (response) {
      if (response.error) {
        alert("Error:", response.error);
      } else {
        alert(response.success);
        window.location.href = "../index.html";
      }
    },
    error: function (xhr, status, error) {
      console.error("Error al enviar los datos de login: " + error);
    },
  });

  return false;
}
