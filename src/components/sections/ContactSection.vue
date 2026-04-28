<script setup lang="ts">
import { Building, Mail, Phone } from 'lucide-vue-next'
import {
    Card,
    CardContent,
    CardTitle,
} from '@/components/ui/card'

</script>

<template>
    <section id="contact" class="space-y-4 pb-8">
        <header class="my-8 sm:my-12">
            <h2 class="text-2xl font-semibold">
                Let’s Build Something Together
            </h2>
            <p class="text-base text-muted-foreground">
                Questions, feedback, or ideas?
                <br />
                Let’s collaborate.
            </p>
        </header>
        <div class="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">
            <Card class="border-border/70 bg-card py-4">
                <CardContent class="space-y-2">
                    <CardTitle class="text-base">
                        <Mail class="h-4 w-4 text-muted-foreground" />Email Support
                    </CardTitle>
                    <a href="mailto:raihannh.dev@gmail.com"
                        class="text-sm text-foreground/80 hover:underline">raihannh.dev@gmail.com</a>
                </CardContent>
            </Card>
            <Card class="border-border/70 bg-card py-4">
                <CardContent class="space-y-2">
                    <Building class="h-4 w-4 text-muted-foreground" />
                    <CardTitle class="text-base">Visit Our Office</CardTitle>
                    <p class="text-sm text-foreground/80">Sumedang, Indonesia</p>
                </CardContent>
            </Card>
            <Card class="border-border/70 bg-card py-4 md:col-span-2 xl:col-span-1">
                <CardContent class="space-y-2">
                    <Phone class="h-4 w-4 text-muted-foreground" />
                    <CardTitle class="text-base">Call me directly</CardTitle>
                    <a href="tel:+6281234567890" class="text-sm text-foreground/80 hover:underline">+62
                        812-3456-7890</a>
                </CardContent>
            </Card>
        </div>
    </section>
</template>