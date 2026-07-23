<script setup lang="ts">
import HeroSection from '@/features/home/components/HeroSection.vue'
import AboutSection from '@/features/about/components/AboutSection.vue'
import ProjectSection from '@/features/projects/components/ProjectSection.vue'
import ContactSection from '@/features/contact/components/ContactSection.vue'
</script>

<template>
    <div>
        <HeroSection />
        <AboutSection :is-overview="true" />
        <ProjectSection :is-overview="true" />
        <ContactSection />
    </div>
</template>
