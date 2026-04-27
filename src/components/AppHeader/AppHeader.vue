<script setup lang="ts">
import { useSidebar } from "@/src/components/shadcn/ui/sidebar"
import { SidebarTrigger } from "@/src/components/shadcn/ui/sidebar"
import { Separator } from "@/src/components/shadcn/ui/separator"
import { cn } from "@/src/utils/cn"
import { computed, type HTMLAttributes } from 'vue'

interface Props {
  showSidebarTrigger?: boolean
  class?: HTMLAttributes['class']
}

const props = withDefaults(defineProps<Props>(), {
  showSidebarTrigger: true,
})

const sidebar = useSidebar()
const hasSidebar = computed(() => !!sidebar)
</script>

<template>
  <header
    :class="cn(
      'sticky top-0 z-30 flex h-14 items-center gap-4 border-b bg-background px-4 md:px-6',
      props.class
    )"
  >
    <div class="flex flex-1 items-center gap-4">
      <template v-if="showSidebarTrigger && hasSidebar">
        <SidebarTrigger class="-ml-1" />
        <Separator orientation="vertical" class="mr-2 h-4" />
      </template>
      
      <slot name="breadcrumb" />
      <slot name="left" />
    </div>
    <div class="flex items-center gap-4">
      <slot name="right" />
    </div>
  </header>
</template>
