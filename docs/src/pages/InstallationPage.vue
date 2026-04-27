<template>
  <div class="space-y-8 animate-in fade-in duration-500">
    <header class="space-y-2">
      <h1 class="text-3xl font-bold tracking-tight">Installation</h1>
      <p class="text-base text-muted-foreground">How to install and configure OneUI in your Vue 3 project.</p>
    </header>

    <section class="space-y-4">
      <h2 class="text-xl font-semibold">1. Install Package</h2>
      <p class="text-sm text-muted-foreground">Install the library and its peer dependencies via your preferred package manager.</p>
      <div class="relative group">
        <pre class="p-4 rounded-lg bg-muted/50 text-sm overflow-x-auto border border-border"><code>npm install vskdev-oneui-vue radix-vue lucide-vue-next class-variance-authority clsx tailwind-merge</code></pre>
      </div>
    </section>

    <section class="space-y-4">
      <h2 class="text-xl font-semibold">2. Configure Tailwind CSS</h2>
      <p class="text-sm text-muted-foreground">Add OneUI's CSS to your main entry file (e.g., <code class="bg-muted px-1 rounded">main.ts</code>).</p>
      <div class="relative group">
        <pre class="p-4 rounded-lg bg-muted/50 text-sm overflow-x-auto border border-border"><code>import 'vskdev-oneui-vue/dist/oneui.css';</code></pre>
      </div>
      <p class="text-sm text-muted-foreground">Ensure your <code class="bg-muted px-1 rounded">tailwind.config.js</code> is configured to pick up OneUI styles if you are customizing themes.</p>
    </section>

    <section class="space-y-4">
      <h2 class="text-xl font-semibold">3. Usage</h2>
      <p class="text-sm text-muted-foreground">Import and use components directly in your Vue components.</p>
      <div class="relative group">
        <pre class="p-4 rounded-lg bg-muted/50 text-sm overflow-x-auto border border-border"><code>&lt;script setup&gt;
import { Button } from 'vskdev-oneui-vue';
&lt;/script&gt;

&lt;template&gt;
  &lt;Button variant="default"&gt;Click Me&lt;/Button&gt;
&lt;/template&gt;</code></pre>
      </div>
    </section>
  </div>
</template>
