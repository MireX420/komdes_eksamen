import Header from "./Header";
import FadeInSection from "./FadeInSection";
import ArticleTitle from "./ArticleTitle";

import mexicoKart from "../photos/mexico-kart.png"
import avoStore2pk from "../photos/avoStore2pk.png"
import avoSign from "../photos/avokado-skilt.png"
import avoStore from "../photos/avoStore.png"
import avoTre from "../photos/avokadotre.jpg"
import taco from "../photos/taco.jpg"

export default function Avocado(){

  const innledning = "De siste tiårene har avokadoens popularitet skutt i været. Populariteten har ført til et hopp i pris på frukten, og for avokadobøndene gir dette en stor gevinst. Bak kulissene til avokadofeberen skjuler det seg en kriminell fortelling som kaster skygger over en bransje som er alt annet enn grønn."

  const klimamyterUrl = "https://klimamyter.no/myter/bedre-for-klimaet-med-kortreist-ku-enn-langreist-avokado"
  const aftenpostenUrl = "https://www.aftenposteninnsikt.no/klimamilj/tr-bbel-det-gr-nne-gullet"
  const nprUrl = "https://www.npr.org/2022/02/19/1081948884/mexican-drug-cartels-are-getting-into-the-avocado-and-lime-business"
  const vgUrl = "https://www.vg.no/spesial/c/stories/xPv8AR"
  const fruktUrl = "https://frukt.no/globalassets/materiell/frukt--og-grontstatistikken/frukt--og-grontstatistikk-2022-3.pdf"
  const totOversiktUrl = "https://frukt.no/globalassets/materiell/frukt--og-grontstatistikken/totaloversikten-for-2000-2010.pdf"
  const ntbUrl = "https://kommunikasjon.ntb.no/pressemelding/17905039/taco-bestar-som-kosemat-i-helgene?publisherId=89251"

  return(
    <section id="avocado-body">
      <Header bgImg="avo-header" innledning={innledning} tittel="Den mørke baksiden til tacokveldens grønne gull" undertittel="Det grønne gullet"/>
      <section id="main-section">
        <div id="timeline"></div>
        <div className="timeline-stop">Fredag 18:30</div>
        <div className="row-div reverse"> 
          <section className={`paragraph`}>
            <h3>Tacokveld</h3>
            <p>
              En tacokveld i uken er veldig normalt for mange nordmenn, og tilbehør er spesielt viktig. 
              Ifølge <a href={ntbUrl} target="_blank" rel="noreferrer">Opplysningskontoret</a> sies det at halvparten 
              av alle nordmenn spiser guacamole til tacoen og av disse lager 8 av 10 den selv med avokadoer fra butikkene.
            </p>
          </section>
          <FadeInSection>
          <img className="story-img" src={taco} alt="taco"/>
          </FadeInSection>
        </div>
        <div className="timeline-stop">Fredag 16:10</div>
        <div className="row-div"> 
          <FadeInSection>
          <img className="story-img" src={avoStore2pk} alt="taco"/>
          </FadeInSection>
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
        <div className="timeline-stop">Fredag 07:20</div>
        <div className="row-div reverse"> 
          <section className="paragraph">
            <h3>Import til butikken</h3>
            <p>
            Når etterspørselen etter avokado øker, må butikkene også øke beholdningen slik at de har nok tilgjengelig. 
            I 2022 ble det importert 14 880 tonn til Norge ifølge <a href={fruktUrl} target="_blank" rel="noreferrer">frukt- og grøntstatistikk</a>. 
            Ettersom Norge ikke produserer egne avokadoer må alt importeres fra andre land.
            </p>
          </section>
          <FadeInSection>
          <img className="story-img" src={avoStore} alt="bilde1"/>
          </FadeInSection>
        </div>
        <section id="sticky-images">
            <ArticleTitle description="Leger: - Derfor skal du spise mer avokado" title="Superfrukten du bør spise hver dag" intro="Glad i guacamole? Fortsett med det! Avokadoen er nærmest for en superfrukt å regne, viser ny forskning." articleClass="light"/>
            <ArticleTitle title="Grønn, feit og sunn" intro="Hva er poenget med avokado? Jeg tror jeg kan ha funnet svaret." articleClass="light"/>
            <ArticleTitle title="Avokado med nytt skall: Dobbel holdbarhet" intro="Denne uka lanseres avokadoer med mye lenger holdbarhet, takket være et nytt belegg" articleClass="light"/>
            <ArticleTitle title="Avokado er verdens hotteste grønnsak. Slik lager du viestads avokadofavoritter" intro="- Verdens beste motargument til dem som sier at de ikke har tid til å lage skikkelig mat." articleClass="light"/>
            <ArticleTitle title="Avokado-prisene går til værs" intro="Forbered deg på dyrere guacamole til fredags-tacoen." articleClass="dark"/>
            <ArticleTitle description="Avokadoproduksjonen i Chile skader miljøet" title="Avokadoen fjernes fra danske butikker etter avsløringer: - Måtte ta affære" intro="- Positivt at forburkerne gjør valg med tanke på miljøeffekten av produktene de kjøper, sier norsk forsker." articleClass="dark"/>
            <ArticleTitle title="Kokk fortviler: - Gjør meg kvalm" intro="Avokadoprodusenter i Mexico utsettes for utpressing og vold. Skog hogges ned ulovlig for å dyrke frukten, og miljøet tar stor skade. Nå trues næringen av konkurranse fra Sør-Amerika, miljøkampanjer og til og med boikott." articleClass="dark"/>
            <ArticleTitle title="BLODIG AVOKADOKRIG" intro="I Mexico har narko-kartellene overtatt mye av avokado-produksjonen. Den økte, globale etterspørselen etter superfooden, gjør den verdt sin vekt i gull." articleClass="dark"/>
        </section>
        <div className="timeline-stop"></div>
        <div className="row-div"> 
          <FadeInSection>
          <img className="story-img" src={mexicoKart} alt="bilde1"/>
          </FadeInSection>
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
        <div className="row-div reverse"> 
          <section className="paragraph">
            <h3>Kriminaliteten</h3>
            <p>
            Den enorme interessen for avokado har skapt en svært lønnsom virksomhet i Mexico, men den har også bidratt til å gjøre 
            det “grønne gullet” til et mål for narkokarteller som ønsker å kontrollere handelen. 
            </p>
            <p>
            I mange av avokadoproduksjonene i 
            Michoacán har flere slike karteller tatt over, og mange av avokado-bøndene sliter med tyveri fra kriminelle gjenger. 
            En artikkel fra <a href={nprUrl} target="_blank" rel="noreferrer">NPR</a> skriver at kartellene truer med utpressingsgebyrer og om bøndene ikke vil eller kan betale, blir 
            de ofte kidnappet, torturert og ofte drept.
            </p>
          </section>
          <FadeInSection>
          <img className="story-img" src={avoSign} alt="bilde1"/>
          </FadeInSection>
        </div>
        <div className="timeline-stop"></div>
        <div className="row-div"> 
          <FadeInSection>
          <img className="story-img" src={avoTre} alt="avokadotre"/>
          </FadeInSection>
          <section className="paragraph">
            <h3>Plukker avokado</h3>
            <p>
            Det er ikke bare stor kriminalitet rundt hvem som styrer produksjonen, men det påvirker også miljøet negativt. 
            Avokadoplantene krever mye vann og for å produsere en kilo behøves det 1981 liter med vann, 
            ifølge <a href={klimamyterUrl} target="_blank" rel="noreferrer">Klimamyter</a>. 
            </p>
            <p>
            Mye skog blir også ulovlig fjernet 
            for å få plass til de mange plantasjene. Bruken av sprøytemidler påvirker ikke bare miljøet, men også helsen til de som 
            jobber på plantasjene. En artikkel i <a href={aftenpostenUrl} target="_blank" rel="noreferrer">Aftenposten innsikt</a> forklarer at midlene sprer seg i luften og flere opplever 
            pusteproblemer og allergiske reaksjoner. 
            </p>
          </section>
        </div>
      </section>
      <section id="ending">
      <section className="paragraph">
            <p>
             Avokadoen er klart en populær frukt i Norge og resten av verden. At den omtales som “det grønne gullet” viser at 
             avokadoen er blitt en svært ettertraktet og verdifull frukt, og kriminelle gjenger tyr til drastiske tiltak for 
             å få tak i lønnsomheten. Her i Norge opplever ikke vi noe av dette direkte, men ved å spise avocado er vi indirekte 
             påvirkere til at dette foregår. 
            </p>
          </section>
      </section>
    </section>
  )
}