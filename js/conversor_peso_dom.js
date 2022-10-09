

// NODOS DOM
let formulario = document.getElementById("peso__form");
let resultado_contenedor = document.getElementById("resultado");


// FUNCIONES

function conversion_masa(unidad, unidad_a_convertir, operacion) {
    resultado_contenedor.innerHTML = `${(operacion).toFixed(3)} ${unidad_a_convertir}`
    let conversion = `${unidad} a ${unidad_a_convertir} = ${operacion} ${unidad_a_convertir}`
    return conversion
}

function elegir_formula(unidad, unidad_a_convertir, peso) {
    // OPERACIONES
    // KILOS A X UNIDAD

    let kilogramos_a_gramos = peso * 1000;
    let kilogramos_a_toneladas = (peso / 1000).toFixed(3);
    let kilogramos_a_onzas = peso * 35.274;
    let kilogramos_a_libras = peso * 2.205;
    let kilogramos_a_miligramos = peso * 1000000;



    // GRAMOS A X UNIDAD
    let gramo_a_kilogramos = (peso / 1000).toFixed(3);
    let gramo_a_toneladas = (peso / 1000000).toFixed(3);
    let gramo_a_onzas = (peso / 28.35).toFixed(3);
    let gramo_a_libras = (peso / 453.6).toFixed(3);
    let gramo_a_miligramos = peso * 1000;


    // TONEDALAS A X UNIDAD
    let tonelada_a_kilogramos = peso * 1000;
    let tonelada_a_gramos = peso * 1000000;
    let tonelada_a_onzas = peso * 35270;
    let tonelada_a_libras = peso * 2205;
    let tonelada_a_miligramos = peso * 1000000000;


    // ONZAS A X UNIDAD
    let onzas_a_kilogramos = peso * 35.274;
    let onzas_a_gramos = peso * 28.35;
    let onzas_a_toneladas = (peso / 35270).toFixed(3);
    let onzas_a_libras = (peso / 16).toFixed(3);
    let onzas_a_miligramos = peso * 28350;


    // LIBRAS A X UNIDAD
    let libras_a_kilogramos = (peso / 2.205).toFixed(3);
    let libras_a_gramos = (peso * 453.6);
    let libras_a_toneladas = (peso / 453.6).toFixed(3);
    let libras_a_onzas = peso * 16;
    let libras_a_miligramos = peso * 453600;




    // MILIGRAMOS A X UNIDAD
    let miligramos_a_kilogramos = (peso / 1000000).toFixed(3);
    let miligramos_a_gramos = (peso / 1000).toFixed(3);
    let miligramos_a_toneladas = (peso / 1000000000).toFixed(3);
    let miligramos_a_onzas = (peso / 28350).toFixed(3);
    let miligramos_a_libras = (peso / 453600).toFixed(3);


    if (unidad == "kilogramos" && unidad_a_convertir == "gramos") {
        return kilogramos_a_gramos
    }
    else if (unidad == "kilogramos" && unidad_a_convertir == "toneladas") {
        return kilogramos_a_toneladas
    }
    else if (unidad == "kilogramos" && unidad_a_convertir == "onzas") {
        return kilogramos_a_onzas
    }
    else if (unidad == "kilogramos" && unidad_a_convertir == "libras") {
        return kilogramos_a_libras
    }
    else if (unidad == "kilogramos" && unidad_a_convertir == "miligramos") {
        return kilogramos_a_miligramos
    }


    if (unidad == "gramos" && unidad_a_convertir == "kilogramos") {
        return gramo_a_kilogramos
    }
    else if (unidad == "gramos" && unidad_a_convertir == "toneladas") {
        return gramo_a_toneladas
    }
    else if (unidad == "gramos" && unidad_a_convertir == "onzas") {
        return gramo_a_onzas
    }
    else if (unidad == "gramos" && unidad_a_convertir == "libras") {
        return gramo_a_libras
    }
    else if (unidad == "gramos" && unidad_a_convertir == "miligramos") {
        return gramo_a_miligramos
    }


    if (unidad == "toneladas" && unidad_a_convertir == "kilogramos") {
        return tonelada_a_kilogramos
    }
    else if (unidad == "toneladas" && unidad_a_convertir == "gramos") {
        return tonelada_a_gramos
    }
    else if (unidad == "toneladas" && unidad_a_convertir == "onzas") {
        return tonelada_a_onzas
    }
    else if (unidad == "toneladas" && unidad_a_convertir == "libras") {
        return tonelada_a_libras
    }
    else if (unidad == "toneladas" && unidad_a_convertir == "miligramos") {
        return tonelada_a_miligramos
    }


    if (unidad == "onzas" && unidad_a_convertir == "kilogramos") {
        return onzas_a_kilogramos
    }
    else if (unidad == "onzas" && unidad_a_convertir == "gramos") {
        return onzas_a_gramos
    }
    else if (unidad == "onzas" && unidad_a_convertir == "toneladas") {
        return onzas_a_toneladas
    }
    else if (unidad == "onzas" && unidad_a_convertir == "libras") {
        return onzas_a_libras
    }
    else if (unidad == "onzas" && unidad_a_convertir == "miligramos") {
        return onzas_a_miligramos
    }


    if (unidad == "libras" && unidad_a_convertir == "kilogramos") {
        return libras_a_kilogramos
    }
    else if (unidad == "libras" && unidad_a_convertir == "gramos") {
        return libras_a_gramos
    }
    else if (unidad == "libras" && unidad_a_convertir == "toneladas") {
        return libras_a_toneladas
    }
    else if (unidad == "libras" && unidad_a_convertir == "onzas") {
        return libras_a_onzas
    }
    else if (unidad == "libras" && unidad_a_convertir == "miligramos") {
        return libras_a_miligramos
    }


    if (unidad == "miligramos" && unidad_a_convertir == "kilogramos") {
        return miligramos_a_kilogramos
    }
    else if (unidad == "miligramos" && unidad_a_convertir == "gramos") {
        return miligramos_a_gramos
    }
    else if (unidad == "miligramos" && unidad_a_convertir == "toneladas") {
        return miligramos_a_toneladas
    }
    else if (unidad == "miligramos" && unidad_a_convertir == "onzas") {
        return miligramos_a_onzas
    }
    else if (unidad == "miligramos" && unidad_a_convertir == "libras") {
        return miligramos_a_libras
    }
}

