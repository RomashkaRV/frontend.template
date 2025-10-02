import type { FC } from "react";
import type { SVGProps } from "react-html-props";

import {
  IconCheckCircle,
  IconDangerCircle,
  IconDazeCircle
} from "components/core/icons";

import type { ItemType } from "./types";

export const TYPED_ICON: Record<ItemType, FC<SVGProps>> = {
  success: IconCheckCircle,
  error: IconDazeCircle,
  warning: IconDangerCircle
};
