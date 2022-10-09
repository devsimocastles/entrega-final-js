
// NODOS
let formulario = document.getElementById("temperatura__form")
let resultado_contenedor = document.getElementById("resultado")

// CONVERTIDOR
function convertir_temperatura(unidad,unidad_a_convertir, operacion){
    resultado_contenedor.innerHTML = `${(operacion).toFixed(1)} ${unidad_a_convertir}°`
    resultado = `${unidad} a ${unidad_a_convertir} = ${operacion} ${unidad_a_convertir}°`
    return resultado;
}

// SELECTOR DE FORMULA
function selector_operacion(unidad, temperatura, unidad_a_convertir) {

    //FORMULAS
    let celsius_a_fahrenheit = (temperatura * 9 / 5) + 32;
    let celsius_a_kelvin = (temperatura + 273.15);  

    let fahrenheit_a_celsius = ((temperatura - 32) * 5 / 9);
    let fahrenheit_a_kelvin = ((temperatura - 32) * 5 / 9 + 273.15);

    let kelvin_a_celsius = (temperatura - 273.15);
    let kelvin_a_fahrenheit = ((temperatura - 273.15) * 9 / 5 + 32);


    // Celsius a X unidad
    if (unidad == "c" && unidad_a_convertir == "f") {
        return celsius_a_fahrenheit
    }
    else if (unidad == "c" && unidad_a_convertir == "k") {
        return celsius_a_kelvin
    }

    // fahrenheit a X unidad
    if (unidad == "f" && unidad_a_convertir == "c") {
        return fahrenheit_a_celsius
    }
    else if (unidad == "f" && unidad_a_convertir == "k") {
        return fahrenheit_a_kelvin
    }

    // kelvin a X unidad
    if (unidad == "k" && unidad_a_convertir == "c") {
        return kelvin_a_celsius
    }
    else if (unidad == "k" && unidad_a_convertir == "f") {
        return kelvin_a_fahrenheit
    }

}



formulario.addEventListener("submit", function (e) {

    e.preventDefault()

    let unidad = document.getElementById("temperatura__1a").value.toLowerCase();
    let temperatura = document.getElementById("cantidad").value.toLowerCase();
    let unidad_a_convertir = document.getElementById("temperatura__2a").value.toLowerCase();


    if ((unidad != "k" && unidad != "f" && unidad != "c") || (unidad_a_convertir != "k" && unidad_a_convertir != "c" && unidad_a_convertir != "f")){
        Swal.fire({
            icon: 'error',
            title: 'Error!',
            text:"Se ingresó una unidad inválida!",
            confirmButtonText: "Aceptar",
            confirmButtonColor: "#14213D"
        })
        resultado_contenedor.innerHTML = "<p>Error!</p>"
    }

   else if (unidad == unidad_a_convertir){
        Swal.fire({
            icon: 'error',
            title: 'Error!',
            text:"No tiene sentido convertir una unidad a sí misma!",
            confirmButtonText: "Aceptar",
            confirmButtonColor: "#14213D"
        })
        resultado_contenedor.innerHTML = "<p>Error!</p>"
    }

    else if ((unidad == "c" && temperatura < -273) || (unidad == "f" && temperatura < -460) || (unidad == "k" && temperatura < 0)){
            Swal.fire({
                icon: 'error',
                title: 'Error!',
                text: `Temperatura Inválida: es menor al cero absoluto:
                    Celsius: -273 C°, Fahrenheit: -460 F° y Kelvin: 0 K°
                `,
                confirmButtonText: "Aceptar",
                confirmButtonColor: "#14213D"
            })
            resultado_contenedor.innerHTML = "<p>Error!</p>"

    }

    else if ( isNaN(temperatura) ){
        Swal.fire({
            icon: 'error',
            title: 'Error!',
            text: "La cantidad de temperatura ingresada no es un número.",
            confirmButtonText: "Aceptar",
            confirmButtonColor: "#14213D"
        })
        resultado_contenedor.innerHTML = "<p>Error!</p>"
    }

    else {
        convertir_temperatura(unidad, unidad_a_convertir, selector_operacion(unidad, parseFloat(temperatura), unidad_a_convertir));
        
    function agregar_a_storage(){
        if(!sessionStorage.getItem("conversion")){
  
            let resultado = convertir_temperatura(unidad, unidad_a_convertir, selector_operacion(unidad, parseFloat(temperatura), unidad_a_convertir));
            let operacion = { 
                "id_operacion": 0,
                "tipo_operacion": "conversion_temperatura",
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
    
      agregar_a_storage();
    }
        
})