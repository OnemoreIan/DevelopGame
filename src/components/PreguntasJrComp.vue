<script setup lang="ts">
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { preguntas } from '../assets/preguntas.ts';
import { text } from 'stream/consumers';

let puntero = useRouter();
let showModal = ref(false);


// puntaje del examen
let puntaje = ref(0);
let lista=ref([]);
let idRespuesta=0;
let textoID = "res";

preguntas.forEach(item => {
    // console.log(item);

    let elemento = {
        idQuest: 0,
        pregunta: "",
        opc1: "",
        opc2: "",
        opc3: "",
        opc4: "",
        res1:0,
        res2:0,
        res3:0,
        res4:0,
        id1: "",
        id2: "",
        id3: "",
        id4: ""
    }

    // elementos sin modificaciones
    elemento.idQuest = item.idQuest;
    elemento.pregunta = item.pregunta;
    elemento.opc1 = item.opc1;
    elemento.opc2 = item.opc2;
    elemento.opc3 = item.opc3;
    elemento.opc4 = item.opc4;

    // generar respuesta para todos los elementos
    if (item.res == 1) {
        console.log("es 1");
        elemento.res1 = 1;
        elemento.res2 = 0;
        elemento.res3 = 0;
        elemento.res4 = 0;
    } else if (item.res == 2) {
        console.log("es 2");
        elemento.res1 = 0;
        elemento.res2 = 1;
        elemento.res3 = 0;
        elemento.res4 = 0;
    } else if (item.res == 3) {
        console.log("es 3");
        elemento.res1 = 0;
        elemento.res2 = 0;
        elemento.res3 = 1;
        elemento.res4 = 0;
    } else if (item.res == 4) {
        console.log("es 4");
        elemento.res1 = 0;
        elemento.res2 = 0;
        elemento.res3 = 0;
        elemento.res4 = 1;
    }

    // generar los ids para las preguntas
    elemento.id1 = (textoID+(idRespuesta++));
    elemento.id2 = (textoID+(idRespuesta++));
    elemento.id3 = (textoID+(idRespuesta++));
    elemento.id4 = (textoID+(idRespuesta++));


    lista.value.push(elemento);
})
console.log(lista.value);


//verificacion del examen
function mandarExamen(event) {

    console.log("mandado exitosamente");
    console.log(event);
    if (true) {
        puntero.push("/");
    }
}

/*
terminar de implementar la nueva lista para las preguntas
*/
</script>

<template>
    <div class="container text-left bg-info">

        <form @submit.prevent="mandarExamen($event)">

            <div class="row">
                <p class="h3">Examen</p>
            </div>

            <div class="row my-2"></div>

            <div class="row mt-2 mb-3" v-for="list in lista">

                <div class="form-inline">
                    <p class="blockquote">{{ `${list.idQuest}) ` + list.pregunta }}</p>

                </div>

                <div class="form-check-inline">
                    <input class="form-check-input" type="radio" :name="list.idQuest"
                        :id="list.id1" :value="list.res1">
                    <label class="form-check-label" :for="list.id1">{{ list.opc1 }}</label>
                </div>
                <div class="form-check-inline">
                    <input class="form-check-input" type="radio" :name="list.idQuest"
                        :id="list.id2" :value="list.res2">
                    <label class="form-check-label" :for="list.id2">{{ list.opc2 }}</label>
                </div>
                <div class="form-check-inline">
                    <input class="form-check-input" type="radio" :name="list.idQuest"
                        :id="list.id3" :value="list.res3">
                    <label class="form-check-label" :for="list.id3">{{ list.opc3 }}</label>
                </div>
                <div class="form-check-inline">
                    <input class="form-check-input" type="radio" :name="list.idQuest"
                        :id="list.id4" :value="list.res4">
                    <label class="form-check-label" :for="list.id4">{{ list.opc4 }}</label>
                </div>
            </div>
            <!-- <div class="row mt-2 mb-3" v-for="pregunta in preguntas">

                <div class="form-inline">
                    <p class="blockquote">{{ `${pregunta.idQuest}) ` + pregunta.pregunta }}</p>

                </div>

                <div class="form-check-inline">
                    <input class="form-check-input" type="radio" :name="'pregunta' + pregunta.idQuest"
                        :id="pregunta.id1">
                    <label class="form-check-label" :for="pregunta.id1">{{ pregunta.opc1 }}</label>
                </div>
                <div class="form-check-inline">
                    <input class="form-check-input" type="radio" :name="'pregunta' + pregunta.idQuest"
                        :id="pregunta.id2">
                    <label class="form-check-label" :for="pregunta.id2">{{ pregunta.opc2 }}</label>
                </div>
                <div class="form-check-inline">
                    <input class="form-check-input" type="radio" :name="'pregunta' + pregunta.idQuest"
                        :id="pregunta.id3">
                    <label class="form-check-label" :for="pregunta.id3">{{ pregunta.opc3 }}</label>
                </div>
                <div class="form-check-inline">
                    <input class="form-check-input" type="radio" :name="'pregunta' + pregunta.idQuest"
                        :id="pregunta.id4">
                    <label class="form-check-label" :for="pregunta.id4">{{ pregunta.opc4 }}</label>
                </div>
            </div> -->

            <div class="row my-3"></div>

            <div class="row">
                <span class="col-md-4">
                    <button type="button" class="btn btn-danger" data-bs-toggle="modal" data-bs-target="#modal">
                        Cancelar
                    </button>
                </span>
                <span class="col-md-4"></span>
                <span class="col-md-4">
                    <button type="submit" class="btn btn-secondary">Terminar</button>
                </span>
            </div>

            <div class="row my-2"></div>

        </form>

    </div>

    <!-- Modal -->
    <div class="modal fade" id="modal" tabindex="-1" aria-labelledby="ModalLabel" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header text-center">

                    <span class="h1 text-danger" id="ModalLabel">!!Advertencia!!</span>
                </div>
                <div class="modal-body">
                    <p>Se descartara todo el progreso</p>
                    <div class="row">
                        <span class="col-md-4">
                            <a class="btn btn-danger" href="/">Salir</a>
                        </span>
                        <span class="col-md-4"></span>
                        <span class="col-md-4">
                            <button type="button" class="btn btn-success" data-bs-dismiss="modal">Continuar</button>
                        </span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>