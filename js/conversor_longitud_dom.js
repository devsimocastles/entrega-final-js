
// NODOS DOM

let formulario = document.getElementById("longitud__form");
let resultado_contenedor = document.getElementById("resultado");


// FUNCIONES

function conversion_longitud(unidad, unidad_a_convertir, operacion) {
  resultado_contenedor.innerHTML = `${(operacion).toFixed(3)} ${unidad_a_convertir}`
  resultado = `${unidad} a ${unidad_a_convertir} = ${operacion} ${unidad_a_convertir}`;
  return resultado
}


function elegir_formula(unidad, unidad_a_convertir, longitud) {
  // OPERACIONES
  // metros A X UNIDAD
  let metros_a_pies = longitud * 3.281;
  let metros_a_pulgadas = longitud * 39.37;
  let metros_a_millas = (longitud / 1609).toFixed(3);
  let metros_a_yardas = longitud * 1.094;


  // pies A X UNIDAD
  let pies_a_metros = (longitud / 3.281).toFixed(3);
  let pies_a_pulgadas = longitud * 12;
  let pies_a_millas = (longitud / 5280).toFixed(3);
  let pies_a_yardas = (longitud / 3).toFixed(3);


  // pulgada A X UNIDAD
  let pulgadas_a_metros = (longitud / 39.37).toFixed(3);
  let pulgadas_a_pies = (longitud / 12).toFixed(3);
  let pulgadas_a_millas = (longitud / 63360).toFixed(8);
  let pulgadas_a_yardas = (longitud / 36).toFixed(3);


  // millas A X UNIDAD
  let millas_a_metros = longitud * 1609;
  let millas_a_pies = longitud * 5280;
  let millas_a_pulgadas = longitud * 63360;
  let millas_a_yardas = longitud * 1760;


  // yardas A X UNIDAD
  let yardas_a_metros = (longitud / 1.094).toFixed(2);
  let yardas_a_pies = longitud * 3;
  let yardas_a_pulgadas = longitud * 36;
  let yardas_a_millas = (longitud / 1760).toFixed(8);


  if (unidad == "metros" && unidad_a_convertir == "pies") {
    return metros_a_pies
  }
  else if (unidad == "metros" && unidad_a_convertir == "pulgadas") {
    return metros_a_pulgadas
  }
  else if (unidad == "metros" && unidad_a_convertir == "millas") {
    return metros_a_millas
  }
  else if (unidad == "metros" && unidad_a_convertir == "yardas") {
    return metros_a_yardas
  }



  if (unidad == "pies" && unidad_a_convertir == "metros") {
    return pies_a_metros
  }
  else if (unidad == "pies" && unidad_a_convertir == "pulgadas") {
    return pies_a_pulgadas
  }
  else if (unidad == "pies" && unidad_a_convertir == "millas") {
    return pies_a_millas
  }
  else if (unidad == "pies" && unidad_a_convertir == "yardas") {
    return pies_a_yardas
  }



  if (unidad == "pulgadas" && unidad_a_convertir == "metros") {
    return pulgadas_a_metros
  }
  else if (unidad == "pulgadas" && unidad_a_convertir == "pies") {
    return pulgadas_a_pies
  }
  else if (unidad == "pulgadas" && unidad_a_convertir == "millas") {
    return pulgadas_a_millas
  }
  else if (unidad == "pulgadas" && unidad_a_convertir == "yardas") {
    return pulgadas_a_yardas
  }



  if (unidad == "millas" && unidad_a_convertir == "metros") {
    return millas_a_metros
  }
  else if (unidad == "millas" && unidad_a_convertir == "pies") {
    return millas_a_pies
  }
  else if (unidad == "millas" && unidad_a_convertir == "pulgadas") {
    return millas_a_pulgadas
  }
  else if (unidad == "millas" && unidad_a_convertir == "yardas") {
    return millas_a_yardas
  }



  if (unidad == "yardas" && unidad_a_convertir == "metros") {
    return yardas_a_metros
  }
  else if (unidad == "yardas" && unidad_a_convertir == "pies") {
    return yardas_a_pies
  }
  else if (unidad == "yardas" && unidad_a_convertir == "pulgadas") {
    return yardas_a_pulgadas
  }
  else if (unidad == "yardas" && unidad_a_convertir == "millas") {
    return yardas_a_millas
  }
}


formulario.addEventListener("submit", function (e) {

  e.preventDefault();

  let unidad = document.getElementById("input_1").value.toLowerCase();
  let longitud = document.getElementById("cantidad").value.toLowerCase();
  let unidad_a_convertir = document.getElementById("input_2").value.toLowerCase();


  let es_longitud_invalida = (unidad != "metros" && unidad != "pulgadas" && unidad != "pies" && unidad != "millas" && unidad != "yardas") || (unidad_a_convertir != "metros" && unidad_a_convertir != "pulgadas" && unidad_a_convertir != "pies" && unidad_a_convertir != "millas" && unidad_a_convertir != "yardas");

  if (es_longitud_invalida) {
    Swal.fire({
      icon: 'error',
      title: 'Error!',
      text: "Se ingresó una unidad que no existe!",
      confirmButtonText: "Aceptar",
      confirmButtonColor: "#14213D"
    })
    resultado_contenedor.innerHTML = "<p>Error!</p>"
  }

  else if (unidad == unidad_a_convertir) {
    Swal.fire({
      icon: 'error',
      title: 'Error!',
      text: "No tiene sentido convertir una unidad a sí misma!",
      confirmButtonText: "Aceptar",
      confirmButtonColor: "#14213D"
    })
    resultado_contenedor.innerHTML = "<p>Error!</p>"
  }

  else if (isNaN(longitud)) {
    Swal.fire({
      icon: 'error',
      title: 'Error!',
      text: "Se ingresó una longitud inválida!",
      confirmButtonText: "Aceptar",
      confirmButtonColor: "#14213D"
    })
    resultado_contenedor.innerHTML = "<p>Error!</p>"
  }

  else if (longitud < 0) {
    Swal.fire({
      icon: 'error',
      title: 'Error!',
      text: "La longitud debe ser mayor a 0",
      confirmButtonText: "Aceptar",
      confirmButtonColor: "#14213D"
    })
    resultado_contenedor.innerHTML = "<p>Error!</p>"
  }

  else {
    conversion_longitud(unidad, unidad_a_convertir, elegir_formula(unidad, unidad_a_convertir, parseFloat(longitud)))

    function agregar_a_storage() {
      if (!sessionStorage.getItem("conversion")) {

        let resultado = conversion_masa(unidad, unidad_a_convertir, elegir_formula(unidad, unidad_a_convertir, parseFloat(peso)))
        let operacion = {
          "id_operacion": 0,
          "tipo_operacion": "conversion_longitud",
          "unidad": unidad,
          "unidad_a_convertir": unidad_a_convertir,
          "resultado": resultado
        }

        sessionStorage.setItem("conversion", JSON.stringify(operacion));

        let dato_storage = JSON.parse(sessionStorage.getItem("conversion"));
        dato_storage.id_operacion++;

        sessionStorage.setItem("conversion", JSON.stringify(dato_storage))

      }
      else {
        let dato_storage = JSON.parse(sessionStorage.getItem("conversion"));
        dato_storage.id_operacion++;

        sessionStorage.setItem("conversion", JSON.stringify(dato_storage))
      }
    }

    agregar_a_storage()
  }
})
