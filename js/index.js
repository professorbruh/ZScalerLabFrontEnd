var BASE_URL = "http://localhost:7080/";

function login() {
  var email = document.getElementById("emailId").value;
  var password = document.getElementById("password").value;
  sessionStorage.setItem("emailID", email);
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

function register(){
  var name = document.getElementById("name").value;
  var emailId = document.getElementById("emailId").value;
  var phoneNumber = document.getElementById("phoneNumber").value;
  var address = document.getElementById("address").value;
  var ifscCode = document.getElementById("ifscCode").value;
  var branchName = document.getElementById("branchName").value;
  var password = document.getElementById("password1").value
}
