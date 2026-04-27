import type { ButtonVariants } from "../shadcn/ui/button";
import type { VNode, Component } from "vue";

export interface CustomButtonProps {
  variant?: ButtonVariants["variant"];
  size?: ButtonVariants["size"];
  label?: string;
  pill?: boolean;
  loading?: boolean;
  loadingLabel?: string;
  icon?: string | VNode | Component;
  disabled?: boolean;
  class?: string;
}
