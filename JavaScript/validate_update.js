function updateUser() {
  let userId = document.getElementById("userId").value;
  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;

  $.ajax({
    type: "POST",
    url: "../PHP/process_update.php",
    contentType: "application/json",
    data: JSON.stringify({ id: userId, name: name, email: email }),
    success: function (response) {
      if (response.error) {
        console.error("Error al actualizar el usuario: " + response.error);
      } else if (response.success) {
        alert(response.success);
      } else {
        console.error("Respuesta del servidor no válida.");
      }
    },
    error: function (xhr, status, error) {
      console.error("Error al enviar los datos de actualización: " + error);
    },
  });
}
