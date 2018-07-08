
// Initialize Firebase
var config = {
    apiKey: "AIzaSyBjS4qun9xBpkY_uqqrBYW2BE5joRPxLIM",
    authDomain: "work-plus.firebaseapp.com",
    databaseURL: "https://work-plus.firebaseio.com",
    projectId: "work-plus",
    storageBucket: "work-plus.appspot.com",
    messagingSenderId: "518362540746"
};
firebase.initializeApp(config);
var storage = firebase.storage();



// FirebaseUI config.
var uiConfig = {
    signInSuccessUrl: 'cadastro-vagas.html',
    signInOptions: [
        // Leave the lines as is for the providers you want to offer your users.
        firebase.auth.GoogleAuthProvider.PROVIDER_ID,
        firebase.auth.EmailAuthProvider.PROVIDER_ID
    ],
    // Terms of service url.
    tosUrl: '<your-tos-url>'
};

// Initialize the FirebaseUI Widget using Firebase.
var ui = new firebaseui.auth.AuthUI(firebase.auth());
// The start method will wait until the DOM is loaded.
ui.start('#firebaseui-auth-container', uiConfig);
