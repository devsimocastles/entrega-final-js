
// NODOS 
let formulario = document.getElementById("input__contenedor");
let resultado_contenedor = document.getElementById("resultado");

// CONVERSOR
function conversion_moneda(unidad, moneda_a_convertir, operacion) {
    resultado_contenedor.innerHTML = `${(operacion).toFixed(3)} ${moneda_a_convertir.toUpperCase()}`;
    let conversion_moneda = `${unidad} - ${moneda_a_convertir} = ${operacion} ${moneda_a_convertir}`;
    return conversion_moneda
}

// SELECTOR DE FORMULA
function elegir_formula(unidad, monto, moneda_a_convertir) {

    // TIPOS DE CAMBIO:
    // PESO ARGENTINO A X MONEDA
    let cambio_ars_usd = monto * 0.0037;
    let cambio_ars_jpy = monto * 0.51;
    let cambio_ars_eur = monto * 0.0037;
    let cambio_ars_gbp = monto * 0.00323;
    let cambio_ars_brl = monto * 0.0188;

    // DOLAR AMERICANO A X MONEDA
    let cambio_usd_ars = monto * 140.16;
    let cambio_usd_jpy = monto * 140.52;
    let cambio_usd_eur = monto * 1.01;
    let cambio_usd_gbp = monto * 0.87;
    let cambio_usd_brl = monto * 5.15;

    // YEN JAPONÉS A X MONEDA
    let cambio_jpy_ars = monto * 1.00;
    let cambio_jpy_usd = monto * 0.01;
    let cambio_jpy_gbp = monto * 0.0062;
    let cambio_jpy_eur = monto * 0.01;
    let cambio_jpy_brl = monto * 0.0367;

    // EURO A X MONEDA
    let cambio_eur_ars = monto * 139.20;
    let cambio_eur_usd = monto * 0.99;
    let cambio_eur_gbp = monto * 0.86;
    let cambio_eur_brl = monto * 5.12;
    let cambio_eur_jpy = monto * 139.56;

    // LIBRA ESTERLINA A X MONEDA
    let cambio_gbp_ars = monto * 161.41;
    let cambio_gbp_usd = monto * 1.15;
    let cambio_gbp_jpy = monto * 161.83;
    let cambio_gbp_eur = monto * 1.16;
    let cambio_gbp_brl = monto * 5.94;

    // REAL BRASILEÑO A X MONEDA
    let cambio_brl_ars = monto * 27.18;
    let cambio_brl_usd = monto * 0.19;
    let cambio_brl_eur = monto * 0.20;
    let cambio_brl_jpy = monto * 27.25;
    let cambio_brl_gbp = monto * 0.17;


    if (unidad == "ars" && moneda_a_convertir == "usd") return cambio_ars_usd;

    else if (unidad == "ars" && moneda_a_convertir == "jpy") return cambio_ars_jpy

    else if (unidad == "ars" && moneda_a_convertir == "eur") return cambio_ars_eur

    else if (unidad == "ars" && moneda_a_convertir == "gbp") return cambio_ars_gbp

    else if (unidad == "ars" && moneda_a_convertir == "brl") return cambio_ars_brl


    if (unidad == "usd" && moneda_a_convertir == "ars") return cambio_usd_ars;

    else if (unidad == "usd" && moneda_a_convertir == "jpy") return cambio_usd_jpy

    else if (unidad == "usd" && moneda_a_convertir == "eur") return cambio_usd_eur

    else if (unidad == "usd" && moneda_a_convertir == "gbp") return cambio_usd_gbp

    else if (unidad == "usd" && moneda_a_convertir == "brl") return cambio_usd_brl


    if (unidad == "jpy" && moneda_a_convertir == "ars") return cambio_jpy_ars;

    else if (unidad == "jpy" && moneda_a_convertir == "usd") return cambio_jpy_usd

    else if (unidad == "jpy" && moneda_a_convertir == "eur") return cambio_jpy_eur

    else if (unidad == "jpy" && moneda_a_convertir == "gbp") return cambio_jpy_gbp

    else if (unidad == "jpy" && moneda_a_convertir == "brl") return cambio_jpy_brl


    if (unidad == "eur" && moneda_a_convertir == "ars") return cambio_eur_ars;

    else if (unidad == "eur" && moneda_a_convertir == "jpy") return cambio_eur_jpy

    else if (unidad == "eur" && moneda_a_convertir == "usd") return cambio_eur_usd

    else if (unidad == "eur" && moneda_a_convertir == "gbp") return cambio_eur_gbp

    else if (unidad == "eur" && moneda_a_convertir == "brl") return cambio_eur_brl


    if (unidad == "eur" && moneda_a_convertir == "ars") return cambio_eur_ars;

    else if (unidad == "eur" && moneda_a_convertir == "jpy") return cambio_eur_jpy

    else if (unidad == "eur" && moneda_a_convertir == "usd") return cambio_eur_usd

    else if (unidad == "eur" && moneda_a_convertir == "gbp") return cambio_eur_gbp

    else if (unidad == "eur" && moneda_a_convertir == "brl") return cambio_eur_brl


    if (unidad == "gbp" && moneda_a_convertir == "ars") return cambio_gbp_ars;

    else if (unidad == "gbp" && moneda_a_convertir == "jpy") return cambio_gbp_jpy

    else if (unidad == "gbp" && moneda_a_convertir == "usd") return cambio_gbp_usd

    else if (unidad == "gbp" && moneda_a_convertir == "eur") return cambio_gbp_eur

    else if (unidad == "gbp" && moneda_a_convertir == "brl") return cambio_gbp_brl



    if (unidad == "brl" && moneda_a_convertir == "ars") return cambio_brl_ars

    else if (unidad == "brl" && moneda_a_convertir == "jpy") return cambio_brl_jpy

    else if (unidad == "brl" && moneda_a_convertir == "usd") return cambio_brl_usd

    else if (unidad == "brl" && moneda_a_convertir == "eur") return cambio_brl_eur

    else if (unidad == "brl" && moneda_a_convertir == "gbp") return cambio_brl_gbp
}

