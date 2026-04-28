<script setup lang="ts">
import { onBeforeUnmount, onMounted, ref } from 'vue'
import HeroSection from '@/components/sections/HeroSection.vue'
import AboutSection from '@/components/sections/AboutSection.vue'
import ProjectSection from '@/components/sections/ProjectSection.vue'
import ContactSection from '@/components/sections/ContactSection.vue'
import { Button } from '@/components/ui/button'
import {
    Sheet,
    SheetContent,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
    SheetClose,
} from '@/components/ui/sheet'
import { Menu } from 'lucide-vue-next'

const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Projects', href: '#projects' },
    { label: 'Contact', href: '#contact' },
]

const activeSection = ref('home')

const updateActiveSection = () => {
    const sections = navLinks
        .map((item) => document.querySelector(item.href))
        .filter((element): element is HTMLElement => Boolean(element))

    const offset = window.innerHeight * 0.35

    for (const section of sections) {
        const top = section.getBoundingClientRect().top
        const bottom = section.getBoundingClientRect().bottom

        if (top <= offset && bottom > offset) {
            activeSection.value = section.id
            return
        }
    }

    activeSection.value = 'home'
}

onMounted(() => {
    updateActiveSection()
    window.addEventListener('scroll', updateActiveSection, { passive: true })
    window.addEventListener('resize', updateActiveSection)
})

onBeforeUnmount(() => {
    window.removeEventListener('scroll', updateActiveSection)
    window.removeEventListener('resize', updateActiveSection)
})
</script>

<template>
    <div class="min-h-screen bg-background text-foreground">
        <header
            class="sticky top-0 z-40 border-b border-border bg-background/85 backdrop-blur supports-backdrop-filter:bg-background/70">
            <nav class="mx-auto flex h-16 w-full max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8">
                <a href="#home" class="text-base font-semibold tracking-tight sm:text-lg">raihnnh.dev</a>

                <ul class="hidden items-center gap-6 text-sm font-medium lg:flex">
                    <li v-for="item in navLinks" :key="item.href">
                        <a
                            :href="item.href"
                            :class="[
                                'transition-colors hover:text-foreground',
                                activeSection === item.href.slice(1)
                                    ? 'text-foreground'
                                    : 'text-foreground/80',
                            ]"
                        >
                            {{ item.label }}
                        </a>
                    </li>
                </ul>

                <Sheet>
                    <SheetTrigger as-child>
                        <Button variant="ghost" size="icon" class="lg:hidden" aria-label="Open navigation menu">
                            <Menu class="size-5" />
                        </Button>
                    </SheetTrigger>
                    <SheetContent side="right" class="w-[82%] border-l border-border/70 pt-10 sm:w-90">
                        <SheetHeader class="mb-6">
                            <SheetTitle class="text-left">Navigation</SheetTitle>
                        </SheetHeader>

                        <div class="space-y-2">
                            <SheetClose v-for="item in navLinks" :key="item.href" as-child>
                                <a
                                    :href="item.href"
                                    :class="[
                                        'flex items-center rounded-md border px-3 py-2.5 text-sm font-medium transition-colors',
                                        activeSection === item.href.slice(1)
                                            ? 'border-border bg-muted/70 text-foreground'
                                            : 'border-transparent text-foreground/85 hover:border-border hover:bg-muted/60 hover:text-foreground',
                                    ]"
                                >
                                    {{ item.label }}
                                </a>
                            </SheetClose>
                        </div>

                        <div class="mt-6 rounded-xl border border-border/70 bg-muted/30 p-4">
                            <p class="text-sm font-medium">Need a quick response?</p>
                            <p class="mt-1 text-sm text-muted-foreground">
                                Jump straight to the contact section or connect through email.
                            </p>
                            <div class="mt-4 flex flex-col gap-2">
                                <SheetClose as-child>
                                    <a
                                        href="#contact"
                                        class="inline-flex h-9 items-center justify-center rounded-md bg-primary px-4 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
                                    >
                                        Contact Me
                                    </a>
                                </SheetClose>
                                <SheetClose as-child>
                                    <a
                                        href="#home"
                                        class="inline-flex h-9 items-center justify-center rounded-md border border-border bg-background px-4 text-sm font-medium text-foreground transition-colors hover:bg-muted"
                                    >
                                        Back to Top
                                    </a>
                                </SheetClose>
                            </div>
                        </div>
                    </SheetContent>
                </Sheet>
            </nav>
        </header>

        <main class="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
            <HeroSection />
            <AboutSection />
            <ProjectSection />
            <ContactSection />
        </main>

        <footer class="mt-16 border-t border-border/80 sm:mt-20">
            <div
                class="mx-auto flex w-full max-w-6xl flex-col gap-3 px-4 py-6 sm:px-6 sm:py-7 lg:flex-row lg:items-end lg:justify-between lg:px-8">
                <div>
                    <h3 class="text-sm font-semibold">Raihan NH</h3>
                    <p class="mt-1 text-sm text-muted-foreground">
                        Fullstack Developer | Building with heart and soul.
                    </p>
                </div>
                <p class="text-xs text-muted-foreground sm:text-sm">© 2026 Raihannh. All rights reserved.</p>
            </div>
        </footer>
    </div>
</template>