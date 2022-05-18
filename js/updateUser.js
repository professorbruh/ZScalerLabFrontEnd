BASE_URL = "http://localhost:7080/"
function updateUser()
{  
    var updateData = {
        "emailId" : document.getElementById("emailId").value,
        "password": document.getElementById("password").value,
        "address": document.getElementById("address").value,
        "phoneNumber":document.getElementById("phoneNumber").value,
        "name" : document.getElementById("name").value
        
    }
    if(updateData["emailId"] != '')
    
    console.log(updateData);
    $.ajax({
        type: "POST",
        url: BASE_URL + "customers/updateUser",
        contentType: "application/json",
        data: JSON.stringify(updateData),
        headers: {
            Authorization: "Bearer " + sessionStorage.getItem("jwt"),
            },

        Swal.fire({
        position: 'top-center',
        icon: 'success',
        title: 'Success',
        showConfirmButton: false,
        timer: 1500
      }).then(() =>{
      sessionStorage.clear();
      });
    },
    error: function (data) {
      window.location.href = "/profile.html";
    },

    })
}
