<script setup lang="ts">
interface Prop {
  name: string;
  type: string;
  default?: string;
  description: string;
}

defineProps<{
  props: Prop[];
}>();
</script>

<template>
  <div class="my-6 w-full overflow-y-auto rounded-lg border">
    <table class="w-full text-left text-sm">
      <thead>
        <tr class="border-b bg-muted/50 font-medium">
          <th class="px-4 py-3">Prop</th>
          <th class="px-4 py-3">Type</th>
          <th class="px-4 py-3">Default</th>
          <th class="px-4 py-3">Description</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="prop in props" :key="prop.name" class="border-b last:border-0 hover:bg-muted/30 transition-colors">
          <td class="px-4 py-3 font-mono text-[12px] font-bold text-primary">{{ prop.name }}</td>
          <td class="px-4 py-3 font-mono text-[11px] text-muted-foreground">{{ prop.type }}</td>
          <td class="px-4 py-3 font-mono text-[11px] text-muted-foreground">{{ prop.default || '-' }}</td>
          <td class="px-4 py-3 text-muted-foreground leading-relaxed">{{ prop.description }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
