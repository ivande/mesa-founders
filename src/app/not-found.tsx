import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-svh bg-bg-dark text-text-on-dark flex flex-col items-center justify-center px-8">
      <h1 className="font-serif text-4xl font-semibold mb-4">404</h1>
      <p className="text-text-on-dark/60 mb-8">Page not found</p>
      <Link
        href="/"
        className="text-accent hover:text-accent-light transition-colors"
      >
        Back to Sobremesa
      </Link>
    </div>
  );
}
