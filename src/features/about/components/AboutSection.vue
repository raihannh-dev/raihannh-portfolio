<script setup lang="ts">
import { techStack, certifications } from '@/data/about';
import { Button } from '@/components/ui/button';
import { ArrowRight, ArrowLeft } from 'lucide-vue-next';
import { RouterLink } from 'vue-router';

defineProps<{
    isOverview?: boolean
}>()
</script>

<template>
    <section id="about" class="my-12 space-y-6">
        <header class="flex items-start justify-between max-w-3xl gap-4">
            <div class="space-y-2">
                <h2 class="text-2xl font-semibold tracking-tight">Who I Am.</h2>
                <p class="text-sm text-muted-foreground md:text-base">
                    Passionate about building thoughtful digital experiences, driven by curiosity,
                    creativity, and continuous growth.
                </p>
            </div>
            <Button v-if="isOverview" variant="ghost" size="sm" as-child class="hidden sm:inline-flex shrink-0">
                <RouterLink to="/about" class="flex items-center gap-1.5 text-xs font-medium">
                    More Details
                    <ArrowRight class="size-3.5" />
                </RouterLink>
            </Button>
            <Button v-else variant="ghost" size="sm" as-child class="inline-flex shrink-0">
                <RouterLink to="/" class="flex items-center gap-1.5 text-xs font-medium">
                    <ArrowLeft class="size-3.5" />
                    Back to Home
                </RouterLink>
            </Button>
        </header>

        <ul class="grid grid-cols-3 gap-2 text-xs md:hidden">
            <li><a href="#me"
                    class="flex justify-center rounded-md border border-border/70 bg-muted/30 px-2 py-2">Me</a></li>
            <li><a href="#tech-stack"
                    class="flex justify-center rounded-md border border-border/70 bg-muted/30 px-2 py-2">Stack</a>
            </li>
            <li><a href="#certifications"
                    class="flex justify-center rounded-md border border-border/70 bg-muted/30 px-2 py-2">Certs</a>
            </li>
        </ul>

        <div class="grid grid-cols-1 gap-8 md:grid-cols-12">
            <aside class="md:col-span-3">
                <div class="md:sticky md:top-24 space-y-6 rounded-xl border border-border/70 bg-muted/30 p-5">
                    <ul class="hidden md:flex flex-col gap-5 text-sm">
                        <li class="flex items-center gap-2">
                            <span class="text-muted-foreground">01</span>
                            <a href="#me" class="transition-colors hover:text-primary">Me</a>
                        </li>
                        <li class="flex items-center gap-2">
                            <span class="text-muted-foreground">02</span>
                            <a href="#tech-stack" class="transition-colors hover:text-primary">Tech Stack</a>
                        </li>
                        <li class="flex items-center gap-2">
                            <span class="text-muted-foreground">03</span>
                            <a href="#certifications" class="transition-colors hover:text-primary">Certifications</a>
                        </li>
                    </ul>
                </div>
            </aside>

            <div class="md:col-span-9 space-y-8 md:space-y-10">
                <section id="me" class="rounded-xl border border-border/70 bg-card p-6 shadow-sm">
                    <h3 class="mb-3 text-xl font-semibold">Me</h3>
                    <p class="leading-relaxed text-foreground/90">
                        A fresh graduate in Informatics Engineering with a strong interest in web
                        development. Through a six-month MSIB program, I deepened my knowledge of React
                        and basic backend development while enhancing my teamwork skills. The success of
                        our final project, recognized as one of the best projects, reflects my commitment
                        and capabilities. I am currently focused on sharpening my backend skills to become
                        a competent, adaptive Fullstack Developer who continuously grows with technological
                        advancements.
                    </p>
                </section>

                <section id="tech-stack" class="rounded-xl border border-border/70 bg-card p-6 shadow-sm">
                    <h3 class="mb-3 text-xl font-semibold">Tech Stack</h3>
                    <p class="mb-5 leading-relaxed text-foreground/90">
                        My primary stack includes modern tools for front-end and back-end development,
                        with a focus on building scalable and maintainable products.
                    </p>
                    <ul class="flex flex-wrap gap-2">
                        <li v-for="stack in techStack" :key="stack"
                            class="rounded-full border border-border bg-muted/60 px-3 py-1.5 text-xs font-medium md:text-sm">
                            {{ stack }}
                        </li>
                    </ul>
                </section>

                <section id="certifications" class="rounded-xl border border-border/70 bg-card p-6 shadow-sm">
                    <h3 class="mb-3 text-xl font-semibold">Certifications</h3>
                    <p class="mb-4 text-foreground/90">
                        I've completed several certifications to deepen my knowledge and validate my skills:
                    </p>
                    <ul class="space-y-2 text-sm md:text-base">
                        <li v-for="certificate in certifications" :key="certificate.id" class="flex items-start gap-2">
                            <span class="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-foreground/70" />
                            <a :href="certificate.link" target="_blank" rel="noreferrer"
                                class="leading-relaxed hover:underline">
                                {{ certificate.desc }}
                            </a>
                        </li>
                    </ul>
                </section>
            </div>
        </div>

        <div v-if="isOverview" class="flex justify-end pt-2 sm:hidden">
            <Button variant="ghost" size="sm" as-child>
                <RouterLink to="/about" class="flex items-center gap-1.5 text-xs font-medium">
                    More Details
                    <ArrowRight class="size-3.5" />
                </RouterLink>
            </Button>
        </div>
    </section>
</template>
