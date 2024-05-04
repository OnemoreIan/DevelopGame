<script setup lang="ts">
import { ref } from 'vue';

let estatusDev = ref("Desconocido");

</script>

<template>
    <div class="container text-center pt-2">

        <div class="card">

            <div class="row mt-5">
                <h1>Test de programador</h1>
            </div>
    
            <!-- espaciador -->
            <div class="row my-4"></div>
            
            <div class="row">
                <div class="col-md-8"></div>
                <div class="col-md-3">
                    <span class="h5">Estatus actual: {{ estatusDev }}</span>
                </div>
                
            </div>

            <!-- espaciador -->
            <div class="row my-2"></div>
            
            <div class="row">
                <span>Favor de contestar las preguntas de la manera mas sincera posible</span>
            </div>

            <!-- espaciador -->
            <div class="row my-2"></div>
            
            <div class="row">
                <span class="col-md-4"></span>
                <span class="col-md-4">
                    <a href="/examen" class="btn btn-info btn-md">Iniciar</a>
                </span>

            </div>

            <!-- espaciador -->
            <div class="row my-5"></div>

        </div>


    </div>


</template>