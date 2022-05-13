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

function transfer(){
    var receiver = document.getElementById("account_number").value;
    var sender = sessionStorage.getItem("accountNumber");
    var amount = document.getElementById("amount").value;
    if (amount < 0) return;
    var transferData = {
      sender: sender,
      receiver: receiver,
      amount: amount,
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
