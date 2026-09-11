import { SERVICES } from './services'

export interface ServiceReference {
  serviceId: string
  verified: boolean
  title: string
  need: string
  work: string
  delivery: string
  limitation: string
}

// MÅSTE VERIFIERAS: Ett verkligt uppdrag per tjänst. Inga kunduppgifter,
// fastighetsbeteckningar, koordinater eller identifierbara bilder ska visas.
// Tomma utkast renderas inte. Anonymisering får inte skapa fiktiva referenser.
export const serviceReferences: ServiceReference[] = SERVICES.map(service => ({
  serviceId: service.id, verified: false, title: '', need: '', work: '', delivery: '', limitation: '',
}))
