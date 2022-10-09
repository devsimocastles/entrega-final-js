// NODOS 
let formulario = document.getElementById("input__contenedor");
let resultado_contenedor = document.getElementById("resultado");


// URLS
let url_ars = "../json/cotizaciones_ars.json";
let url_usd = "../json/cotizaciones_usd.json";
let url_jpy = "../json/cotizaciones_jpy.json";
let url_eur = "../json/cotizaciones_eur.json";
let url_gbp = "../json/cotizaciones_gbp.json";
let url_brl = "../json/cotizaciones_brl.json";



function fetch_moneda(moneda, moneda_a_convertir, monto){

    let url_moneda;

    if ( moneda == "ars") url_moneda = url_ars;
    else if ( moneda == "usd") url_moneda = url_usd;
    else if ( moneda == "eur") url_moneda = url_eur;
    else if ( moneda == "jpy") url_moneda = url_jpy;
    else if ( moneda == "brl") url_moneda = url_brl;
    else if ( moneda == "gbp") url_moneda = url_gbp;
    
    fetch(url_moneda)
    .then(resp => resp.json())
    .then(datos => {
        return calcular_resultado(datos, moneda_a_convertir, monto)
    });
}


function calcular_resultado(datos, moneda_a_convertir, monto){
    for (let cambio of datos.cambios) {
        if (cambio.moneda_a_convertir == moneda_a_convertir) return mostrar_resultado((monto * cambio.cambio).toFixed(2), moneda_a_convertir)
    }
}

function mostrar_resultado(resultado, moneda_a_convertir){
    resultado_contenedor.innerHTML = `${resultado} ${moneda_a_convertir.toUpperCase()}`;
}



formulario.addEventListener("submit", function (e) {

    e.preventDefault()

    let moneda = document.getElementById("moneda1").value.toLowerCase();
    let moneda_a_convertir = document.getElementById("moneda2").value.toLowerCase();
    let monto = document.getElementById("monto").value;

    console.log(moneda, moneda_a_convertir, monto);

    // COMPRUEBA SI LAS MONEDAS INGRESADAS EN AMBOS CAMPOS ES VÁLIDA
    let es_moneda_invalida = (moneda != "usd" && moneda != "ars" && moneda != "gbp" && moneda != "eur" && moneda != "jpy" && moneda != "brl") || (moneda_a_convertir != "usd" && moneda_a_convertir != "ars" && moneda_a_convertir != "gbp" && moneda_a_convertir != "eur" && moneda_a_convertir != "jpy" && moneda_a_convertir != "brl");

    if (es_moneda_invalida){
        Swal.fire({
            icon: 'error',
            title: 'Error!',
            text: `Ingresó una moneda que no existe`,
            confirmButtonText: "Aceptar",
            confirmButtonColor: "#14213D"
        })
        resultado_contenedor.innerHTML = "<p>Error!</p>"   
    }
    else if (moneda == moneda_a_convertir) {
        Swal.fire({
            icon: 'error',
            title: 'Error!',
            text: `No tiene sentido convertir una moneda a sí misma!`,
            confirmButtonText: "Aceptar",
            confirmButtonColor: "#14213D"
        })
        resultado_contenedor.innerHTML = "<p>Error!</p>"
    }
    else if (monto < 1){
        Swal.fire({
            icon: 'error',
            title: 'Error!',
            text: "El monto ingresado no puede ser menor a 1.",
            confirmButtonText: "Aceptar",
            confirmButtonColor: "#14213D"
        })
        resultado_contenedor.innerHTML = "<p>Error!</p>"
    }

    else {
        fetch_moneda(moneda, moneda_a_convertir, monto);


        function agregar_a_storage() {
            if (!sessionStorage.getItem("conversion")) {

                let resultado = fetch_moneda(moneda, moneda_a_convertir, monto);
                let operacion = {
                    "id_operacion": 0,
                    "tipo_operacion": "conversion_moneda",
                    "moneda": moneda,
                    "moneda_a_convertir": moneda_a_convertir,
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
    };
})
