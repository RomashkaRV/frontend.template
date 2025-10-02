import type { ButtonProps as HTMLButtonProps } from "react-html-props";

export type ButtonColor = "primary" | "secondary" | "overlay" | "negative";

export type ButtonSize = "s" | "m" | "l";

export type ButtonProps = Omit<HTMLButtonProps, "color"> & {
  size?: ButtonSize;
  color?: ButtonColor;
  isStretched?: boolean;
};
