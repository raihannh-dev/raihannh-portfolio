<script setup lang="ts">
import HeroSection from '@/components/sections/HeroSection.vue';
import AboutSection from '@/components/sections/AboutSection.vue';
import ProjectSection from '@/components/sections/ProjectSection.vue';
import ContactSection from '@/components/sections/ContactSection.vue';
</script>

<template>
    <div class="min-h-screen bg-background text-foreground">
        <header class="sticky top-0 z-40 bg-background/80 backdrop-blur-sm border-b border-border">
            <nav class="max-w-4xl mx-auto px-4 sm:px-6 py-4">
                <div class="flex items-center justify-between">
                    <h1 class="text-lg font-semibold">raihnnh.dev</h1>
                    <ul class="hidden sm:flex items-center gap-6">
                        <li><a href="#home">Home</a></li>
                        <li><a href="#about">About</a></li>
                        <li><a href="#projects">Projects</a></li>
                        <li><a href="#contact">Contact</a></li>
                    </ul>
                </div>
            </nav>
        </header>
        <div class="max-w-4xl mx-auto px-4 sm:px-6">
            <HeroSection />
            <AboutSection />
            <ProjectSection />
            <ContactSection />
        </div>
        <footer class="border-t border-border mt-20">
            <div class="max-w-4xl mx-auto px-4 sm:px-6 py-4">
                <div class="flex justify-between items-end">
                    <div class="text-center sm:text-left">
                        <h3 class="font-semibold text-sm">Raihan NH</h3>
                        <p class="text-sm text-gray-600 mt-1">Fullstack Developer | Building with heart and soul 💙.
                        </p>
                    </div>
                    <p class="font-semibold text-sm text-gray-600">© 2026 Raihannh. All rights reserved.</p>
                </div>
            </div>
        </footer>
    </div>
</template>