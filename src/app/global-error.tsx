"use client";

import React from "react";

export default function GlobalError({
  reset
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html>
      <body>
        <section className="globalError">
          <div className="globalError__container">
            <h1 className="globalError__title">ERROR</h1>

            <p className="globalError__description">
              Случилось что-то непредвиденное
            </p>

            <button className="globalError__action" onClick={() => reset()}>
              Перезагрузить
            </button>
          </div>
        </section>
      </body>
    </html>
  );
}
