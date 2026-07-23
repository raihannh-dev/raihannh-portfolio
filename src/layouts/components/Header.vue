<script setup lang="ts">
import { useRoute, RouterLink } from 'vue-router'
import { useDark, useToggle } from '@vueuse/core'
import { Sun, Moon } from 'lucide-vue-next'

const route = useRoute()

const isDark = useDark()
const toggleDark = useToggle(isDark)

const navLinks = [
    { label: 'About', path: '/about' },
    { label: 'Projects', path: '/projects' },
]

const isActive = (path: string) => {
    if (path === '/') {
        return route.path === '/'
    }
    return route.path.startsWith(path)
}
</script>

<template>
    <header
        class="sticky top-0 z-50 w-full border-b border-border/60 bg-background/80 backdrop-blur-md transition-colors duration-300">
        <nav class="mx-auto flex h-16 w-full max-w-3xl items-center justify-between px-4 sm:px-6 lg:px-8">
            <!-- Brand Logo -->
            <RouterLink to="/"
                class="flex items-center gap-2 text-sm font-bold tracking-tight text-foreground transition-colors hover:text-muted-foreground sm:text-base">
                <span>raihannh.dev <span class="text-muted-foreground font-normal">/&gt;</span></span>
            </RouterLink>

            <!-- Navigation Links & Theme Switcher -->
            <div class="flex items-center gap-4 sm:gap-6">
                <ul class="flex items-center gap-4 sm:gap-6 text-xs sm:text-sm">
                    <li v-for="item in navLinks" :key="item.path">
                        <RouterLink :to="item.path" :class="[
                            'transition-colors whitespace-nowrap',
                            isActive(item.path)
                                ? 'text-foreground font-medium'
                                : 'text-muted-foreground hover:text-foreground',
                        ]">
                            {{ item.label }}
                        </RouterLink>
                    </li>
                </ul>

                <!-- Vertical Divider -->
                <div class="h-4 w-px bg-border/80" />

                <!-- Theme Switcher Button -->
                <button type="button" @click="toggleDark()"
                    class="relative flex h-8 w-8 items-center justify-center rounded-md text-muted-foreground transition-colors hover:text-foreground hover:bg-muted/50"
                    :title="isDark ? 'Switch to light mode' : 'Switch to dark mode'" aria-label="Toggle theme mode">
                    <Sun v-if="isDark" class="size-4 transition-transform duration-300 rotate-0 scale-100" />
                    <Moon v-else class="size-4 transition-transform duration-300 rotate-0 scale-100" />
                </button>
            </div>
        </nav>
    </header>
</template>
