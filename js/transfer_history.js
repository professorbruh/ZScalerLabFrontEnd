var transactData={
    "emailId": sessionStorage.getItem("emailId")
};
console.log(transactData);
// $('#example').DataTable( {
//     ajax: {
//         url: 'http://localhost:7080/transaction/history',
//         type : "POST",
//         contentType: "application/json",
//         processing: true,
//         serverSide: true,
//         data: JSON.stringify(transactData),
//         headers: {
//             Authorization: 'Bearer '+sessionStorage.getItem("jwt")
//         }
//     },
//     columns:[
//             { data: 'id' },
//             { data: 'sender' },
//             { data: 'receiver' },
//             { data: 'amount' },
//             { data: 'status' }

//     ]
//     }
//  );
// $.ajax({
//     type: "POST",
//     url: "http://localhost:7080/transaction/history",
//     contentType: "application/json",
//     dataType: "json",
    
//     data: JSON.stringify(transactData),
//     headers:{
//         Authorization: 'Bearer ' + sessionStorage.getItem("jwt")        
//     },
//     success: function (data) {
//         $('#example').DataTable( {
//             columns:[
//                             { data: 'id' },
//                             { data: 'sender' },
//                             { data: 'receiver' },
//                             { data: 'amount' },
//                             { data: 'status' }
//             ]
//         })
//       },
//       error: function (data) {
//         console.log(data)}
//       })


    //   $('#example').DataTable({
    //     processing: true,
    //     serverSide: true,
    //     ajax: 'scripts/server_processing.php',
    // });
    

    $('#example').DataTable( {
        serverSide: true,
        ajax: {
            url: 'http://localhost:7080/transaction/history',
            type : "POST",
            contentType: "application/json",
            data: JSON.stringify(transactData),
        headers: {
            Authorization: 'Bearer '+sessionStorage.getItem("jwt")
        },
            dataFilter: function(data){
                
                var json = jQuery.parseJSON( data );
                json.recordsTotal = json.total;
                json.recordsFiltered = json.total;
                json.data = json.list;
     
                return JSON.stringify( json ); // return JSON string
            },
            success:function(data){
                console.log(data);
            }
        }
    } );
                          