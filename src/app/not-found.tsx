import Link from "next/link";

import style from "./not-found.module.scss";

export default function NotFound() {
  return (
    <div className={style.page}>
      <div>
        <p>Ups...</p>

        <p>page not found</p>
      </div>

      <Link href="/">Go home</Link>
    </div>
  );
}
