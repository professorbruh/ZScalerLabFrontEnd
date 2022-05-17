var transactData = {
    emailId: sessionStorage.getItem("emailId"),
   };
    
   $.ajax({
    url: "http://localhost:7080/transaction/history",
    type: "POST",
    contentType: "application/json",
    data: JSON.stringify(transactData),
    headers: {
    Authorization: "Bearer " + sessionStorage.getItem("jwt"),
    },
    
    success: function (history) {
    $("#example").dataTable({
    data: history.data,
    columns: [
    { data: "id" },
    { data: "sender" },
    { data: "receiver" },
    { data: "amount" },
    {
    data: "status",
    render: function (data, type, row) {
    if (row.status == "Complete") {
    return '<span class="text-success">Complete</span>';
    } else {
    return '<span class="text-danger">Failed</span>';
    }
    },
    },
    { data: "date" },
    ],
    });
    },
   });

                          