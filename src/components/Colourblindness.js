import Header from "./Header";
import xx from "../photos/XX-dame.png"
import xy from "../photos/XY-mann.png"
import juletreFarge from "../photos/juletreFarge.jpg"
import juletre from "../photos/juletre.jpg"
import { ReactCompareSlider, ReactCompareSliderImage } from "react-compare-slider";


export default function Colourblindness(){

  const innledning = "Farger er ikke likt for alle mennesker, og en stor andel oppfatter verdens farger på en helt annen måte enn resten. Så om mannen din ikke gleder seg til å pynte med julens farger i hjemmet, kan det være en grunn til det!"

  const lommelegenUrl = "https://www.lommelegen.no/%C3%B8ye/artikkel/fargeblind-eller-fargesvak/69031279"
  const forskningNoUrl = "https://forskning.no/dna-helse-sykdommer/ser-verden-helt-uten-farger/527934"
  const illvitUrl = "https://illvit.no/mennesket/kroppen/en-verden-uten-farger"

  return(
    <body id="colourblindness-body">
    <Header innledning={innledning} tittel="En fargesvak jul" bgImg="colourblindness-header"/>
    <section id="main-section">
      <section className="window-section">
      <section className="paragraph">
        <h3>Fargeblindhet</h3>
        <p>
        For de fleste brukes begrepet fargeblindhet ofte i en generell forklaring om at en person ikke kan se farger. 
        Men når man snakker om fargeblindhet henger ofte ordet fargesvak tett på. Felles for disse er at det er 
        betegnelser for å oppfatte farger på en annen måte enn det som er vanlig, 
        forklarer <a href={lommelegenUrl} target="_blank" rel="noreferrer">lommelegen</a>.
        </p>
        <p>
        Fargesvakhet handler om at man ser de fleste fargetoner, men at å skille mellom noen fargetoner kan være problematisk. Mens det 
        å være fargeblind forteller en artikkel på <a href={forskningNoUrl} target="_blank" rel="noreferrer">forskning.no</a> at er en 
        medfødt sykdom som gjør at personer kun vil se svart og hvitt, og det er kun et fåtall som har dette.
        </p>
      </section>
      </section>
      <section className="paragraph xx-xy">
        <h3>Flere fargesvake menn</h3>
        <p>
        Ifølge en artikkel fra <a href={illvitUrl} target="_blank" rel="noreferrer">illustrert vitenskap</a> er hele 8% av alle menn og under 1% av 
        kvinner av Norges befolkning er fargesvake på et vis. Årsaken til at det er flere menn enn kvinner som sliter med å skille fargertoner fra 
        hverandre skyldes genetikk.
        </p>
        <p>
        Illustrert Vitenskap forklarer videre at kvinner er født med to X-kromosomer, noe som gjør at det trengs feil på begge for å bli fargesvake 
        eller fargeblinde. Menn derimot har kun ett X-kromosom og det er kun det ene som må ha feil for at de skal bli rammet. 
        Fargesvakhet er dermed enklere arvelig for menn og kan kanskje være årsaken til at flere menn er uentusiastiske når det kommer til julefeiringen
        </p>
        <img id="xx-woman" src={xx} alt="XX dame"/>
        <img id="xy-man" src={xy} alt="XY mann"/>
      </section>
      <section className="slider-section">
        <h3>Se hvordan en med rød/grønn fargeblindhet ser fargene på juletreet</h3>
        {/* Har installert React Compare Slider https://www.npmjs.com/package/react-compare-slider */}
        <ReactCompareSlider 
        itemOne={<ReactCompareSliderImage src={juletre} srcSet="" alt="julepynt"/>}
        itemTwo={<ReactCompareSliderImage src={juletreFarge} srcSet="" alt="julepynt"/>}
        style={{ width: '100%', height: '100%' }}
        />
      </section>
      <section className="paragraph">
        <h3>Julens farger</h3>
        <p>
        For fargesvake er rød og grønn de vanligste fargene som er vanskelig å skille mellom, men det er også flere som sliter med 
        blå- og grønntoner, fortelles det av <a href={lommelegenUrl} target="_blank" rel="noreferrer">lommelegen</a>. 
        </p>
        <p>
        For de med rød-grønn fargesvakhet kan julen se litt annerledes ut enn for de fleste. Så om du opplever at mannen din ikke 
        er så begeistret for juletre og rød julepynt, så er det en sannsynlighet for at de kanskje er fargesvake. 
        </p>
        <p>...</p>
      </section>
      <section className="paragraph">
        <h3>Avslutning</h3>
        <p>...</p>
      </section>
    </section>
    </body>
  )
}