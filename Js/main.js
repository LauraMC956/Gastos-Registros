let app = document.getElementById('typewriter');
 
let typewriter = new Typewriter(app, {
  loop: true,
  delay: 75,
});
 
typewriter
  .pauseFor(2500)
  .typeString('La ciudad de la eterna primavera')
  .pauseFor(200)
  .deleteChars(10)
  .start();

  function registrarUsuario() {
    var email = document.getElementById('email').value;
    var name = document.getElementById('name').value;
    var phone = document.getElementById('phone').value;

    var usuario = {
      email: email,
      name: name,
      phone: phone
    };

    localStorage.setItem('usuarioRegistrado', JSON.stringify(usuario));

    
    window.location.href = 'form.html';
  }