<script setup lang="ts">
import { Icon } from "@iconify/vue"
import { cn } from '@/src/utils/cn'
import { useRoute } from 'vue-router'

interface Props {
  isOpen: boolean;
}

const props = defineProps<Props>();
const emit = defineEmits(['close']);
const route = useRoute();

const sections = [
  {
    title: "Getting Started",
    items: [
      { id: 'intro', name: 'Introduction', icon: 'lucide:book-open', path: '/' },
      { id: 'install', name: 'Installation', icon: 'lucide:download', path: '/docs/installation' },
    ]
  },
  {
    title: "Components",
    items: [
      { id: 'button', name: 'Button', icon: 'lucide:layers', path: '/docs/button' },
    ]
  }
];

const onClose = () => {
  if (window.innerWidth < 1024) {
    emit('close');
  }
};
</script>

<template>
  <aside :class="cn(
    'transition-all duration-300 ease-in-out border-r border-border bg-background flex flex-col overflow-hidden h-full z-20',
    isOpen ? 'w-60' : 'w-0'
  )">
    <div class="p-4 border-b flex items-center gap-2 shrink-0 h-14">
      <div class="w-6 h-6 rounded bg-primary flex items-center justify-center text-primary-foreground font-bold text-xs">UI</div>
      <span class="font-bold text-sm tracking-tight">OneUI</span>
    </div>

    <nav class="flex-1 overflow-y-auto p-3 space-y-6 custom-scrollbar">
      <div v-for="section in sections" :key="section.title" class="space-y-1">
        <h4 class="px-2 text-[10px] font-bold text-muted-foreground uppercase tracking-widest mb-2">
          {{ section.title }}
        </h4>
        <div class="space-y-0.5">
          <router-link
            v-for="item in section.items"
            :key="item.id"
            :to="item.path"
            @click="onClose"
            :class="cn(
              'flex items-center gap-2.5 px-2.5 py-1.5 rounded-md text-[13px] font-medium transition-colors group',
              route.path === item.path 
                ? 'bg-primary/10 text-primary' 
                : 'text-muted-foreground hover:text-foreground hover:bg-accent/50'
            )"
          >
            <span :class="cn(
              'transition-colors',
              'text-muted-foreground group-hover:text-foreground'
            )">
              <Icon :icon="item.icon" height="14" width="14" />
            </span>
            {{ item.name }}
          </router-link>
        </div>
      </div>
    </nav>

    <div class="p-4 border-t bg-muted/20">
      <div class="flex items-center justify-between text-[11px] text-muted-foreground font-medium mb-2">
        <span>PRIVATE V1.0.18</span>
        <a href="https://github.com/sivakrishnavegi" target="_blank" rel="noreferrer" class="hover:text-foreground transition-colors">
          <Icon icon="lucide:github" height="12" width="12" />
        </a>
      </div>
      <div class="h-1 w-full bg-border rounded-full overflow-hidden">
        <div class="h-full w-full bg-primary/20 rounded-full" />
      </div>
    </div>
  </aside>
</template>
