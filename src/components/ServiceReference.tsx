import { serviceReferences } from '@/lib/service-references'

export default function ServiceReference({ serviceId }: { serviceId: string }) {
  const reference = serviceReferences.find(item => item.serviceId === serviceId && item.verified)
  if (!reference || !reference.title || !reference.need || !reference.work || !reference.delivery) return null
  return <section aria-label="Anonymiserad referens" className="mt-10 border-t border-slate-200 pt-8">
    <h2>{reference.title}</h2>
    <p className="text-sm text-slate-600">Anonymiserat uppdrag. Kund och fastighet anges inte.</p>
    <h3>Kundens behov</h3><p>{reference.need}</p>
    <h3>Genomförande</h3><p>{reference.work}</p>
    <h3>Leverans</h3><p>{reference.delivery}</p>
    {reference.limitation && <><h3>Förutsättningar</h3><p>{reference.limitation}</p></>}
  </section>
}
