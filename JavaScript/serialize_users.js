$(document).ready(function () {
  $.ajax({
    type: "GET",
    url: "../PHP/return_users.php",
    contentType: "application/json",
    success: function (response) {
      if (response.error) {
        console.error(
          "Error al cargar la tabla de usuarios: " + response.error
        );
      } else {
        if (response.users) {
          var table = $("<table></table>");
          var header = $(
            "<tr><th>Name</th><th>Email</th><th>Actualizar</th><th>Eliminar</th></tr>"
          );
          table.append(header);

          $.each(response.users, function (index, user) {
            var row = $("<tr></tr>");
            row.append("<td>" + user.user_name + "</td>");
            row.append("<td>" + user.user_email + "</td>");
            row.append(
              "<td><a class='redirectUpdate' href='http://localhost/origami-technical-test/HTML/form_update.html?id=" +
                user.id +
                "&name=" +
                encodeURIComponent(user.user_name) +
                "&email=" +
                encodeURIComponent(user.user_email) +
                "'>Actualizar</a></td>"
            );
            row.append(
              "<td><button class='deleteButton' onclick='validateDelete(" +
                user.id +
                ")'>Eliminar</button></td>"
            );
            table.append(row);
          });

          $("main").empty().append(table);
        }
      }
    },
    error: function (xhr, status, error) {
      console.error("Error al cargar la tabla de usuarios: " + error);
    },
  });
});
