<script setup lang="ts">
import { Button } from '@/components/ui/button';
import { ArrowRight, Download } from 'lucide-vue-next';
</script>

<template>
    <section id="home" class="flex items-center min-h-screen space-y-8">
        <div class="h-full">
            <div class="space-y-4">
                <h1 class="text-4xl sm:text-5xl font-bold tracking-tight">
                    Hi! I'm Raihan</h1>
                <p class="text-lg text-muted-foreground">Fullstack Developer</p>
                <p class="text-base leading-relaxed text-foreground/90">I build cool stuff
                    on
                    the web—from what you see to what makes it work.</p>
                <div class="flex gap-2">
                    <Button variant="outline">View My Work
                        <ArrowRight />
                    </Button>
                    <Button variant="outline">Resume
                        <Download />
                    </Button>
                </div>
            </div>
        </div>
    </section>
</template>