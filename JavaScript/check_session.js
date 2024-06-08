function getCookie(name) {
  const cookieString = document.cookie;
  const cookies = cookieString.split(";");
  for (let i = 0; i < cookies.length; i++) {
    const cookie = cookies[i].trim();
    if (cookie.startsWith(name + "=")) {
      return cookie.substring(name.length + 1);
    }
  }
  return null;
}

if (!getCookie("PHPSESSID")) {
  window.location.href ="http://localhost/origami-technical-test/HTML/form_login.html";
}
