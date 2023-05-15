
const passwordInput = document.getElementById('password');
const showPasswordIcon = document.getElementById('showPasswordIcon');


showPasswordIcon.addEventListener('click', function() {
 if (passwordInput.type === 'password') {
    passwordInput.type = 'text';
    showPasswordIcon.classList.remove('fa-eye');
    showPasswordIcon.classList.add('fa-eye-slash');
        }
 else {
    passwordInput.type = 'password';
    showPasswordIcon.classList.remove('fa-eye-slash');
    showPasswordIcon.classList.add('fa-eye');
        }
    });



  
    const button = document.querySelector('.button');
    const form = document.querySelector('.login-form');
    
    let isButtonClicked = false;
    
    button.addEventListener('click', function(event) {
    event.preventDefault(); 
    if (isButtonClicked) {
        button.classList.remove('green-button');
        isButtonClicked =  false;
      } 
     
    else {
        button.classList.add('green-button');
        isButtonClicked =  true;
      }
    }); 
      






