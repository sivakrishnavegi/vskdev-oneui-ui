<script setup lang="ts">
import { Button } from '@/src/index';
import PropsTable from '../components/PropsTable.vue';
import CodeBlock from '../components/CodeBlock.vue';
import { Icon } from "@iconify/vue"

const buttonProps = [
  { name: 'variant', type: '"default" | "destructive" | "outline" | "secondary" | "ghost" | "link"', default: '"default"', description: 'The visual style of the button.' },
  { name: 'size', type: '"default" | "sm" | "lg" | "icon" | "icon-sm" | "icon-lg"', default: '"default"', description: 'The size of the button.' },
  { name: 'label', type: 'string', default: 'undefined', description: 'The text label for the button (allows self-closing usage).' },
  { name: 'loading', type: 'boolean', default: 'false', description: 'Shows a loading spinner and disables the button.' },
  { name: 'loadingLabel', type: 'string', default: '"Loading..."', description: 'Text to display when the button is in a loading state.' },
  { name: 'pill', type: 'boolean', default: 'false', description: 'Makes the button fully rounded (pill shape).' },
  { name: 'icon', type: 'string', default: 'undefined', description: 'An optional Iconify icon name to display before the text.' },
  { name: 'as', type: 'string', default: '"button"', description: 'The element to render the button as.' },
  { name: 'disabled', type: 'boolean', default: 'false', description: 'Whether the button is disabled.' },
  { name: 'class', type: 'string', default: 'undefined', description: 'Custom CSS classes to apply to the button.' },
];

const usageCode = `import { Button } from 'vskdev-oneui-vue';

// Self-closing with label
<Button label="Click Me" />

// Using slots
<Button variant="outline">Custom Content</Button>`;

const loadingCode = `<Button loading variant="primary" label="Processing" />`;

const iconCode = `<Button icon="lucide:mail" label="Email Login" />`;
</script>

<template>
  <div class="space-y-10 animate-in fade-in slide-in-from-bottom-2 duration-700">
    <header class="space-y-2">
      <div class="flex items-center gap-2 text-primary text-[11px] font-bold uppercase tracking-widest">
        <span>Components</span>
        <span class="text-muted-foreground">/</span>
        <span class="text-foreground">Button</span>
      </div>
      <h1 class="text-4xl font-bold tracking-tight">Button</h1>
      <p class="text-lg text-muted-foreground leading-relaxed max-w-3xl">
        A versatile button component with multiple variants, sizes, and states. Optimized for data-dense applications and premium aesthetics.
      </p>
    </header>

    <section class="space-y-4">
      <h2 class="text-2xl font-bold border-b pb-2">Usage</h2>
      <CodeBlock :code="usageCode" />
    </section>

    <section class="space-y-6">
      <h2 class="text-2xl font-bold border-b pb-2">Variants</h2>
      <p class="text-sm text-muted-foreground">Choose from a variety of visual styles to match the intent of the action.</p>
      
      <div class="flex flex-wrap gap-4 p-8 rounded-xl border bg-card/30 items-center justify-center">
        <Button variant="default">Default</Button>
        <Button variant="secondary">Secondary</Button>
        <Button variant="outline">Outline</Button>
        <Button variant="destructive">Destructive</Button>
        <Button variant="ghost">Ghost</Button>
        <Button variant="link">Link</Button>
      </div>

      <CodeBlock code='<Button variant="default">Default</Button>
<Button variant="secondary">Secondary</Button>
<Button variant="outline">Outline</Button>
<Button variant="destructive">Destructive</Button>' />
    </section>

    <section class="space-y-6">
      <h2 class="text-2xl font-bold border-b pb-2">Sizes</h2>
      <div class="flex flex-wrap gap-4 p-8 rounded-xl border bg-card/30 items-center justify-center">
        <Button size="sm">Small</Button>
        <Button size="default">Default</Button>
        <Button size="lg">Large</Button>
      </div>
    </section>

    <section class="space-y-6">
      <h2 class="text-2xl font-bold border-b pb-2">Pill Shape</h2>
      <p class="text-sm text-muted-foreground">Use the <code class="bg-muted px-1 rounded">pill</code> prop to create fully rounded buttons.</p>
      <div class="flex flex-wrap gap-4 p-8 rounded-xl border bg-card/30 items-center justify-center">
        <Button pill>Pill Button</Button>
        <Button pill variant="outline">Pill Outline</Button>
        <Button pill variant="destructive" icon="lucide:trash">Delete</Button>
      </div>
      <CodeBlock code='<Button pill>Pill Button</Button>
