import Link from "next/link";

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-[#F5EFE3] px-4 py-24 text-[#1E1E1E] sm:px-6">
      <article className="mx-auto max-w-2xl">
        <Link href="/" className="text-xs font-semibold uppercase tracking-widest text-[#A6452F]">Oli Coffee</Link>
        <h1 className="mt-8 font-serif text-4xl font-bold">Privacy Policy</h1>
        <p className="mt-4 text-sm leading-relaxed text-[#6B6259]">We only use information you share with Oli Coffee to respond to enquiries, manage member requests, and improve your café experience. We do not sell personal information.</p>
        <h2 className="mt-10 font-serif text-2xl font-bold">Contact</h2>
        <p className="mt-3 text-sm leading-relaxed text-[#6B6259]">For questions about your information, email hello@olicoffee.in.</p>
      </article>
    </main>
  );
}
