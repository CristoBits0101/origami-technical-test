function validateDelete(userId) {
  $.ajax({
    type: "POST",
    url: "process_manager_delete.php",
    contentType: "application/json",
    data: JSON.stringify({ userId: userId }),
    success: function (response) {
      if (response.error) {
        alert("Error al eliminar usuario: " + response.error);
      } else {
        alert("Usuario eliminado exitosamente.");
      }
    },
    error: function (xhr, status, error) {
      console.error("Error al eliminar usuario: " + error);
    },
  });
}

$(document).ready(function () {
  $.each(response.users, function (index, user) {
    var row = $("<tr></tr>");
    row.append("<td>" + user.user_name + "</td>");
    row.append("<td>" + user.user_email + "</td>");
    row.append("<td><button class='updateButton'>Actualizar</button></td>");
    row.append(
      "<td><button class='deleteButton' onclick='validateDelete(" +
        user.user_id +
        ")'>Eliminar</button></td>"
    );
    table.append(row);
  });
});
