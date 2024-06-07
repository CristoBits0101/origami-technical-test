function validateLogin() {
  let usuario = document.getElementById("usuario").value.trim();
  let contrasena = document.getElementById("contrasena").value.trim();

  if (usuario.length === 0 || contrasena.length === 0) {
    alert("Por favor, complete todos los campos.");
    return false;
  }

  $.ajax({
    type: "POST",
    url: "PHP/process_login.php",
    data: $("#loginForm").serialize(),
    success: function (response) {
      console.log("Datos de registro enviados correctamente");
    },
    error: function (xhr, status, error) {
      console.error("Error al enviar datos de registro: " + error);
    },
  });

  return false;
}
