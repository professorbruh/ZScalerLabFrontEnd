BASE_URL = "http://localhost:7080/"
function updateUser()
{  
    var updateData = {
        "emailId" : sessionStorage.getItem("email_Id"),
        "password": document.getElementById("password").value,
        "address": document.getElementById("address").value,
        "phoneNumber":document.getElementById("phone_number").value,
        "name" : document.getElementById("name").value
        
    }
    
    console.log(updateData);
    $.ajax({
        type: "POST",
        url: BASE_URL + "customers/updateUser",
        contentType: "application/json",
        data: JSON.stringify(updateData),
        headers: {
            Authorization: "Bearer " + sessionStorage.getItem("jwt"),
            },

        success:function(data){
            console.log(data);
        },
        error: function(data){
            console.log(data);
        }

    })
}