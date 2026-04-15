<script setup lang="ts">
import {
    Card,
    CardContent,
    CardTitle,
} from '@/components/ui/card'
import { projects } from '@/data/projects'

</script>

<template>
    <section id="projects" class="space-y-4">
        <header class="my-12">
            <h2 class="text-2xl font-semibold">
                Stuff I’ve Developed Successfully </h2>
            <p class="text-base text-muted-foreground">
                Turning ideas into meaningful digital products.
                <br />
                Crafted with precision and purpose.
            </p>
        </header>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card v-for="project in projects" :key="project.id">
                <CardContent>
                    <CardTitle class="font-semibold text-foreground mb-2">{{ project.title
                    }}</CardTitle>
                    <p class="text-sm text-foreground/80 leading-relaxed mb-3">
                        {{ project.description }}</p>
                </CardContent>
            </Card>
        </div>
    </section>
</template>