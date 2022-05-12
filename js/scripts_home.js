/*!
* Start Bootstrap - Simple Sidebar v6.0.5 (https://startbootstrap.com/template/simple-sidebar)
* Copyright 2013-2022 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-simple-sidebar/blob/master/LICENSE)
*/
// 
// Scripts
// 
var BASE_URL = "http://localhost:7080/";

window.addEventListener('DOMContentLoaded', event => {

    // Toggle the side navigation
    const sidebarToggle = document.body.querySelector('#sidebarToggle');
    if (sidebarToggle) {
        // Uncomment Below to persist sidebar toggle between refreshes
        // if (localStorage.getItem('sb|sidebar-toggle') === 'true') {
        //     document.body.classList.toggle('sb-sidenav-toggled');
        // }
        sidebarToggle.addEventListener('click', event => {
            event.preventDefault();
            document.body.classList.toggle('sb-sidenav-toggled');
            localStorage.setItem('sb|sidebar-toggle', document.body.classList.contains('sb-sidenav-toggled'));
        });
    }

});


var in_data =  {

emailId:sessionStorage.getItem("emailId")

}

$.ajax({
    type: "POST",
    url: BASE_URL + "customers/getCustomer",
    contentType: "application/json",
    dataType: "json",
    data: JSON.stringify(in_data),
    headers:{
        Authorization: 'Bearer ' + sessionStorage.getItem("jwt")        
        },
        success: function (data) {
            console.log(data);
            document.getElementById("name").innerHTML = data["customer"]["name"];
            document.getElementById("account_number").innerHTML = data["customer"]["accountNumber"];
            sessionStorage.setItem("accountNumber", data["customer"]["accountNumber"]);
            document.getElementById("ifsc_code").innerHTML = data["customer"]["ifscCode"];
            document.getElementById("phone_number").innerHTML = data["customer"]["phoneNumber"];
            document.getElementById("address").innerHTML = data["customer"]["address"];
            document.getElementById("email_id").innerHTML = data["customer"]["emailId"];
            document.getElementById("branch").innerHTML = data["customer"]["branchName"]

          },
          error: function (data) {
            alert("Login Failed");
          },
  });

//   ajxReq.success( function ( data, status, jqXhr ) {
//     console.log(data);
//     });

// ajxReq.error( function ( jqXhr, textStatus, errorMessage ) {
//     $( "p" ).append( "The status is :" +textStatus);
//     });





document.getElementById("name").innerHTML = "SampleName";


