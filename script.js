(function(){
emailjs.init("TU_PUBLIC_KEY");
})();

document.getElementById("formulario").addEventListener("submit", function(e){
e.preventDefault();

emailjs.send("service_7dnacju","template_xhhn90a",{
name: document.querySelector("input[type=text]").value,
email: document.querySelector("input[type=email]").value,
message: document.querySelector("textarea").value
})
.then(function(){
alert("Correo enviado correctamente");
});
});
