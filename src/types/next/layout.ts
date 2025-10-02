import type { ReactNode } from "react";

interface LayoutParams {
  [key: string]: string;
}

export interface LayoutProps<T extends LayoutParams = LayoutParams> {
  params?: Promise<T>;
  children: ReactNode;
}
