<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';
import { useRoute } from 'vue-router';
import { Icon } from "@iconify/vue"
import Sidebar from './components/Sidebar.vue';
import ThemeToggle from './components/ThemeToggle.vue';

const isSidebarOpen = ref(true);
const route = useRoute();

const toggleSidebar = () => {
  isSidebarOpen.value = !isSidebarOpen.value;
};

const handleResize = () => {
  if (window.innerWidth < 1024) {
    isSidebarOpen.value = false;
  } else {
    isSidebarOpen.value = true;
  }
};

onMounted(() => {
  handleResize();
  window.addEventListener('resize', handleResize);
});

onUnmounted(() => {
  window.removeEventListener('resize', handleResize);
});
</script>

<template>
  <div class="flex h-screen w-full bg-background overflow-hidden text-[13px]">
    <Sidebar :is-open="isSidebarOpen" @close="() => isSidebarOpen = false" />
    
    <main class="flex-1 flex flex-col min-w-0 relative h-full">
      <header class="h-14 border-b border-border bg-background/95 backdrop-blur flex items-center justify-between px-4 sticky top-0 z-10 shrink-0">
        <div class="flex items-center gap-4">
          <button 
            @click="toggleSidebar"
            class="p-1.5 hover:bg-accent rounded-md transition-colors text-muted-foreground hover:text-foreground"
          >
            <Icon v-if="isSidebarOpen" icon="lucide:x" height="16" width="16" />
            <Icon v-else icon="lucide:menu" height="16" width="16" />
          </button>
          <div class="hidden md:flex items-center gap-1 text-muted-foreground">
            <span class="text-[11px] font-medium px-1.5 py-0.5 rounded bg-muted">docs</span>
            <span class="text-xs">/</span>
            <span class="text-xs font-medium text-foreground capitalize">
              {{ route.path.split('/').pop() || 'introduction' }}
            </span>
          </div>
        </div>

        <div class="flex items-center gap-3">
          <ThemeToggle />
          <a 
            href="https://github.com/sivakrishnavegi" 
            target="_blank" 
            rel="noreferrer"
            class="p-1.5 hover:bg-accent rounded-md transition-colors text-muted-foreground hover:text-foreground"
          >
            <Icon icon="lucide:github" height="16" width="16" />
          </a>
        </div>
      </header>

      <div class="flex-1 overflow-y-auto custom-scrollbar">
        <div class="container max-w-5xl py-8 px-6 lg:px-10">
          <router-view />
        </div>
      </div>
    </main>
  </div>
</template>

<style>
.custom-scrollbar::-webkit-scrollbar {
  width: 6px;
}
.custom-scrollbar::-webkit-scrollbar-track {
  background: transparent;
}
.custom-scrollbar::-webkit-scrollbar-thumb {
  background: hsl(var(--border));
  border-radius: 10px;
}
.custom-scrollbar::-webkit-scrollbar-thumb:hover {
  background: hsl(var(--muted-foreground));
}
</style>
