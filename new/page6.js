// $(document).ready(function() {
//     $('#signup-form').submit(function(e) {
//       e.preventDefault(); 
  
//       $('#error-message').text('');
  
//       let fields = ['username', 'email', 'password'];
//       for (let field of fields) {
//         if (!$(`#${field}`).val()) {
//           $('#error-message').text('All fields are required.');
//           return;
//         }
//       }
//       let emailFormat = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//       if (!emailFormat.test($('#email').val())) {
//         $('#error-message').text('Please enter a valid email address.');
//         return;
//       }
//        alert('Sign up successful!');
//     });
//   });
   
    
    
    
    let sub = document.querySelector('#submit');
    sub.addEventListener('click' , function () {    
    alert('You just created an account');
    alert('Welcome to your new account');
});
