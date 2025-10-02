import "react";

type ClassNames = Array<
  | {
      [key: string]: boolean | undefined;
    }
  | string
  | undefined
>;

declare module "react" {
  export type PropsWithClass<P = unknown> = P & {
    className?: string;
    classNames?: ClassNames;
  };

  interface HTMLAttributes {
    classNames?: ClassNames;
  }
}
