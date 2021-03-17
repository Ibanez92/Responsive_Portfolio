// function sendMail(params) {
//     var tempParams = {
//         from_name: document.getElementById("fromName").value,
//         to_name: document.getElementById("toName").value,
//         message: document.getElementById("msg").value,
//     };

//     emailjs.send('service_6c5gizv', 'template_mq0xm2c', tempParams, 'user_XtVxM576M6HpDPwJw5wkw')
//     .then(function(response) {
//         console.log("success", response.status, response.text);
//     }, function(err) {
//         console.log('Failed...', err);
//     });
// };


//     var tempParams = {
//     to_name: ((document.getElementById("toName")||{}).value)||"",
//     from_name: document.getElementById('fromName'),
//     message: 'msg'
//   };

//   emailjs.send('service_6c5gizv', 'template_mq0xm2c', tempParams)
//     .then(function(response) {
//       console.log('SUCCESS!', response.status, response.text);
//     }, function(error) {
//       console.log('FAILED...', error);
//     });
