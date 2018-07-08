firebase.auth().onAuthStateChanged((user) => {
  if (user) {
    console.log(user.uid)
    document.getElementById('usuario').innerHTML = `Olá <i>${user.displayName}</i>`
  }
});