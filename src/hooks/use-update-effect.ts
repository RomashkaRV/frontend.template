import { useEffect } from "react";

import { useFirstRender } from "./use-first-render";

export const useUpdateEffect = (
  effect: () => void | Promise<void>,
  deps: Array<unknown>
) => {
  const firstRender = useFirstRender();

  useEffect(() => {
    if (firstRender) {
      return;
    }

    effect();
  }, deps);
};
