<script setup lang="ts">
import { experience } from '@/data/experience'
import {
    Card,
    CardContent,
    CardTitle,
} from '@/components/ui/card'
</script>

<template>
    <section id="about" class="space-y-4">
        <header class="my-12">
            <h2 class="text-2xl font-semibold">
                Who I Am.</h2>
            <p class="text-base text-muted-foreground">
                Passionate about building thoughtful digital experiences.
                <br />
                Driven by curiosity, creativity, and continuous growth
            </p>
        </header>
        <div class="">
            <div class="mb-4">
                <h4 class="text-sm font-semibold mb-2">Skills</h4>
                <p class="text-xs text-foreground/80">React.js, TypeScript, Tailwind CSS, Git, Node.js, Go,
                    PostgreSQL, MySQL, REST APIs, Docker, GitHub</p>
            </div>
            <div class="mb-4">
                <h4 class="text-sm font-semibold mb-2">Experience</h4>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <Card v-for="exp in experience" :key="exp.id">
                        <CardContent>
                            <CardTitle class="text-sm font-semibold text-foreground mb-2">{{ exp.position }}</CardTitle>
                            <p class="text-xs text-foreground/80 leading-relaxed mb-3">
                                {{ exp.company }}</p>
                            <p class="text-xs text-foreground/80 leading-relaxed mb-3">
                                {{ exp.description }}</p>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </div>
    </section>
</template>