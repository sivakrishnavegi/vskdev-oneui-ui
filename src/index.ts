// Import CSS
import "./theme/tailwind.css";

// Export UI components
export * from "./components/Button";
export { default as AppSidebar } from "./components/AppSidebar/AppSidebar.vue";
export { default as AppHeader } from "./components/AppHeader/AppHeader.vue";

// Export Shadcn primitives
export * from "./components/shadcn/ui/sidebar";
export * from "./components/shadcn/ui/sheet";
export * from "./components/shadcn/ui/collapsible";
export * from "./components/shadcn/ui/separator";
export * from "./components/shadcn/ui/skeleton";
export * from "./components/shadcn/ui/input";
export * from "./components/shadcn/ui/tooltip";
export * from "./components/shadcn/ui/breadcrumb";
export * from "./components/shadcn/ui/dropdown-menu";
export * from "./components/shadcn/ui/switch";

export const hello = "One UI Vue Ready!";