<Button pill variant="outline">Pill Outline</Button>' />
    </section>

    <section class="space-y-6">
      <h2 class="text-2xl font-bold border-b pb-2">Loading State</h2>
      <p class="text-sm text-muted-foreground">Use the <code class="bg-muted px-1 rounded">loading</code> prop to show a processing state. You can customize the text using <code class="bg-muted px-1 rounded">loadingLabel</code>.</p>
      <div class="flex flex-wrap gap-4 p-8 rounded-xl border bg-card/30 items-center justify-center">
        <Button loading>Default Loading</Button>
        <Button loading loading-label="Saving..." variant="outline">Save</Button>
        <Button loading loading-label="Processing..." variant="destructive">Delete</Button>
      </div>
      <CodeBlock :code="loadingCode" />
      <CodeBlock code='<Button loading loading-label="Saving...">Save</Button>' />
    </section>

    <section class="space-y-6">
      <h2 class="text-2xl font-bold border-b pb-2">Icons</h2>
      <p class="text-sm text-muted-foreground">Add icons to your buttons using the <code class="bg-muted px-1 rounded">icon</code> prop or slots.</p>
      <div class="flex flex-wrap gap-4 p-8 rounded-xl border bg-card/30 items-center justify-center">
        <Button icon="lucide:mail">Login with Email</Button>
        <Button variant="outline">
          Continue
          <Icon icon="lucide:arrow-right" class="ml-2 h-4 w-4" />
        </Button>
        <Button size="icon" variant="ghost">
          <Icon icon="lucide:mail" class="h-4 w-4" />
        </Button>
      </div>
      <CodeBlock :code="iconCode" />
    </section>

    <section class="space-y-6">
      <h2 class="text-2xl font-bold border-b pb-2">Custom Styling</h2>
      <p class="text-sm text-muted-foreground">You can pass custom Tailwind classes via the <code class="bg-muted px-1 rounded">class</code> prop to override or extend styles.</p>
      <div class="flex flex-wrap gap-4 p-8 rounded-xl border bg-card/30 items-center justify-center">
        <Button label="Gradient Button" class="bg-gradient-to-r from-indigo-500 to-purple-600 border-none hover:opacity-90" />
        <Button label="Shadow Button" class="shadow-[0_10px_20px_rgba(0,0,0,0.2)] dark:shadow-[0_10px_20px_rgba(255,255,255,0.1)]" />
      </div>
      <CodeBlock code='<Button 
  label="Gradient Button" 
  class="bg-gradient-to-r from-indigo-500 to-purple-600 border-none" 
/>' />
    </section>

    <section class="space-y-6">
      <h2 class="text-2xl font-bold border-b pb-2">Action Buttons</h2>
      <p class="text-sm text-muted-foreground">Icon-only buttons for common actions. Use the <code class="bg-muted px-1 rounded">size="icon"</code> prop.</p>
      <div class="flex flex-wrap gap-4 p-8 rounded-xl border bg-card/30 items-center justify-center">
        <Button size="icon" variant="ghost" icon="lucide:edit-2" class="text-blue-500 hover:text-blue-600 hover:bg-blue-50 dark:hover:bg-blue-950" />
        <Button size="icon" variant="ghost" icon="lucide:trash-2" class="text-destructive hover:bg-destructive/10" />
        <Button size="icon" variant="outline" icon="lucide:download" />
        <Button size="icon" variant="secondary" icon="lucide:info" class="rounded-full" />
        <Button size="icon" variant="ghost" icon="lucide:code" class="text-amber-500 hover:text-amber-600 hover:bg-amber-50 dark:hover:bg-amber-950" />
      </div>
      <CodeBlock code='<!-- Edit Action -->
<Button size="icon" variant="ghost" icon="lucide:edit-2" class="text-blue-500" />

<!-- Delete Action -->
<Button size="icon" variant="ghost" icon="lucide:trash-2" class="text-destructive" />

<!-- Download Action -->
<Button size="icon" variant="outline" icon="lucide:download" />

<!-- Info Action (Pill) -->
<Button size="icon" variant="secondary" icon="lucide:info" pill />

<!-- Snippets Action -->
<Button size="icon" variant="ghost" icon="lucide:code" class="text-amber-500" />' />
    </section>

    <section class="space-y-4">
      <h2 class="text-2xl font-bold border-b pb-2">API Reference</h2>
      <PropsTable :props="buttonProps" />
    </section>
  </div>
</template>
