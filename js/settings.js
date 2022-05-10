function update_password(){
    let email_input = $('#emailIdInput').val()
    let old_password = $("#oldpasswordInput").val()
    let new_password = $("#newpasswordInput").val()
    console.log(email_input)
    console.log(old_password)
    console.log(new_password)
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
    //validating the current password
    $.ajax({
        url : "https://localhost:7080/getCustomer",
        type : "GET",
        data:data
    })
    success: function success(data){
        if(result["password"] != old_password){
            alert("Enter your current password correctly");
        }
    }
    error: function error(data, err){
        console.log("unable to reach the website, error : ", err);
    }
    // updating the password
}
update_btn = document.getElementById("update_button");
update_btn.addEventListener("click", update_password);