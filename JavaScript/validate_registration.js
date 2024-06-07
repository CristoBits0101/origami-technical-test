function validateRegistration() {
  let name = document.getElementById("name").value.trim();
  let email = document.getElementById("email").value.trim();
  let password = document.getElementById("password").value.trim();
  const emailPattern = /.+@.+\..+/;

  if (name.length === 0 || email.length === 0 || password.length === 0) {
    alert("Por favor, rellene todos los campos.");
    return false;
  }

  if (name.length < 3 || name.length > 20) {
    alert("El nombre debe tener entre 3 y 20 caracteres.");
    return false;
  }

  if (!emailPattern.test(email)) {
    alert("El correo electrónico no es válido.");
    return false;
  }

  if (password.length < 8 || password.length > 30) {
    alert("La contraseña debe tener entre 8 y 30 caracteres.");
    return false;
  }

  $.ajax({
    type: "POST",
    url: "PHP/process_registration.php",
    data: $("#registrationForm").serialize(),
    success: function (response) {
      console.log("Datos de registro enviados correctamente");
    },
    error: function (xhr, status, error) {
      console.error("Error al enviar datos de registro: " + error);
    },
  });

  return false;
}
