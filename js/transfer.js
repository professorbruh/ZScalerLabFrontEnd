var BASE_URL = "http://localhost:7080/";

function deposit(){
    if(amount < 0) return;
    var amount = document.getElementById("amount").value;
    transact(amount);
}

function withdraw(){
    if(amount < 0) return;
    var amount = document.getElementById("amount").value;
    amount = 0 - parseInt(amount);
    transact(amount);
}

function transact(amount){
    var emailId = sessionStorage.getItem("emailId");
    var transactData = {
        emailId: emailId,
        amount: amount,
    }

    $.ajax({
        type: "POST",
        url: BASE_URL + "transaction/direct",
        contentType: "application/json",
        dataType: "json",
        data: JSON.stringify(transactData),
        headers:{
            Authorization: 'Bearer ' + sessionStorage.getItem("jwt")        
        },
        success: function (data) {
            Swal.fire({
              position: 'top-center',
              icon: 'success',
              title: 'Transaction Successful',
              showConfirmButton: false,
              timer: 1500
            }).then(()=>{
              console.log(data)
            })
          },
          error: function (data) {
            Swal.fire({
              position: 'top-center',
              icon: 'error',
              title: 'Transaction failed',
              showConfirmButton: false,
              timer: 1500
            }).then(()=>{
                console.log(data);
            })
          },
        
    })
}
function success1(){

  // Swal.fire("Congratulations", "Transfer successful", "success");
  Swal.fire({
    position: 'top-center',
    icon: 'success',
    title: 'Transaction successful',
    showConfirmButton: false,
    timer: 1500
  }).then(()=>{
      $('#closebutton').click();
      window.location.href="./home.html";
  })

}
function transfer(){
    var receiver = document.getElementById("account_number").value;
    var sender = sessionStorage.getItem("emailId")
    var amount = document.getElementById("amount").value;
    sessionStorage.setItem("receiver",receiver);
    sessionStorage.setItem("amount",amount);
    Swal.fire({
      title: 'Password is required for transaction:',
      input: 'password',
      inputAttributes: {
        autocapitalize: 'off'
      },
      showCancelButton: true,
      confirmButtonText: 'ENTER',
      showLoaderOnConfirm: true,
      allowOutsideClick: false,
      preConfirm: (password)=>{

      if (amount < 0) return;
      var transferData = {
        sender: sender,
        receiver: receiver,
        amount: amount,
        password: password,
      }

      $.ajax({
        type: "POST",
        url: BASE_URL + "transaction/transfer",
        contentType: "application/json",
        data: JSON.stringify(transferData),
        dataType: "json",
        headers:{
          Authorization: 'Bearer ' + sessionStorage.getItem("jwt")        
        },
        success: function (data) {
          // Swal.fire({
          //   position: 'top-center',
          //   icon: 'success',
          //   title: 'Transaction Successful',
          //   showConfirmButton: false,
          //   timer: 1500
          // }).then(()=>{
          //   console.log(data)
          // })
          $("#exampleModalCenter").modal('show');
          console.log("We are in transaciton success");
        },
        error: function (data) {
          Swal.fire({
            position: 'top-center',
            icon: 'error',
            title: 'Transaction failed',
            showConfirmButton: false,
            timer: 1500
          }).then(()=>{
              console.log(data);
          })
        },

      })
      }
})
// window.location.href="/transfer1.html";
$("#button1").click();
}

function failure()
{
   var sender = sessionStorage.getItem("emailId")
   var receiver = sessionStorage.getItem("receiver",receiver);
   var amount = sessionStorage.getItem("amount",amount);
   var transferData={
    
       "sender":sender,
       "receiver":receiver ,
       "amount":amount
  }
  // Swal.fire({
  //   position: 'top-center',
  //   icon: 'success',
  //   title: 'Transaction successful',
  //   showConfirmButton: false,
  //   timer: 1500
  // }).then(()=>{
  //     $('#closebutton').click();
  //     window.location.href="/home.html";
  // })
  $.ajax(
    {
     type: "POST",
     url: BASE_URL + "transaction/reversal",
     contentType: "application/json",
     data: JSON.stringify(transferData),
     dataType: "json",
     headers:{
       Authorization: 'Bearer ' + sessionStorage.getItem("jwt")        
     },
     success:function(data)
     {
       Swal.fire({
          icon: 'Error',
          title: 'Transaction Failed',
          footer: "Payment gateway status returned failed"
       }).then(()=>{
          $('#closebutton').click();
          window.location.href="./home.html";
       })

       }
     ,
     error:function(data)
     {
      Swal.fire({
        icon: 'Error',
        title: 'Reversal Failed',
        footer: "Payment gateway status returned failed"

     }).then(()=>{
      $('#closebutton').click();
      window.location.href="./home.html";
   })
     }
    }
  )
   }
   



