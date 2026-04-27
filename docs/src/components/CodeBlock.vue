<script setup lang="ts">
import { ref } from 'vue';
import { Icon } from "@iconify/vue"

const props = defineProps<{
  code: string;
  language?: string;
}>();

const copied = ref(false);

const copyCode = async () => {
  await navigator.clipboard.writeText(props.code);
  copied.value = true;
  setTimeout(() => {
    copied.value = false;
  }, 2000);
};
</script>

<template>
  <div class="relative group my-4">
    <div class="absolute right-4 top-4 z-10">
      <button
        @click="copyCode"
        class="p-2 rounded-md bg-background/50 border border-border hover:bg-background transition-all text-muted-foreground hover:text-foreground"
      >
        <Icon v-if="copied" icon="lucide:check" height="14" width="14" class="text-green-500" />
        <Icon v-else icon="lucide:copy" height="14" width="14" />
      </button>
    </div>
    <pre class="p-5 rounded-xl bg-muted/30 border border-border text-[13px] font-mono overflow-x-auto leading-relaxed shadow-sm"><code>{{ code }}</code></pre>
  </div>
</template>
