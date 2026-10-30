import Link from "next/link";

export default function NotFound() {
  return (
    <div className="mx-auto max-w-3xl px-5 py-20">
      <h1 className="font-serif text-3xl">Page not found</h1>
      <p className="mt-2 text-muted">That page does not exist or has been removed.</p>
      <Link href="/" className="mt-4 inline-block text-brand underline">
        Back to the home page
      </Link>
    </div>
  );
}
