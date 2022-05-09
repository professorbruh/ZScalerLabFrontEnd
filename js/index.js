var BASE_URL = "http://localhost:7080/";

function login() {
  var email = document.getElementById("emailId").value;
  var password = document.getElementById("password").value;

  var loginData = {
    emailId: email,
    password: password,
  };

  $.ajax({
    type: "POST",
    url: BASE_URL + "login",
    contentType: "application/json",
    data: JSON.stringify(loginData),
    dataType: "json",

    success: function (data) {
      alert("Login Successful");
    },
    error: function (data) {
      alert("Login Failed");
    },
  });
}