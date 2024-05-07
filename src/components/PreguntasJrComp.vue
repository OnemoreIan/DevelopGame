<script setup lang="ts">
import { ref } from 'vue';
// pendiente de usar en el modulo preguntas.js

let showModal = ref(false);
import {preguntas} from '../assets/preguntas.ts'
import { log } from 'console';

console.log(preguntas);

// listas agrupadas en 5 preguntas
let list1:any = ref([]);
let list2:any = ref([]);
let list3:any = ref([]);
let list4:any = ref([]);
let list5:any = ref([]);
let list6:any = ref([]);

preguntas.forEach(element => {

    if(element.idQuest > 0 && element.idQuest <= 5 ){
        list1.value.push(element);
    }
    if(element.idQuest > 5 && element.idQuest <= 10 ){
        list2.value.push(element);
    }
    if(element.idQuest > 10 && element.idQuest <= 15 ){
        list3.value.push(element);
    }
    if(element.idQuest > 15 && element.idQuest <= 20 ){
        list4.value.push(element);
    }
    if(element.idQuest > 20 && element.idQuest <= 25 ){
        list5.value.push(element);
    }
    if(element.idQuest > 25 && element.idQuest <= 30 ){
        list6.value.push(element);
    }

    
    
});
console.log(list1.value);

</script>

<template>
    <div class="container text-left bg-info">
        <div class="row">
            <p class="h3">Preguntas</p>
        </div>

        <div class="row my-2"></div>

        <div class="row my-2" v-for="pregunta in preguntas">
            <label for="pregunta" class="form-label">{{ `${pregunta.idQuest})`+pregunta.pregunta }}</label>
            <div class="form-check-inline">
                <input class="form-check-input" type="radio" :name="'pregunta'+pregunta.idQuest" :id="pregunta.id1">
                <label class="form-check-label" :for="pregunta.id1">{{ pregunta.opc1}}</label>
            </div>
            <div class="form-check-inline">
                <input class="form-check-input" type="radio" :name="'pregunta'+pregunta.idQuest" :id="pregunta.id2">
                <label class="form-check-label" :for="pregunta.id2">{{ pregunta.opc2}}</label>
            </div>
            <div class="form-check-inline">
                <input class="form-check-input" type="radio" :name="'pregunta'+pregunta.idQuest" :id="pregunta.id3">
                <label class="form-check-label" :for="pregunta.id3">{{ pregunta.opc3}}</label>
            </div>
            <div class="form-check-inline">
                <input class="form-check-input" type="radio" :name="'pregunta'+pregunta.idQuest" :id="pregunta.id4">
                <label class="form-check-label" :for="pregunta.id4">{{ pregunta.opc4}}</label>
            </div>

        </div>

        <div class="row my-3"></div>

        <div class="row">
            <span class="col-md-4">
                <button type="button" class="btn btn-danger" data-bs-toggle="modal" data-bs-target="#modal">
                    Cancelar
                </button>
            </span>
            <span class="col-md-4"></span>
            <span class="col-md-4">
                <button class="btn btn-secondary">Continuar</button>
            </span>
        </div>

        <div class="row my-2"></div>

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