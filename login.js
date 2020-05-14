loginButton.addEventListener('click', login);

function login() {
  loginButton.style.display = 'none';
  loginError.style.display = 'none';
  var email = loginEmail.value;
  var password = loginPassword.value;

  firebase.auth().signInWithEmailAndPassword(email, password)
    .then(function () {
      window.location.replace('./members-club');
    })

    .catch(function(error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      console.log('Error Code: ' + errorCode);
      console.log ('Error Message ' + errorMessage);
      loginButton.style.display = 'block';
      loginError.innerText = errorMessage;
      loginError.style.display = 'block'; 
      // ...
    });
}
</script>
<script>
eye.addEventListener('click', showPassword);

function showPassword() {
  var eye = document.getElementById('loginPassword');
  if (eye.type === "password") {
    eye.type = "text";
  } else {
    eye.type = "password";
  }
}
