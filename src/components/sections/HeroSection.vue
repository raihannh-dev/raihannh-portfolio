<script setup lang="ts">
import { Button } from '@/components/ui/button'
import { ArrowRight, Download } from 'lucide-vue-next'
</script>

<template>
    <section id="home" class="flex min-h-[calc(100svh-4rem)] items-center py-12 sm:py-16">
        <div class="h-full w-full">
            <div class="max-w-2xl space-y-4 sm:space-y-5">
                <h1 class="text-3xl font-bold tracking-tight sm:text-5xl md:text-6xl">
                    Hi! I'm Raihan
                </h1>
                <p class="text-base text-muted-foreground sm:text-lg">Fullstack Developer</p>
                <p class="text-sm leading-relaxed text-foreground/90 sm:text-base">
                    I build cool stuff on the web, from what users see to what makes it work behind the scenes.
                </p>
                <div class="flex flex-col gap-2 pt-1 sm:flex-row">
                    <Button variant="outline" class="w-full sm:w-auto">
                        <a href="#projects" class="flex items-center gap-2">
                            See My Work
                            <ArrowRight />
                        </a>
                    </Button>
                    <Button variant="outline" class="w-full sm:w-auto">
                        <a href="https://drive.google.com/file/d/1PJqsYIwPQVyIQvK4mzRqZ-F9A5mNyl-6/view?usp=sharing"
                            target="_blank" rel="noopener noreferrer">
                            Resume
                        </a>
                        <Download />
                    </Button>
                </div>
            </div>
        </div>
    </section>
</template>