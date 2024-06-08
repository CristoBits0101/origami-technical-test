function logOut() {
  $.ajax({
    type: "POST",
    url: "http://localhost/origami-technical-test/PHP/log_out.php",
    contentType: "application/json",
    data: JSON.stringify({ logOut: true }),
    success: function (response) {
      if (response.error) {
        alert("Error: " + response.error);
      } else {
        alert(response.success);
        window.location.href =
          "http://localhost/origami-technical-test/HTML/form_login.html";
      }
    },
    error: function (xhr, status, error) {
      console.error("Error al cerrar la sesión: " + error);
    },
  });

  return false;
}
