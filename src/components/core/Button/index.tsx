import type { FC } from "react";

import type { ButtonProps } from "./types";

import style from "./index.module.scss";

export const Button: FC<ButtonProps> = ({
  className,
  color = "primary",
  size = "l",
  isStretched,
  ...rest
}) => (
  <button
    classNames={[
      style.button,
      style[color],
      style[size],
      { [style.stretched]: isStretched },
      className
    ]}
    type="button"
    {...rest}
  />
);
