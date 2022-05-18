function updateUser()
{  
    var updateData = {
        "emailId" : sessionStorage.getItem("emailId"),
        "password": document.getElementById("password"),
        "address": document.getElementById("address"),
        "phoneNumber":document.getElementById("phoneNumber"),
        "name" : document.getElementById("name")
    }
    
    
    $.ajax({
        type: "POST",
        url: BASE_URL + "customers/createCustomer",
        contentType: "application/json",
        data: JSON.stringify(updateData),
        dataType: "json",
        success:function(data){
            
        }
        

    })
}