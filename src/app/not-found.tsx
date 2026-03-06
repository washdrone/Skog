import Link from 'next/link'

export default function NotFound() {
  return (
    <section className="flex min-h-[60vh] flex-col items-center justify-center px-5 pt-20 text-center sm:pt-24">
      <h1 className="text-5xl font-bold text-slate-900 sm:text-6xl">404</h1>
      <p className="mt-4 text-base text-slate-600 sm:text-lg">Sidan kunde inte hittas.</p>
      <Link
        href="/"
        className="mt-8 btn-primary text-sm sm:text-base"
      >
        Tillbaka till startsidan
      </Link>
    </section>
  )
}