// EVENTOS
formulario.addEventListener("submit", (e) => {

    e.preventDefault();

    let unidad = document.getElementById("unidad_peso1").value.toLowerCase();
    let unidad_a_convertir = document.getElementById("unidad_peso2").value.toLowerCase();
    let peso = document.getElementById("peso").value;

    // COMPRUEBA SI LAS UNIDADES INGRESADAS EN AMBOS CAMPOS ES VÁLIDA
    let es_temperatura_invalida = (unidad != "miligramos" && unidad != "gramos" && unidad != "toneladas" && unidad != "libras" && unidad != "onzas" && unidad != "kilogramos") || (unidad_a_convertir != "miligramos" && unidad_a_convertir != "gramos" && unidad_a_convertir != "toneladas" && unidad_a_convertir != "libras" && unidad_a_convertir != "onzas" && unidad_a_convertir != "kilogramos");

    if (es_temperatura_invalida) {
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

    else if (isNaN(peso)) {
        Swal.fire({
            icon: 'error',
            title: 'Error!',
            text: "El peso ingresado no es un número!",
            confirmButtonText: "Aceptar",
            confirmButtonColor: "#14213D"
        })
        resultado_contenedor.innerHTML = "<p>Error!</p>"
    }

    else if (peso < 0) {
        Swal.fire({
            icon: 'error',
            title: 'Error!',
            text: "No tiene sentido un peso negativo!",
            confirmButtonText: "Aceptar",
            confirmButtonColor: "#14213D"
        })
        resultado_contenedor.innerHTML = "<p>Error!</p>"
    }

    else conversion_masa(unidad, unidad_a_convertir, elegir_formula(unidad, unidad_a_convertir, parseFloat(peso)));


    function agregar_a_storage() {
        if (!sessionStorage.getItem("conversion")) {

            let resultado = conversion_masa(unidad, unidad_a_convertir, elegir_formula(unidad, unidad_a_convertir, parseFloat(peso)))
            let operacion = {
                "id_operacion": 0,
                "tipo_operacion": "conversion_peso",
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
});

