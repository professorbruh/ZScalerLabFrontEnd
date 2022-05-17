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
      
      Swal.fire({
        position: 'top-center',
        icon: 'success',
        title: 'Log in successful!',
        showConfirmButton: false,
        timer: 1500
      }).then(() =>{
      sessionStorage.setItem("emailId",email);
      sessionStorage.setItem("jwt",data["jwt"]);
      console.log(data)
      window.location.href = "/home.html";
      });
    },
    error: function (data) {
      Swal.fire({
        position: 'top-center',
        icon: 'error',
        title: 'Log in failed!',
        showConfirmButton: false,
        timer: 1500
      }).then(()=>{
        console.log(data);
        document.getElementById("error").innerHTML ='Invalid Login Details';
      })
    },


  });
}

function register(){
  Swal.fire({
    title: "Please check you details once",
    text: "confirm here to register",
    icon: "information",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Yes, register!",
  }).then((result) => {
    if (result.isConfirmed) {
        document.getElementById("closeProfileModal").click();
        Swal.fire("Congratulations", "Registration successful", "success");
    }
  });
  var accountNumber = 1000000000000;
  var name = document.getElementById("name").value;
  var emailId = document.getElementById("emailId").value;
  var phoneNumber = document.getElementById("phoneNumber").value;
  var address = document.getElementById("address").value;
  var ifscCode = document.getElementById("ifscCode").value;
  var branchName = document.getElementById("branchName").value;
  var password = document.getElementById("password").value;

  var registerData = {
    name: name,
    ifscCode: ifscCode,
    accountNumber: accountNumber,
    phoneNumber: phoneNumber,
    address: address,
    branchName: branchName,
    emailId: emailId,
    password: password,
  }

  $.ajax({
    type: "POST",
    url: BASE_URL + "customers/createCustomer",
    contentType: "application/json",
    data: JSON.stringify(registerData),
    dataType: "json",

    success: function (data) {
      Swal.fire({
        position: 'top-center',
        icon: 'success',
        title: 'Registration Successful',
        showConfirmButton: false,
        timer: 1500
      }).then(()=>{
        location.href='./index.html';
      })
    },
    error: function (data) {
      Swal.fire({
        position: 'top-center',
        icon: 'error',
        title: 'Registration failed',
        showConfirmButton: false,
        timer: 1500
      })
    },
  });
}
