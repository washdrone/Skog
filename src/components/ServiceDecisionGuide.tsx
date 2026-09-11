import Link from 'next/link'

const guidance: Record<string, { benefit: string; limit: string; question: string }> = {
  skogsinventering: { benefit: 'Aktuella kartor för att prioritera inventering, planering och uppföljning.', limit: 'En kartbild över hela området innebär inte att alla träd kan mätas. Volym och stamantal är uppskattningar; fältunderlag och modellval påverkar kvaliteten.', question: 'Vilka bestånd och variabler behöver du bedöma, och finns aktuella fältprovytor?' },
  tradhojdsmatning: { benefit: 'Höjddata för att jämföra bestånd och stödja fortsatt skoglig analys.', limit: 'Trädhöjd beräknas mot en markmodell. Fotogrammetri kan inte avbilda mark som döljs av krontaket. Behovet av LiDAR eller befintlig terrängmodell behöver bedömas för området.', question: 'Behöver du höjder per bestånd eller synlig trädkrona, och vilket markunderlag finns?' },
  plantrakning: { benefit: 'Överblick över synliga plantor och luckor inför uppföljning av föryngring.', limit: 'Små plantor och plantor som döljs av annan vegetation kan missas. Fältkontroll behövs för att bedöma resultatet och eventuellt behov av hjälpplantering.', question: 'När planterades området, vilka trädslag gäller det och hur ser markvegetationen ut?' },
  skogsskadeinventering: { benefit: 'Avgränsa områden med synliga skador och prioritera fortsatt kontroll.', limit: 'Tidiga barkborreangrepp kan sakna synliga kronförändringar. Skadeorsak och åtgärdsbehov behöver bedömas i fält. Försäkringsbolagets eller myndighetens dokumentationskrav gäller.', question: 'Vilken skada misstänks, när inträffade den och vem ska använda underlaget?' },
  bestandsinventering: { benefit: 'Kartunderlag för beståndsavgränsning och jämförelse av skogens struktur.', limit: 'Beståndsgränser är skogliga avgränsningar och ersätter inte juridiskt fastställda fastighetsgränser. Skogliga variabler behöver tolkas med hänsyn till metod och fältunderlag.', question: 'Finns befintliga beståndsgränser och vilka uppgifter behöver uppdateras?' },
  'skogsbruksplan-underlag': { benefit: 'Kartor och höjddata som planläggaren kan använda i arbetet med skogsbruksplanen.', limit: 'Leveransen är underlag, inte en färdig skogsbruksplan. Planläggaren ansvarar för den samlade bedömningen. Importformat och attribut behöver stämmas av med mottagaren.', question: 'Vem är planläggare, vilket system används och vilka kartlager behövs?' },
  arsavtal: { benefit: 'Återkommande dokumentation för att följa förändringar över tid.', limit: 'Flygtillfällen, leveranser, pris, avtalstid och uppsägning behöver framgå av avtalet. För jämförelser krävs tillräckligt likartad metod och dokumenterade mätförhållanden.', question: 'Vilka förändringar vill du följa och under vilken period?' },
}

export default function ServiceDecisionGuide({ serviceId }: { serviceId: string }) {
  const item = guidance[serviceId]
  if (!item) return null
  return <section aria-label="Inför beställning" className="mb-10 rounded-xl border border-forest-200 bg-forest-50 p-6">
    <h2>Vad hjälper underlaget dig med?</h2><p>{item.benefit}</p>
    <h3>Förutsättningar och begränsningar</h3><p>{item.limit}</p>
    <h3>Det här behöver vi veta</h3><p>{item.question}</p>
    <p>Ange område, ungefärlig areal och önskad tidsram. Omfattning, leveranser och tidsplan stäms av i offerten. Pris påverkas bland annat av areal, resor, datainsamling och analysens omfattning.</p>
    <Link href={`/offert?tjanst=${serviceId}`}>Begär offert för ditt område</Link>{' · '}<Link href="/kunskap/skogsinventering-kostnad">Läs om vad som påverkar priset</Link>
  </section>
}
