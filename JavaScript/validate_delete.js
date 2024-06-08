function deleteUser(userId) {
  if (confirm("¿Estás seguro de que quieres eliminar este usuario?")) {
    $.ajax({
      type: "POST",
      url: "../PHP/process_delete.php",
      contentType: "application/json",
      data: JSON.stringify({ id: userId }),
      success: function (response) {
        if (response.error) {
          console.error("Error al eliminar el usuario: " + response.error);
        } else {
          // Recargar la tabla después de eliminar el usuario
          location.reload();
        }
      },
      error: function (xhr, status, error) {
        console.error("Error al eliminar el usuario: " + error);
      },
    });
  }
}