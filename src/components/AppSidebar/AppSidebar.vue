<script setup lang="ts">
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarGroupContent,
  SidebarMenuSub,
  SidebarMenuSubItem,
  SidebarMenuSubButton,
} from "@/src/components/shadcn/ui/sidebar"
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/src/components/shadcn/ui/collapsible"
import { Switch } from "@/src/components/shadcn/ui/switch"
import { cn } from "@/src/utils/cn"
import { Icon } from "@iconify/vue"
import { type HTMLAttributes } from 'vue'

export interface AppSidebarSubItem {
  title: string
  url: string
  isActive?: boolean
}

export interface AppSidebarItem {
  title: string
  url?: string
  icon?: string // Expecting Iconify icon name
  isActive?: boolean
  items?: AppSidebarSubItem[]
}

export interface AppSidebarGroup {
  title: string
  items: AppSidebarItem[]
}

interface Props {
  groups: AppSidebarGroup[]
  logo?: string // Iconify icon name or string
  appName?: string
  footer?: any
  fixed?: boolean
  variant?: "sidebar" | "floating" | "inset"
  colorTheme?: "default" | "slate" | "zinc" | "indigo" | "amber" | "rose"
  showThemeToggle?: boolean
  isDarkMode?: boolean
  class?: HTMLAttributes['class']
}

const props = withDefaults(defineProps<Props>(), {
  fixed: true,
  variant: "sidebar",
  colorTheme: "default",
  showThemeToggle: false,
  isDarkMode: false,
})

const emit = defineEmits(['themeChange'])

const onThemeChange = (val: boolean) => {
  emit('themeChange', val)
}
</script>

<template>
  <Sidebar 
    :class="cn(
      variant === 'sidebar' && 'border-r border-sidebar-border',
      props.class
    )" 
    :fixed="fixed" 
    :variant="variant"
    :data-theme="colorTheme !== 'default' ? colorTheme : undefined"
  >
    <SidebarHeader v-if="logo || appName">
      <div class="flex items-center gap-3 px-2 py-3 h-14 border-b border-sidebar-border/50 -mx-2 mb-2">
        <div v-if="logo" class="flex aspect-square size-8 items-center justify-center rounded-lg bg-primary text-primary-foreground">
          <Icon :icon="logo" height="18" width="18" />
        </div>
        <div v-if="appName" class="grid flex-1 text-left text-sm leading-tight">
          <span class="truncate font-semibold">{{ appName }}</span>
        </div>
      </div>
    </SidebarHeader>
    
    <SidebarContent>
      <SidebarGroup v-for="group in groups" :key="group.title">
        <SidebarGroupLabel>{{ group.title }}</SidebarGroupLabel>
        <SidebarGroupContent>
          <SidebarMenu>
            <SidebarMenuItem v-for="item in group.items" :key="item.title">
              <Collapsible
                v-if="item.items && item.items.length > 0"
                as-child
                :default-open="item.isActive"
                class="group/collapsible"
              >
                <template #default="{ open }">
                  <CollapsibleTrigger as-child>
                    <SidebarMenuButton :tooltip="item.title">
                      <Icon v-if="item.icon" :icon="item.icon" height="18" width="18" />
                      <span>{{ item.title }}</span>
                      <Icon 
                        icon="lucide:chevron-right" 
                        class="ml-auto transition-transform duration-200" 
                        :class="{ 'rotate-90': open }" 
                        height="14" 
                        width="14"
                      />
                    </SidebarMenuButton>
                  </CollapsibleTrigger>
                  <CollapsibleContent>
                    <SidebarMenuSub>
                      <SidebarMenuSubItem v-for="subItem in item.items" :key="subItem.title">
                        <SidebarMenuSubButton as-child :is-active="subItem.isActive">
                          <a :href="subItem.url">
                            <span>{{ subItem.title }}</span>
                          </a>
                        </SidebarMenuSubButton>
                      </SidebarMenuSubItem>
                    </SidebarMenuSub>
                  </CollapsibleContent>
                </template>
              </Collapsible>
              
              <SidebarMenuButton v-else as-child :is-active="item.isActive" :tooltip="item.title">
                <a :href="item.url">
                  <Icon v-if="item.icon" :icon="item.icon" height="18" width="18" />
                  <span>{{ item.title }}</span>
                </a>
              </SidebarMenuButton>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarGroupContent>
      </SidebarGroup>
    </SidebarContent>
    
    <SidebarFooter v-if="footer || showThemeToggle">
      <div class="flex flex-col gap-2 p-2">
        <div v-if="showThemeToggle" class="flex items-center justify-between px-2 py-1.5 rounded-lg bg-sidebar-accent/50 text-sidebar-foreground border border-sidebar-border/30">
          <div class="flex items-center gap-2">
            <Icon v-if="isDarkMode" icon="lucide:moon" height="14" width="14" class="text-primary" />
            <Icon v-else icon="lucide:sun" height="14" width="14" class="text-primary" />
            <span class="text-[11px] font-medium uppercase tracking-wider">{{ isDarkMode ? 'Dark' : 'Light' }}</span>
          </div>
          <Switch 
            :checked="isDarkMode" 
            @update:checked="onThemeChange"
            class="scale-75 origin-right"
          />
        </div>
        <component :is="footer" v-if="footer && typeof footer !== 'string'" />
        <template v-else-if="footer">{{ footer }}</template>
      </div>
    </SidebarFooter>
  </Sidebar>
</template>
