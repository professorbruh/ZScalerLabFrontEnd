function update_password(){

    let email_input = $('#emailIdInput').val()
    let old_password = $("#oldpasswordInput").val()
    let new_password = $("#newpasswordInput").val()


    // new password must be different from old password

    if(old_password === new_password){
        alert("New password must be different from old password")
    }

    data = {
        "emailId":email_input
    }

    if((email_input.length === 0)||(old_password.length === 0)||(new_password.length === 0)){
        alert("Enter all the fields")
        return
    }

    //validating email

    const validateEmail = (email) => {
        return String(email)
          .toLowerCase()
          .match(
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
          );
      };

      if(!validateEmail(email_input)){
        alert("Enter Valid mail");
      }


    // updating the password
    token = sessionStorage.getItem("jwt")
    data = {
        emailId:email_input,
        oldPassword:old_password,
        newPassword: new_password
    }
    console.log(token);
    $.ajax({
        url : "http://localhost:7080/customers/updatePassword",
        type : "POST",
        contentType: "application/json",
        data: JSON.stringify(data),
        headers: {
            Authorization: 'Bearer '+token

        },

        success: function success(data){

           alert(data);
        },

        error: function error(data){
            console.log("unable to reach the website, error : ", data);
        }
    })

}

update_btn = document.getElementById("update_button");
update_btn.addEventListener("click", update_password);