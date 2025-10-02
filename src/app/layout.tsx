import type { ReactNode } from "react";

import "style/index.scss";
import { Notifications, SwitchThemeButton } from "../components/widgets";

import { SetTheme } from "./_components";

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <title>Next App</title>

        <meta content="width=device-width, initial-scale=1" name="viewport" />

        <meta name="description" content="Description of Next App" />

        <link rel="icon" href="/next.svg" />
      </head>

      <body>
        <div>{children}</div>

        <Notifications />

        <SetTheme />

        <SwitchThemeButton />
      </body>
    </html>
  );
}
