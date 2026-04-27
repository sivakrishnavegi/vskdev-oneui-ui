<script setup lang="ts">
import { useSlots } from "vue";
import { Icon } from "@iconify/vue";
import { cn } from "../../utils/cn";
import { Button as ShadCNButton } from "../shadcn/ui/button";
import type { CustomButtonProps } from "./Button.types";

const props = withDefaults(defineProps<CustomButtonProps>(), {
  loading: false,
  pill: false,
});

const slots = useSlots();

defineOptions({
  inheritAttrs: false,
});
</script>

<template>
  <ShadCNButton
    v-bind="$attrs"
    :class="cn('relative flex items-center justify-center gap-2 overflow-hidden', props.class)"
    :disabled="loading || props.disabled"
    :variant="variant"
    :size="size"
    :pill="pill"
  >
    <!-- Loading State -->
    <template v-if="loading">
      <Icon icon="lucide:loader-2" class="h-4 w-4 animate-spin text-current" />
    </template>

    <!-- Icon (shown only when not loading) -->
    <template v-else-if="icon">
      <Icon v-if="typeof icon === 'string'" :icon="icon" class="h-4 w-4 shrink-0" />
      <component :is="icon" v-else class="h-4 w-4 shrink-0" />
    </template>

    <!-- Button Text / Content -->
    <span 
      v-if="loading || slots.default || label"
      :class="cn('inline-flex items-center gap-2', loading && 'opacity-70')"
    >
      <template v-if="loading">
        {{ loadingLabel || 'Loading...' }}
      </template>
      <template v-else>
        <slot v-if="slots.default" />
        <template v-else-if="label">{{ label }}</template>
      </template>
    </span>
  </ShadCNButton>
</template>
