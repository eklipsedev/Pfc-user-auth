signupButton.addEventListener('click', signup);

function signup() {
  signupButton.style.display = 'none';
  signupError.style.display = 'none';
  var email = signupEmail.value;
  var password = signupPassword.value;
      if (password.length < 4) {
        alert('Password must be longer than 4 characters.');
        return;
      }

  firebase.auth().createUserWithEmailAndPassword(email, password)
    .then(function () {
       window.location.replace('./members-club');
    };
  })

    .catch(function(error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      console.log('Error Code: ' + errorCode);
      console.log ('Error Message ' + errorMessage);
      signupButton.style.display = 'block';
      signupError.innerText = errorMessage;
      signupError.style.display = 'block'; 
      // ...
    });
}

eye.addEventListener('click', showPassword);

function showPassword() {
  var eye = document.getElementById('signupPassword');
  if (eye.type === "password") {
    eye.type = "text";
  } else {
    eye.type = "password";
  }
}
