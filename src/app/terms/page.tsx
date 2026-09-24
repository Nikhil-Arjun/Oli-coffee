import Link from "next/link";

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-[#F5EFE3] px-4 py-24 text-[#1E1E1E] sm:px-6">
      <article className="mx-auto max-w-2xl">
        <Link href="/" className="text-xs font-semibold uppercase tracking-widest text-[#A6452F]">Oli Coffee</Link>
        <h1 className="mt-8 font-serif text-4xl font-bold">Terms & Conditions</h1>
        <p className="mt-4 text-sm leading-relaxed text-[#6B6259]">Orders, reservations, and member requests are subject to café availability. Menu items, prices, and seasonal ingredients may change without notice.</p>
        <h2 className="mt-10 font-serif text-2xl font-bold">Questions</h2>
        <p className="mt-3 text-sm leading-relaxed text-[#6B6259]">Please contact the team at hello@olicoffee.in before placing an order if you need help with allergens or accessibility.</p>
      </article>
    </main>
  );
}
