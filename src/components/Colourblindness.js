import Header from "./Header";
import { ReactCompareSlider, ReactCompareSliderImage } from "react-compare-slider";
import Carousel from "./Carousel";

import eyeVid from "../photos/oyevideo.mp4"
import xx from "../photos/XX-dame.png"
import xy from "../photos/XY-mann.png"
import juletreFarger from "../photos/juletreFarger.png"
import juletreSvartHvitt from "../photos/juletreSvartHvit.png"
import juletreTopp from "../photos/juletreTopp.png"
import juletreMidten from "../photos/juletreMidten.png"
import juletreBunn from "../photos/juletreBunn.png"
import carousel1 from "../photos/carousel1.png"
import carousel2 from "../photos/carousel2.png"
import carousel3 from "../photos/carousel3.png"
import carousel4 from "../photos/carousel4.png"


export default function Colourblindness(){

  const innledning = "Farger er ikke likt for alle mennesker, og en stor andel oppfatter verdens farger på en helt annen måte enn resten. Så om mannen din ikke gleder seg til å pynte med julens farger i hjemmet, kan det være en grunn til det!"

  const lommelegenUrl = "https://www.lommelegen.no/%C3%B8ye/artikkel/fargeblind-eller-fargesvak/69031279"
  const forskningNoUrl = "https://forskning.no/dna-helse-sykdommer/ser-verden-helt-uten-farger/527934"
  const illvitUrl = "https://illvit.no/mennesket/kroppen/en-verden-uten-farger"

  const images = [carousel1, carousel2, carousel3, carousel4]

  return(
    <section id="colourblindness-body">
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
        <video width="320" height="240" autoPlay="true" loop>
          <source src={eyeVid} type="video/mp4" />
        Your browser does not support the video tag.
        </video> 
        <p>
        Fargesvakhet handler om at man ser de fleste fargetoner, men at å skille mellom noen fargetoner kan være problematisk. Mens det 
        å være fargeblind forteller en artikkel på <a href={forskningNoUrl} target="_blank" rel="noreferrer">forskning.no</a> at er en 
        medfødt sykdom som gjør at personer kun vil se svart og hvitt, og det er kun et fåtall som har dette.
        </p>
      </section>
      </section>
      <section className="slider-section">
        <h3>Hvordan fullt fargeblinde ser juletreet i forhold til et vanlig fargesyn</h3>
        {/* Har installert React Compare Slider https://www.npmjs.com/package/react-compare-slider */}
        <ReactCompareSlider 
        itemOne={<ReactCompareSliderImage src={juletreFarger} srcSet="" alt="julepynt"/>}
        itemTwo={<ReactCompareSliderImage src={juletreSvartHvitt} srcSet="" alt="julepynt"/>}
        style={{ width: '100%', height: '100%' }}
        />
      </section>
      <section className="paragraph xx-xy">
        <h3>Flere fargesvake menn</h3>
        <p>
        Ifølge en artikkel fra <a href={illvitUrl} target="_blank" rel="noreferrer">Illustrert Vitenskap</a> er hele 8% av alle menn og under 1% av 
        kvinner av Norges befolkning er fargesvake på et vis. Årsaken til at det er flere menn enn kvinner som sliter med å skille fargertoner fra 
        hverandre skyldes genetikk.
        </p>
        <p>
        Illustrert Vitenskap forklarer videre at kvinner er født med to X-kromosomer, noe som gjør at det trengs feil på begge for å bli fargesvake 
        eller fargeblinde. Menn derimot har kun ett X-kromosom og det er kun det ene som må ha feil for at de skal bli rammet. 
        Fargesvakhet er dermed enklere arvelig for menn og kan kanskje være årsaken til at flere menn er uentusiastiske når det kommer til julefeiringen.
        </p>
        <div className="row-div">
          <img id="xx-woman" src={xx} alt="XX dame"/>
          <img id="xy-man" src={xy} alt="XY mann"/>
        </div>
      </section>
      <div className="txt-img">
      <section className="paragraph">
        <h3>Julens farger</h3>
        <p>
        For fargesvake er rød og grønn de vanligste fargene som er vanskelig å skille mellom, men det er også flere som sliter med 
        blå- og gultoner, forteller <a href={lommelegenUrl} target="_blank" rel="noreferrer">lommelegen</a>. For de med 
        rød-grønn fargesvakhet kan julen se litt annerledes ut enn for de fleste. Så om du opplever at mannen din ikke er 
        så begeistret for juletre og rød julepynt, så er det en sannsynlighet for at de kanskje er fargesvake.
        </p>
        </section>
        <img className="bg-img" src={juletreTopp} alt="Juletre"/>
        </div>
        <Carousel images={images}/>
        <div className="txt-img">
        <section className="paragraph">
        <p>
        De som er rød-grønn fargesvak opplever at røde og grønne fargene går ofte i ett, ettersom de sliter med å skille fargetonene 
        fra hverandre. Dette varierer også i grad slik at noen ser et juletre med rød julepynt som helt ensfarget, ofte som gult hvor 
        fargene går i ett, mens andre kan klare å skille tonene fra hverandre. 
        </p>
        <p>
        Ifølge <a href={lommelegenUrl} target="_blank" rel="noreferrer">lommelegen</a> kan mange av de rød-grønn fargesvake skille 
        mellom rødt og grønt. Det er ofte vanskelig å skille røde fra oransje og grønne toner, mens  grønne kan ofte være vanskelig 
        å skille fra blå toner. De kan klare å vite hva som er rødt og grønt, men det er nok ikke det samme som det de fleste tenker som normalt rødt.
        </p>
      </section>
      <img className="bg-img" src={juletreMidten} alt="Juletre"/>
      </div>
      <div className="txt-img">
      <section className="paragraph">
        <p>
          Rundt oss er det mange mennesker som er fargesvake, både kvinner og menn. Når julen nærmer seg og kanskje de rundt deg 
          ikke er like begeistret som deg, så er det greit å ha i bakhodet at det kan hende de rett og slett er fargesvake. Hvis 
          bildene i denne artikkelen så ut som vi beskrev dem, ta denne testen for å sjekke om du er fargesvak:
        </p>
        <p><a href="https://no.colorlitelens.com/fargesynstest.html" target="_blank" rel="noreferrer">Fargesynstest</a></p>
      </section>
      <img className="bg-img" src={juletreBunn} alt="Juletre"/>
      </div>
    </section>
    </section>
  )
}