formulario.addEventListener("submit", function (e) {

    e.preventDefault()

    let unidad = document.getElementById("moneda1").value.toLowerCase();
    let moneda_a_convertir = document.getElementById("moneda2").value.toLowerCase();
    let monto = document.getElementById("monto").value;

    // COMPRUEBA SI LAS MONEDAS INGRESADAS EN AMBOS CAMPOS ES VÁLIDA
    let es_moneda_invalida = (unidad != "usd" && unidad != "ars" && unidad != "gbp" && unidad != "eur" && unidad != "jpy" && unidad != "brl") || (moneda_a_convertir != "usd" && moneda_a_convertir != "ars" && moneda_a_convertir != "gbp" && moneda_a_convertir != "eur" && moneda_a_convertir != "jpy" && moneda_a_convertir != "brl");

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
    else if (unidad == moneda_a_convertir) {
        Swal.fire({
            icon: 'error',
            title: 'Error!',
            text: `No tiene sentido convertir una unidad a sí misma!`,
            confirmButtonText: "Aceptar",
            confirmButtonColor: "#14213D"
        })
        resultado_contenedor.innerHTML = "<p>Error!</p>"
    }
    else if (isNaN(monto)) {
        Swal.fire({
            icon: 'error',
            title: 'Error!',
            text: "El monto ingresado no es un número.",
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
        conversion_moneda(unidad, moneda_a_convertir, elegir_formula(unidad, parseFloat(monto), moneda_a_convertir))


        function agregar_a_storage() {
            if (!sessionStorage.getItem("conversion")) {

                let resultado = conversion_moneda(unidad, moneda_a_convertir, elegir_formula(unidad, parseFloat(monto), moneda_a_convertir));
                let operacion = {
                    "id_operacion": 0,
                    "tipo_operacion": "conversion_moneda",
                    "unidad": unidad,
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
