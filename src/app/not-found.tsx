import Link from 'next/link'

export default function NotFound() {
  return (
    <section className="flex min-h-[60vh] flex-col items-center justify-center px-5 text-center">
      <h1 className="text-6xl font-bold text-slate-900">404</h1>
      <p className="mt-4 text-lg text-slate-600">Sidan kunde inte hittas.</p>
      <Link
        href="/"
        className="mt-8 btn-primary"
      >
        Tillbaka till startsidan
      </Link>
    </section>
  )
}
