<script setup lang="ts">
import {
    Card,
    CardContent,
    CardTitle,
} from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { projects } from '@/data/projects'
import { ArrowUpRight, Github } from 'lucide-vue-next'

</script>

<template>
    <section id="projects" class="my-12 space-y-6">
        <header class="my-8 sm:my-12">
            <h2 class="text-2xl font-semibold">
                Stuff I've Developed Successfully </h2>
            <p class="text-base text-muted-foreground">
                Turning ideas into meaningful digital products.
                <br />
                Crafted with precision and purpose.
            </p>
        </header>
        <div class="grid grid-cols-1 gap-4 sm:gap-6 md:grid-cols-3">
            <Card v-for="project in projects" :key="project.id"
                class="group relative overflow-hidden border-border/70 bg-card pt-0">
                <div class="relative aspect-video w-full overflow-hidden border-b border-border/60">
                    <img :src="project.image" :alt="project.title"
                        class="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
                </div>

                <CardContent class="space-y-3 py-3 sm:py-4">
                    <div class="space-y-1.5">
                        <CardTitle class="flex items-center justify-between">
                            <div class="flex items-center gap-2">
                                <h1 class="text-base font-semibold text-foreground">{{project.title }}</h1>
                                <a v-if="!project.isPrivate && project.demoUrl !== '#'" :href="project.demoUrl" target="_blank" rel="noreferrer"
                                    class="inline-flex items-center gap-1.5 text-xs font-medium text-foreground transition-colors hover:text-primary sm:text-sm">
                                    <ArrowUpRight class="size-4" />
                                </a>
                            </div>
                            <a v-if="!project.isPrivate && project.repoUrl !== '#'" :href="project.repoUrl" target="_blank" rel="noreferrer"
                                class="inline-flex items-center gap-1.5 text-xs font-medium text-foreground transition-colors hover:text-primary sm:text-sm">
                                <Github class="size-4" />
                            </a>
                        </CardTitle>
                        <div class="flex flex-wrap gap-1.5">
                            <Badge variant="outline" class="text-xs text-muted-foreground"
                                v-for="stack in project.techStack" :key="stack">{{ stack }}
                            </Badge>
                        </div>
                        <p class="text-sm line-clamp-3 leading-relaxed text-foreground/80">
                            {{ project.description }}
                        </p>
                    </div>
                </CardContent>

                <div v-if="project.isPrivate"
                    class="absolute inset-0 z-20 flex items-center justify-center bg-black/70 opacity-0 transition-opacity duration-300 group-hover:opacity-100 backdrop-blur-sm pointer-events-none">
                    <div class="flex items-center gap-2 px-4 py-2 text-sm font-medium text-white">
                        <span>Private Project</span>
                    </div>
                </div>
            </Card>
        </div>
    </section>
</template>