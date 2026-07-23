<script setup lang="ts">
import { MapPin, Mail } from 'lucide-vue-next'
import {
    Card,
    CardContent,
    CardTitle,
} from '@/components/ui/card'
</script>

<template>
    <section id="contact" class="my-12 space-y-6 pb-8">
        <div class="grid grid-cols-1 gap-8 md:grid-cols-12">
            <!-- Left Column: Header Info -->
            <div class="space-y-4 md:col-span-6">
                <div class="flex items-start justify-between gap-4">
                    <div class="space-y-2">
                        <h2 class="text-2xl font-semibold tracking-tight">
                            Let’s Work Together
                        </h2>
                        <p class="text-sm text-muted-foreground md:text-base leading-relaxed">
                            Have a project in mind, a question, or just want to say hi?
                            <br />
                            I’m always open to discussing new opportunities and ideas.
                        </p>
                    </div>
                </div>
            </div>

            <!-- Right Column: Contact Cards -->
            <div class="space-y-4 md:col-span-6">
                <Card class="border-border/70 bg-card py-4 shadow-sm">
                    <CardContent class="space-y-2">
                        <CardTitle class="flex items-center gap-2 text-base">
                            <Mail class="h-4 w-4 text-muted-foreground" />Send an Email
                        </CardTitle>
                        <a href="mailto:raihannh.dev@gmail.com"
                            class="text-sm text-foreground/80 hover:underline">raihannh.dev@gmail.com</a>
                    </CardContent>
                </Card>

                <Card class="border-border/70 bg-card py-4 shadow-sm">
                    <CardContent class="space-y-2">
                        <CardTitle class="flex items-center gap-2 text-base">
                            <MapPin class="h-4 w-4 text-muted-foreground" />Based in
                        </CardTitle>
                        <p class="text-sm text-foreground/80">Sumedang, West Java, Indonesia</p>
                    </CardContent>
                </Card>
            </div>
        </div>
    </section>
</template>
