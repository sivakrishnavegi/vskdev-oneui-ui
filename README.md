# 🎨 OneUI (@vskdev/web-oneui)

**A premium Vue 3 component library built with Tailwind CSS, Shadcn UI (Reka UI), and Iconify.**

OneUI is a high-performance, accessible, and beautifully designed UI library created for modern Vue 3 applications. It leverages the power of Reka UI (Radix Vue) and Tailwind CSS to provide a professional foundation for data-dense and premium web applications.

---

## 🚀 Quick Start

### Installation

```bash
npm install @vskdev/web-oneui @iconify/vue
```

### Setup Tailwind CSS

Since OneUI uses Tailwind CSS, you need to include the library's styles and update your content paths.

1. Add the following to your main CSS entry point (e.g., `src/assets/main.css`):

```css
@import "@vskdev/web-oneui/dist/oneui.css";
```

2. Update your `tailwind.config.js` to include the library's components:

```javascript
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
    "./node_modules/@vskdev/web-oneui/dist/**/*.{js,ts,vue}",
  ],
  theme: {
    extend: {
      // OneUI uses standard Shadcn-like CSS variables
      // Make sure your theme matches or imports OneUI tokens
    },
  },
  plugins: [require("tailwindcss-animate")],
}
```

---

## 🛠️ Usage

### Button Component

The Button component supports multiple variants, sizes, states, and self-closing syntax.

```vue
<script setup>
import { Button } from '@vskdev/web-oneui';
</script>

<template>
  <div class="flex gap-4">
    <!-- Self-closing with Iconify -->
    <Button variant="default" icon="lucide:mail" label="Login with Email" />
    
    <!-- Pill variant and Loading state -->
    <Button pill loading variant="outline" loading-label="Saving..." />
    
    <!-- Icon-only action button -->
    <Button size="icon" variant="ghost" icon="lucide:trash-2" class="text-destructive" />
    
    <!-- Using slots -->
    <Button variant="secondary">
      <span>Custom Content</span>
    </Button>
  </div>
</template>
```

#### Key Props

| Prop | Type | Default | Description |
| :--- | :--- | :--- | :--- |
| `variant` | `string` | `default` | `default | destructive | outline | secondary | ghost | link` |
| `size` | `string` | `default` | `default | sm | lg | icon | icon-sm | icon-lg` |
| `label` | `string` | - | Text label for the button (allows self-closing) |
| `pill` | `boolean` | `false` | Makes the button fully rounded |
| `loading` | `boolean` | `false` | Shows spinner and disables interaction |
| `loadingLabel` | `string` | `Loading...` | Text to show during loading state |
| `icon` | `string` | - | Iconify icon name (e.g., `lucide:home`) |

---

### App Layout (Sidebar & Header)

OneUI provides a full layout system using Shadcn-Vue primitives.

```vue
<script setup>
import { AppSidebar, AppHeader, SidebarProvider, SidebarInset } from '@vskdev/web-oneui';

const navItems = [
  { title: "Home", url: "/", icon: "lucide:home" },
  { title: "Settings", url: "/settings", icon: "lucide:settings" },
];
</script>

<template>
  <SidebarProvider>
    <AppSidebar :items="navItems" />
    <SidebarInset>
      <AppHeader>
        <template #breadcrumb>
          <span>Dashboard</span>
        </template>
      </AppHeader>
      <main class="p-6">
        <router-view />
      </main>
    </SidebarInset>
  </SidebarProvider>
</template>
```

---

## 🏛️ Project Status

- **Framework**: Vue 3 (Composition API)
- **Status**: Active Development
- **Owner**: siva krishna vegi
- **Tech Stack**: Vue 3, TypeScript, Tailwind CSS, Reka UI, Iconify

---

## 📄 License

Internal use only. All rights reserved.
# vskdev-oneui-ui
