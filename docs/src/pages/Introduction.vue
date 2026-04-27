<template>
  <div class="space-y-6 animate-in fade-in duration-500">
    <header class="space-y-2">
      <h1 class="text-3xl font-bold tracking-tight text-foreground">OneUI Vue</h1>
      <p class="text-base text-muted-foreground leading-relaxed max-w-2xl">
        A premium Vue 3 component library built on top of Shadcn UI. Private, professional, and high-density.
      </p>
    </header>
    <div class="grid gap-6 md:grid-cols-2">
      <div class="p-6 rounded-xl border border-border bg-card/50 space-y-2">
        <h3 class="font-bold text-sm">Professional First</h3>
        <p class="text-[13px] text-muted-foreground leading-relaxed">
          Designed with a focus on data-density and minimal aesthetics. Perfect for internal tools and SaaS.
        </p>
      </div>
      <div class="p-6 rounded-xl border border-border bg-card/50 space-y-2">
        <h3 class="font-bold text-sm">Premium Aesthetics</h3>
        <p class="text-[13px] text-muted-foreground leading-relaxed">
          Unique custom theme with modern aesthetics, smooth transitions, and deep grey backgrounds.
        </p>
      </div>
    </div>

    <div class="pt-6">
      <router-link to="/docs/installation">
        <Button size="lg" class="rounded-full px-8">
          Get Started
          <ArrowRight class="ml-2 h-4 w-4" />
        </Button>
      </router-link>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Button } from '@/src/index';
import { ArrowRight } from 'lucide-vue-next';
</script>
