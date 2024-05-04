<script setup lang="ts">
import { ref } from 'vue'
import Preguntas from '@/components/PreguntasJrComp.vue'

let texto = ref("preguntas");


</script>

<template>
    <article class="container text-center pt-2">

        <div class="card">
            <div class="row mt-5 mb-3">
                <p class="h2">Contesta las preguntas si sobrepensar la respuesta</p>
                <small>*De esa manera es mas eficaz el test</small>

            </div>

            <div class="row">
                <p>preguntas</p>
                <Preguntas/>
            </div>

            <div class="row">
                <span class="col-md-4"></span>

                <div class="col-md-4">
                    <a class="btn btn-success" href="/">Continuar</a>
                </div>
            </div>

            <div class="row mb-5">
                <span class="col-md-8"></span>
                <div class="col-md-4">
                    <a class="btn btn-danger" href="/">Rendirse</a>
                </div>
            </div>

        </div>
    </article>
</template>