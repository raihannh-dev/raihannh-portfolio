<script setup lang="ts">
import { Building, Mail, Phone } from 'lucide-vue-next';

</script>

<template>
    <section id="contact" class="space-y-4">
        <header class="my-12">
            <h2 class="text-2xl font-semibold">
                Let’s Build Something Together
            </h2>
            <p class="text-base text-muted-foreground">
                Questions, feedback, or ideas?
                <br />
                Let’s collaborate.
            </p>
        </header>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
                <Mail class="w-4 h-4" />
                <h1>Email Support</h1>
                <p>raihannh.dev@gmail.com</p>
            </div>
            <div>
                <Building class="w-4 h-4" />
                <h1>Visit Our Office</h1>
                <p>Sumedang, Indonesia</p>
            </div>
            <div>
                <Phone class="w-4 h-4" />
                <h1>Call me directly</h1>
                <p>+62 812-3456-7890</p>
            </div>
        </div>
    </section>
</template>