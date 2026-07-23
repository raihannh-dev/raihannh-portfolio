<script setup lang="ts">
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'
import { RouterView } from 'vue-router'
</script>

<template>
    <div class="min-h-screen bg-background text-foreground flex flex-col justify-between">
        <div>
            <Header />
            <main class="mx-auto w-full max-w-3xl px-4 sm:px-6 lg:px-8">
                <RouterView />
            </main>
        </div>
        <Footer />
    </div>
</template>
