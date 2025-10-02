import Link from "next/link";

export default function NotFound() {
  return (
    <div className="notFound">
      <div>
        <p>Ups...</p>

        <p>page not found</p>
      </div>

      <Link href="/">Go home</Link>
    </div>
  );
}
