$(document).ready(

    $.ajax({
      url:"https://apipetshop.herokuapp.com/api/articulos",

    success: function (info){
      var data = info.response
      miPrograma(data)
    }
})
)
function miPrograma(articulos) {

    var app = new Vue({
        el:"#app",
        data: {
            totJuegos: [],
             totMedic: []
        }
    })
    for (i=0; i <= articulos.length-1; i++){
        if(articulos[i].tipo === "Juguete") {
          app.totJuegos.push(articulos[i])
        } else {
            app.totMedic.push(articulos[i])
        }
    }
    
     for (i=0; i <= app.totJuegos.length-1; i++){
      if(app.totJuegos[i].stock <= 5) {
        app.totJuegos[i].stock = "Ultimas unidades!!"
      }  else {
        app.totJuegos[i].stock = ""
      }
    }

for (i=0; i <= app.totMedic.length-1; i++){
  if(app.totMedic[i].stock <= 5) {
    app.totMedic[i].stock = "Ultimas unidades!!"
  }  else {
    app.totMedic[i].stock = ""
  }
}
}
function ConfirmDemo() {
  mensaje = confirm("Quieres enviar tu formulario?");
  //Detectamos si el usuario acepto el mensaje
  if (mensaje) {
  alert("Se envio tu fromulario ¡Gracias por contactarte con nosotros!");
  }
  //Detectamos si el usuario denegó el mensaje
  else {
  alert("¡Haz denegado el envio!");
  }
}