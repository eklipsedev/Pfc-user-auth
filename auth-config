// Your web app's Firebase configuration
    var firebaseConfig = {
    apiKey: "AIzaSyCuzMDALA6IDegRI8-suNTEgm1ZJLwDHhI",
    authDomain: "performance-food-1566579119507.firebaseapp.com",
    databaseURL: "https://performance-food-1566579119507.firebaseio.com",
    projectId: "performance-food-1566579119507",
    storageBucket: "performance-food-1566579119507.appspot.com",
    messagingSenderId: "386651551755",
    appId: "1:386651551755:web:b127ed813e78bf80112f0e",
    measurementId: "G-P0HSJ7KDYL"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();



var privatePages = [
  '/members-club',
  '/account/profile',
  '/category/',
  '/sub-category/'
];

var publicPages = [
  '/account/signup',
  '/account/login',
  '/account/reset-password'
];

firebase.auth().onAuthStateChanged(function (user) {
  var currentPath = window.location.pathname;
  if (user) {
    // User is signed in.
    if (publicPages.includes(currentPath)) {
      window.location.replace('/members-club');
    } else {
      console.log('user is logged in!');
      console.log('Email: ' + user.email);
      console.log('UID: ' + user.uid);
      loginLink.style.display = 'none';
    }
  } else {
    // User is signed out.
    if (privatePages.includes(currentPath)) {
      window.location.replace('/account/login');
    } else {
        console.log('no user is logged in');
        accountLink.style.display = 'none';
        logoutLink.style.display = 'none';
    }    
  }
});

//Run the initApp() function as soon as the page loads
    window.addEventListener('load', function () {
        initApp()
    });
