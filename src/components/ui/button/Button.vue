<script setup lang="ts">
import type { HTMLAttributes } from "vue"
import type { ButtonVariants } from "."
import { cn } from "@/lib/utils"
import { buttonVariants } from "."

interface Props extends /* @vue-ignore */ HTMLAttributes {
  variant?: ButtonVariants["variant"]
  size?: ButtonVariants["size"]
}

const props = defineProps<Props>()
</script>

<template>
  <button :class="cn(buttonVariants({ variant: props.variant, size: props.size }), props.class)" v-bind="$attrs">
    <slot />
  </button>
</template>
