<script setup lang="ts">
import { Icon } from "@iconify/vue"
import { Button } from '@/src/index';
import { ref, onMounted } from 'vue';

const isDark = ref(true);

onMounted(() => {
  // Check initial theme from HTML class
  isDark.value = document.documentElement.classList.contains('dark');
});

const toggleTheme = () => {
  const newDark = !isDark.value;
  isDark.value = newDark;
  if (newDark) {
    document.documentElement.classList.add('dark');
  } else {
    document.documentElement.classList.remove('dark');
  }
};
</script>

<template>
  <Button
    variant="ghost"
    size="icon"
    class="rounded-full w-9 h-9 hover:bg-muted transition-all duration-300"
    @click="toggleTheme"
  >
    <Icon v-if="isDark" icon="lucide:sun" height="18" width="18" class="text-amber-500" />
    <Icon v-else icon="lucide:moon" height="18" width="18" class="text-slate-700" />
  </Button>
</template>
