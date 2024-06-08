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
    url: "../PHP/process_registration.php",
    contentType: "application/json",
    data: JSON.stringify({ name: name, email: email, password: password }),
    success: function (response) {
      if (response.error) {
        alert("Error:", response.error);
      } else {
        alert(response.success);
        window.location.href =
          "http://localhost/origami-technical-test/HTML/form_login.html";
      }
    },
    error: function (xhr, status, error) {
      console.error("Error al enviar los datos de registro: " + error);
    },
  });

  return false;
}

function validateRegistrationManagement() {
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
    url: "../PHP/process_manager_request.php",
    contentType: "application/json",
    data: JSON.stringify({ name: name, email: email, password: password }),
    success: function (response) {
      if (response.error) {
        alert("Error: " + response.error);
      } else {
        alert(response.success);
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
      console.error("Error al enviar los datos de registro: " + error);
    },
  });

  return false;
}
