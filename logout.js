logoutLink.addEventListener('click', logout);

function logout() {
  firebase.auth().signOut();
}
