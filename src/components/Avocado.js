import Header from "./Header";
import pAvoSak1 from "../photos/avosak_positiv/pSak1.png"
import pAvoSak2 from "../photos/avosak_positiv/pSak2.png"
import pAvoSak3 from "../photos/avosak_positiv/pSak3.png"
import pAvoSak4 from "../photos/avosak_positiv/pSak4.png"
import nAvoSak1 from "../photos/avosak_negativ/nSak1.png"
import nAvoSak2 from "../photos/avosak_negativ/nSak2.png"
import nAvoSak3 from "../photos/avosak_negativ/nSak3.png"
import nAvoSak4 from "../photos/avosak_negativ/nSak4.png"
import avo from "../photos/avo.jpg"
import avoTre from "../photos/avokadotre.jpg"
import taco from "../photos/taco.jpg"
import { useEffect, useRef, useState } from "react";
import FadeInSection from "./FadeInSection";


export default function Avocado(){

  //const [opacityChange, setOpacityChange] = useState()

  const innledning = "De siste tiårene har avokadoens popularitet skutt i været. Populariteten har ført til et hopp i pris på frukten, og for avokadobøndene gir dette en stor gevinst. Bak kulissene til avokadofeberen skjuler det seg en kriminell fortelling som kaster skygger over en bransje som er alt annet enn grønn."

  const avoSaker = [pAvoSak1, pAvoSak2, pAvoSak3, pAvoSak4, nAvoSak1, nAvoSak2, nAvoSak3, nAvoSak4]

  // const avoSak1 = useRef()
  // const avoSak2 = useRef()
  // const avoSak3 = useRef()
  // const avoSak4 = useRef()
  // const avoSak5 = useRef()
  // const avoSak6 = useRef()
  // const avoSak7 = useRef()
  // const avoSak8 = useRef()

  // const refs = [avoSak1, avoSak2, avoSak3, avoSak4, avoSak5, avoSak6, avoSak7, avoSak8]

  const klimamyterUrl = "https://klimamyter.no/myter/bedre-for-klimaet-med-kortreist-ku-enn-langreist-avokado"
  const aftenpostenUrl = "https://www.aftenposteninnsikt.no/klimamilj/tr-bbel-det-gr-nne-gullet"
  const nprUrl = "https://www.npr.org/2022/02/19/1081948884/mexican-drug-cartels-are-getting-into-the-avocado-and-lime-business"
  const vgUrl = "https://www.vg.no/spesial/c/stories/xPv8AR"
  const fruktUrl = "https://frukt.no/globalassets/materiell/frukt--og-grontstatistikken/frukt--og-grontstatistikk-2022-3.pdf"
  const totOversiktUrl = "https://frukt.no/globalassets/materiell/frukt--og-grontstatistikken/totaloversikten-for-2000-2010.pdf"
  const ntbUrl = "https://kommunikasjon.ntb.no/pressemelding/17905039/taco-bestar-som-kosemat-i-helgene?publisherId=89251"

  return(
    <body id="avocado-body">
      <Header bgImg="avo-header" innledning={innledning} tittel="Tacokveldens grønne gull" undertittel="Det grønne gullet"/>
      <section id="main-section">
        <div id="timeline"></div>
        <div className="timeline-stop"></div>
        {/* <h2 className="sub-title">På kjøkkenet</h2> */}
        <div className="row-div"> 
          <section className={`paragraph`}>
            <h3>Tacokveld</h3>
            <p>
              En tacokveld i uken er veldig normalt for de fleste nordmenn, og tilbehør er spesielt viktig. 
              Ifølge <a href={ntbUrl} target="_blank" rel="noreferrer">Opplysningskontoret</a> sies det at halvparten 
              av alle nordmenn spiser guacamole til tacoen og av disse lager 8 av 10 den selv med avokadoer fra butikkene.
            </p>
          </section>
          <img className="story-img" src={taco} alt="taco"/>
        </div>
        <div className="timeline-stop"></div>
        <div className="row-div"> 
          <img className="story-img" src={taco} alt="taco"/>
          <section className="paragraph">
            <h3>Butikken</h3>
            <p>
              Populariteten til avokadoen har økt betydelig de siste årene og 
              ifølge <a href={totOversiktUrl} target="_blank" rel="noreferrer">totaloversikten</a> på frukt og grønnsaker 
              fra 2010 solgte butikkene i Norge avokadoer for en verdi av 191 825 000 kr. 
              Sammenlignet med <a href={fruktUrl} target="_blank" rel="noreferrer">totaloversikten fra 2022</a> har denne 
              omsetningen økt til 945 017 000 kr. Det er en økning på hele 393% og det viser tydelig at 
              nordmenn elsker den grønne næringsrike frukten.
              </p>
          </section>
        </div>
        <div className="timeline-stop"></div>
        <div className="row-div"> 
          <section className="paragraph">
            <h3>Import til butikken</h3>
            <p>
            Når etterspørselen etter avokado øker, må butikkene også øke beholdningen slik at de har nok tilgjengelig. 
            I 2022 ble det importert 14 880 tonn til Norge ifølge <a href={fruktUrl} target="_blank" rel="noreferrer">frukt- og grøntstatistikk</a>. 
            Ettersom Norge ikke produserer egne avokadoer må alt importeres fra andre land.
            </p>
          </section>
          <img className="story-img" src={avo} alt="bilde1"/>
        </div>
        <section id="sticky-images">
          {avoSaker.map((sak, i) => (
            <FadeInSection key={`fade-section-${i}`}>
            <img src={sak} alt={i < 4 ? "positiv avokadosak" : "negativ avokadosak"}/>
            </FadeInSection>
          ))}
        </section>
        <div className="timeline-stop"></div>
        <div className="row-div"> 
          <img className="story-img" src={avo} alt="bilde1"/>
          <section className="paragraph">
            <h3>Produksjonen</h3>
            <p>
            Mexico står for en stor andel av produksjonen av avokado i verden. Det er delstaten Michoacán som står for 80% av 
            avokadoproduksjonen i Mexico og for hele 40% av produksjonen i verden 
            ifølge <a href={aftenpostenUrl} target="_blank" rel="noreferrer">Aftenposten innsikt</a> og <a href={vgUrl} target="_blank" rel="noreferrer">VG</a>. 
            </p>
            <p>
            Da etterspørselen av avokado økte, dukket det opp nye produksjonsgårder og tusenvis av nye jobber ble skapt. Mange 
            av bøndene som jobber på disse gårdene blir hardt utsatt av kriminaliteten rundt denne produksjonen. 
            </p>
          </section>
        </div>
        <div className="timeline-stop"></div>
        <div className="row-div"> 
          <section className="paragraph">
            <h3>Kriminaliteten</h3>
            <p>
            Den enorme interessen for avokado har skapt en svært lønnsom virksomhet i Mexico, men den har også bidratt til å gjøre 
            det “grønne gullet” til et mål for narkokarteller som ønsker å kontrollere handelen. I mange av avokadoproduksjonene i 
            Michoacán har flere slike karteller tatt over, og mange av avokado-bøndene sliter med tyveri fra kriminelle gjenger. 
            En artikkel fra <a href={nprUrl} target="_blank" rel="noreferrer">NPR</a> skriver at kartellene truer med utpressingsgebyrer og om bøndene ikke vil eller kan betale, blir 
            de ofte kidnappet, torturert og ofte drept.
            </p>
          </section>
          <img className="story-img" src={avo} alt="bilde1"/>
        </div>
        <div className="timeline-stop"></div>
        <div className="row-div"> 
          <section className="paragraph">
            <h3>Plukker avokado</h3>
            <p>
            Det er ikke bare stor kriminalitet rundt hvem som styrer produksjonen, men det påvirker også miljøet negativt. 
            Avokadoplantene krever mye vann og for å produsere en kilo behøves det 1981 liter med vann, 
            ifølge <a href={klimamyterUrl} target="_blank" rel="noreferrer">Klimamyter</a>. Mye skog blir også ulovlig fjernet 
            for å få plass til de mange plantasjene. Bruken av sprøytemidler påvirker ikke bare miljøet, men også helsen til de som 
            jobber på plantasjene. En artikkel i <a href={aftenpostenUrl} target="_blank" rel="noreferrer">Aftenposten innsikt</a> forklarer at midlene sprer seg i luften og flere opplever 
            pusteproblemer og allergiske reaksjoner. 
            </p>
          </section>
          <img className="story-img" src={avoTre} alt="avokadotre"/>
        </div>
        <div className="timeline-stop"></div>
        <div className="row-div"> 
          <img className="story-img" src={avo} alt="bilde1"/>
          <section className="paragraph">
            <p>
             Avokadoen er klart en populær frukt i Norge og resten av verden. At den omtales som “det grønne gullet” viser at 
             avokadoen er blitt en svært ettertraktet og verdifull frukt, og kriminelle gjenger tyr til drastiske tiltak for 
             å få tak i lønnsomheten. Her i Norge opplever ikke vi noe av dette direkte, men ved å spise avocado er vi indirekte 
             påvirkere til at dette foregår. 
            </p>
            <p>

            </p>
          </section>
        </div>
      </section>
    </body>
  )
}