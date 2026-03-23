"use client";

export default function Error() {
  return (
    <div className="min-h-svh bg-bg-dark text-text-on-dark flex flex-col items-center justify-center px-8">
      <h1 className="font-serif text-4xl font-semibold mb-4">Error</h1>
      <p className="text-text-on-dark/60 mb-8">Something went wrong</p>
      <a
        href="/"
        className="text-accent hover:text-accent-light transition-colors"
      >
        Back to Sobremesa
      </a>
    </div>
  );
}
