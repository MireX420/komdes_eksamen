import { useRef, useState } from "react";
import Header from "./Header";
import blodtyper from "../photos/blodtyper.png"
import blod1 from "../photos/blod1.png"
import blod2 from "../photos/blod2.png"
import blod3 from "../photos/blod3.png"
import blod4pose from "../photos/blod4-barePose.png"
import blod5 from "../photos/blod5.png"
import blod6 from "../photos/blod6.png"
import blod7 from "../photos/blod7.png"
import blod8 from "../photos/blod8.png"
//import hjul from "../photos/blodbil-hjul.png"
import FadeInSection from "./FadeInSection";
import PositionObserver from "./PositionObserver";
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import "leaflet/dist/leaflet.css";
import L from 'leaflet';
import blodBankSkilt from '../photos/blodbank-skilt.png';
import sykehusSkilt from '../photos/sykehusOstfold-skilt.png';
import blodbanken from '../photos/blodbanken.png';
import sykehuset from '../photos/sykehuset.jpg';
import blodbilVid from '../photos/blodbil-video.mp4';
import blodgivereStats from '../photos/blodgivere-stats.png';
import needle from '../photos/needle.jpg';
import stine from "../photos/stine.png"
import kristine from "../photos/kristine.png"
import kristine2 from "../photos/kristine2.png"
import blooddrop from "../photos/bloddraape.png"

export default function BloodDonation(){

  const startPosition = [59.367368228743324, 10.93603712236354]
  const bbFredrikstad = [59.21224257365084, 10.927095271845227]
  const kalnes = [59.31851027144979, 11.026951121544366]
  const bbHalden = [59.12953866878332, 11.376182270970988]
  const bbSarpsborg = [59.28590659095594, 11.109569724951148]
  const bbMoss = [59.447268550874114, 10.696295197974832]
  const bbAskim = [59.59393828911805, 11.162632736263193]

  const [position, setPosition] = useState(startPosition)

  const [vocabVisibility, setVocabVisibility] = useState("hidden")

    const toggleVisibility = () => {
      vocabVisibility === "hidden" ? setVocabVisibility("visible") : setVocabVisibility("hidden")
    }

  const innledning = "Blod er et helt nødvendig element for alle mennesker og flere trenger påfyll av blod. Dette er det vi har blodgivning for, slik at alle som trenger ekstra blod skal kunne få det. Men vet vi hvor blodet egentlig blir av etter blodgivningen?"


  const rodekorsUrl1 = "https://www.rodekors.no/gi-blod/informasjon/hvem-kan-ikke-gi-blod/"
  const rodekorsUrl2 = "https://www.rodekors.no/gi-blod/informasjon/for-under-og-etter/"
  const sykepleienUrl = "https://sykepleien.no/reportasje/2016/08/draper-av-liv"
  const rodekorsUrl3 = "https://www.rodekors.no/gi-blod/informasjon/om-blod/"
  const rodekorsUrl4 = "https://www.rodekors.no/gi-blod/nyheter/blodgiver-takk-for-livet/"
  const rodekorsUrl5 = "https://www.rodekors.no/gi-blod/informasjon/blodtyper/"
  const unisykehus = "https://www.oslo-universitetssykehus.no/avdelinger/klinikk-for-laboratoriemedisin/avdeling-for-immunologi-og-transfusjonsmedisin/skal-senke-terskelen-for-a-gi-blod"
  const forskningno = "https://www.forskning.no/menneskekroppen/hvorfor-kan-man-ikke-blande-blod/745514"
  const bliblodgiver = "https://www.rodekors.no/gi-blod/bli-blodgiver/"

  const blodIkon = new L.Icon({
    iconUrl: blodBankSkilt,
    iconRetinaUrl: blodBankSkilt,
    popupAnchor:  [-0, -0],
    iconSize: [36,48],     
});

const sykehusIkon = new L.Icon({
  iconUrl: sykehusSkilt,
  iconRetinaUrl: sykehusSkilt,
  popupAnchor:  [-0, -0],
  iconSize: [36,48],     
});

  const mapRef1 = useRef()
  const mapRef2 = useRef()

  let mapFlights = 0

  const flyTo = () => {
    //if (position.every((coord, index) => coord === startPosition[index])){
      if (mapFlights === 0){
        mapFlights++
        console.log("Flying to fredrikstad");
        mapRef1.current.flyTo(bbFredrikstad, 15)
    //} else if (position.every((coord, index) => coord === bbFredrikstad[index])) {
    } else if (mapFlights === 1) {
      console.log("Flying to kalnes");
      mapRef2.current.flyTo(kalnes, 15)
    }
  }

  return(
    <body id="blood-donation-body">
    <Header innledning={innledning} tittel="Hvor blir det av blodet ditt?" bgImg="blood-donation-header"/>
    <button id="vocab-btn" onClick={() => toggleVisibility()}>Begrep</button>
    <aside id="vocab" className={vocabVisibility}>
      <h3>Begreper</h3>
      <button onClick={() => toggleVisibility()}>Lukk</button>
      <ul>
        <li>
        Røde blodceller: Frakter oksygen fra lungene og rundt i kroppen. Disse blir hele tiden dannet i beinmargen
        </li>
        <li>
        Blodplater: Celler som reparerer skader og stopper blødninger i åreveggen
        </li>
        <li>
        Hvite blodceller: Er en del av immunforsvaret vårt og transporterer gjennom blodbanen til steder med infeksjon eller skade
        </li>
        <li>
        Plasma: Er en gul væske som består av 90% vann som blodcellene flyter i. Væsken frakter blant annet næringsstoffer, avfallsstoffer, hormoner og salter.
        </li>
        <li>
        Antigener: stoff som kan aktivere immunsystemet i kroppen.
        </li>
        <li>
        Antistoffer: proteiner som kroppen produserer for å bekjempe infeksjoner i kroppen, som fremmede antigener.
        </li>
      </ul>
    </aside>
    <section id="blood-section">
    <section className="paragraph gap">
        <p>Ifølge <a href={unisykehus} target="_blank" rel="noreferrer">Oslo Universitetssykehus</a> var det 100.000 blodgivere i Norge i 2022. Dette tilsvarer 
        bare rundt 2-3% av Norges befolkning og ifølge <a href={rodekorsUrl4} target="_blank" rel="noreferrer">Røde Kors</a> mangler vi ca 30.000 blodgivere. 
        </p>
        <img id="stats" src={blodgivereStats} alt="Statistikk over antall blodgivere i Norge"/>
        <p>Her er en oversikt over antall påmeldte blodgivere de siste fem årene.</p>
      </section>
      <section className="paragraph gap">
        <p>
        Blodgivningen i Norge foregår på ulike blodbanker, både på sykehusene, men også i egne bygg utenfor. I Østfold er disse 
        blodbankene i Fredrikstad, Sarpsborg, Moss, Indre Østfold og Halden og alle disse sender blod til Sykehuset i Østfold, på Kalnes. 
        </p>
      </section>
      <FadeInSection>
      <section id="map-section">
      <MapContainer id="map" ref={mapRef1} center={position} zoom={10} scrollWheelZoom={false}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker icon={blodIkon} position={bbFredrikstad}> </Marker>
        <Marker icon={blodIkon} position={bbHalden}> </Marker>
        <Marker icon={blodIkon} position={bbSarpsborg}> </Marker>
        <Marker icon={blodIkon} position={bbMoss}> </Marker>
        <Marker icon={blodIkon} position={bbAskim}> </Marker>
        <Marker icon={sykehusIkon} position={kalnes}><Popup>Sykehuset Østfold Kalnes</Popup></Marker>
      </MapContainer>
        <PositionObserver flyTo={flyTo}>
          <article>
            <p>Blodbanken i Fredrikstad</p>
            <img className="map-img" src={blodbanken} alt="Blodbanken i Fredrikstad"/>
            <p className="imgtxt">3D modell laget i Maya</p>
          </article>
        </PositionObserver>
      </section>
      </FadeInSection>
      <section className="paragraph gap">
        <h3>Før blodgivningen</h3>
        <p>
        Før hver blodgivning gjennomføres det en nøye vurdering av hver giver før blodet kan 
        tappes. <a href={rodekorsUrl2} target="_blank" rel="noreferrer">Røde Kors</a> forklarer at dette er for 
        å sjekke at blodet er bra nok for å kunne brukes av andre.
        </p>
      </section>
      <section className="paragraph gap story">
        <div>
          <p>
          “Det var sprøtt å se mørk rød væske i posen og tenke at det kommer fra armen min”, sier Stine som er ny 
          blodgiver hos blodbanken i Fredrikstad.
          </p>
          <img className="small-img shadow" src={stine} alt="Bilde av Stine"></img>
        </div>
        <p>
        “I mai registrerte jeg meg som blodgiver og hørte ikke noe på en stund. Jeg hadde helt ærlig glemt at jeg 
        hadde registrert meg før jeg ble ringt i september og spurt om å komme til blodbanken for å teste blodet 
        mitt. Da jeg kom til blodbanken måtte jeg fylle ut et digitalt skjema med rundt 50 spørsmål, blant annet 
        om jeg var frisk, mellom 18-65 år, ikke gravid, veier over 50 kg og om jeg hadde vært i utlandet de siste 
        månedene, osv. Etter å ha fylt ut skjemaet foregikk et kort intervju med en hyggelig dame. Hun dobbeltsjekket 
        noen punkter på spørreskjemaet og forklarte hva vi skulle gjøre i dag. I dag skulle de ta en prøve av blodet 
        mitt for å teste det og se om jeg kunne bli blodgiver. Det hele gikk raskt og smertefritt, og de tok ca 10 ml 
        blod for testing.”
        </p>
      </section>
      <section className="paragraph gap">
        <p>
        <a href={rodekorsUrl1} target="_blank" rel="noreferrer">Røde Kors</a> skriver at de ulike kravene er satt for at 
        blodgivning ikke skal være til skade for de som mottar blodet eller de som gir blod, og slike situasjoner kan 
        påvirke dette.
        </p>
      </section>
      <section className="paragraph gap story">
        <p>
        “Jeg ble oppringt tre uker senere for innkalling til min første blodgivning. Jeg leste godt gjennom arket jeg hadde 
        fått med meg hjem sist der det står informasjon om alt man trenger å vite før, under og etter blodgivning. Man skal 
        møte opp frisk, mett og opplagt. Om man ikke er i form den dagen så skal man ikke gi blod. Man skal også ta resten 
        av dagen etter blodgivningen med ro og drikke masse vann. Jeg møtte opp på blodbanken og fylte inn det digitale 
        skjemaet igjen, det er visst noe man må gjøre hver gang man skal gi blod. Etter en kort prat om spørreskjemaet 
        med den hyggelige damen, fikk jeg velge meg ut en premie. Det var et utvalg av forskjellige krydder, kjøkkenredskaper
        og diverse andre ting.”
        </p>
      </section>
      <img className="blod-bilde gap" src={blod1} alt="illustrasjon av blodoverføring"/>
      <section className="paragraph">
        <h3>Hvordan foregår blodgivning</h3>
        <p>
        Selve blodgivningen varer rundt 30 minutter, som inkluderer transfusjon og hvile i etterkant. Blodposen, som blodet skal
         tappes inn i, merkes tydelig ut fra legitimasjonen til giveren. Det vil være et stikk i armen og det tappes 450 ml blod 
         som ifølge <a href={rodekorsUrl2} target="_blank" rel="noreferrer">Røde Kors</a> tilsvarer 10-12 prosent av blodet i kroppen.
        </p>
      </section>
      <section className="paragraph gap story">
        <p>
        “Jeg satt meg i blodgivning stolen og fikk velge meg noe godt å drikke. De renset så området på underarmen min der de skulle 
        stikke og strammet et stasebånd rundt overarmen min. Det var fire andre personer som ga blod samtidig som meg, og de så veldig 
        avslappet ut. Jeg fikk beskjed om at det kom et lite stikk. Jeg så vekk og kjente flere stikk. Jeg har visst tynne blodårer og 
        bioingeniøren slet med å få en god blodflyt. Det var sprøtt å se mørk rød væske i posen og tenke at det kommer fra armen min.”
        </p>
        <p>
        “Bioingeniøren sa tusen takk for at jeg ville gi blod og jeg hvilte litt før jeg dro hjem. Jeg fikk også med meg noen brett med 
        jerntabletter jeg kunne ta om jeg ble ekstra slapp. Jeg ser allerede frem til min neste blodgivning om 3-4 måneder når jeg blir 
        innkalt til ny blodgivning.”
        </p>
      </section>
      <section className="paragraph gap">
        <p>
        Som blodgiver kan man gi blod opptil fire ganger i året, og man må føle seg frisk og opplagt den dagen man skal gi blod, 
        skriver <a href={rodekorsUrl2} target="_blank" rel="noreferrer">Røde Kors</a>.
        </p>
      </section>
      <section className="paragraph gap">
      <h3>Sendingen av blodet</h3>
        <div className="row-div">
        <p>
        Kristine Iversen er bioingeniør hos Blodbanken i Fredrikstad, og hun forteller at blodet fraktes til sykehuset i Østfold 
        to ganger om dagen og dette skjer ved bruk av sykehusets egne biler for frakting av blodet. 
        </p>
        <img className="small-img shadow" src={kristine} alt="Bilde av Kristine"></img>
        </div>
        <p>
        Blodbanken sender også blod 
        til Ullevål sykehus en gang i måneden, siden de har et høyere forbruk av blod. Under frakting er blodposene i temperaturregulerte 
        isolerte kasser, for å opprettholde blodets tilstand. Når blodet ankommer sykehuset blir det lest av og sjekket at det har 
        kommet trygt frem. 
        </p>
      </section>
        <img className="blod-bilde" src={blod2} alt="illustrasjon av blodoverføring"/>
      <section className="paragraph">
        <video width="320" height="240" autoPlay="true" loop>
          <source src={blodbilVid} type="video/mp4" />
          {/* <source src="movie.ogg" type="video/ogg" /> */}
        Your browser does not support the video tag.
        </video> 
        <p>3D modell og animasjon laget i Maya</p>
      </section>
      <section id="map-section">
      <MapContainer id="map" ref={mapRef2} center={bbFredrikstad} zoom={15} scrollWheelZoom={false}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker icon={blodIkon} position={bbFredrikstad}> </Marker>
        <Marker icon={blodIkon} position={bbHalden}> </Marker>
        <Marker icon={blodIkon} position={bbSarpsborg}> </Marker>
        <Marker icon={blodIkon} position={bbMoss}> </Marker>
        <Marker icon={blodIkon} position={bbAskim}> </Marker>
        <Marker icon={sykehusIkon} position={kalnes}><Popup>Sykehuset Østfold Kalnes</Popup></Marker>
      </MapContainer>
        <PositionObserver flyTo={flyTo}>
          <article>
            <p>Sykehuset i Kalnes</p>
            <img className="map-img" src={sykehuset} alt="Sykehuset i Kalnes"/>
            <p className="imgtxt">3D modell laget i Maya</p>
          </article>
        </PositionObserver>
      </section>
      <section className="paragraph gap">
        <h3>Virustesting av blodet</h3>
        <p>
        Det første som skjer når blodet ankommer sykehuset er at det vil tas smitteprøver for virus i blodet for å undersøke om det 
        er en risiko for smitteoverføring av infeksjoner. 
        </p>
        <p>
        Iversen forklarer videre at det tar det rundt et døgn på å få svar på disse virustestene og mens de testes ligger blodet 
        i et karantenelager på sykehuset. 
        </p>
      </section>
      <img className="blod-bilde" src={blod3} alt="illustrasjon av blodoverføring"/>
      <section className="paragraph">
        <h3>Hvile</h3>
        <p>
        Dersom virustestene blir godkjente overføres de til et annet lager som inneholder klart blod. Her må blodet hvile i 
        en time før det kan behandles videre.         
        </p>
      </section>
      <div className="img-container pose">
        <img id="blod-pose" className="blod-bilde" src={blod4pose} alt="illustrasjon av blodoverføring"/>
      </div>
      <section className="paragraph">
        <h3>Sentrifugering</h3>
        <p>
        Videre skal blodet bli sentrifugert. Dette foregår ved at blodposen legges oppi en sentrifuge som snurrer og skiller 
        væskene fra hverandre. En artikkel fra <a href={sykepleienUrl} target="_blank" rel="noreferrer">Sykepleien.no</a> forklarer 
        at blodet deles dermed opp slik at røde blodceller er tyngst og legges nederst, så blodplatene også kalt buffy coat i midten 
        og plasmaen øverst. Etter en slik prosess vil dermed ikke blodet kun være rødt, men bestå av tre farger.
        </p>
      </section>
      <img className="blod-bilde" src={blod5} alt="illustrasjon av blodoverføring"/>
      <section className="paragraph gap gap-under">
        <h3>Filtrering av blodet</h3>
        <p>
        Når posen er ferdig sentrifugert legges den inn i en seprareringsmaskin, som filtrerer plasmaen, blodplatene og de røde 
        blodcellene fra hverandre i hver sin pose. 
        </p>
        <p>
        I tillegg til dette må blodplatene og de røde blodcellene filtreres for hvite blodceller, ettersom disse 
        ifølge <a href={rodekorsUrl3} target="_blank" rel="noreferrer">Røde Kors</a> kan bære på virus som kan skade mottakeren av blodet. 
        </p>
      </section>
      <img className="blod-bilde" src={blod6} alt="illustrasjon av blodoverføring"/>
      <section className="paragraph gap">
        <h3>Lagring</h3>
        <p>
        Disse posene kan nå oppbevares på best måte for de ulike væskene. <a href={sykepleienUrl} target="_blank" rel="noreferrer">Sykepleien.no</a> skriver 
        at blodplatene lagres i klimarom som har romtemperatur på 22-24 grader, de røde blodcellene skal ha det kjølig og legges 
        dermed inn i kjøleskap på 4 grader, mens plasmaen må fryses fort.
        </p>
      </section>
      <section className="paragraph gap">
        <h3>En pose blod kan redde tre liv</h3>
        <div className="row">
        <p>
        Iversen forteller at plasmaen sendes videre til Østerrike for videre sortering, mens blodplater og de røde blodcellene er det 
        som gis til personer som trenger det på sykehuset. Pasienter som har mistet mye blod får røde blodceller, mens blodplatene gis 
        til de som trenger flere siden de har ødelagte eller for lite, sier <a href={rodekorsUrl3} target="_blank" rel="noreferrer">Røde Kors</a>. 
        Den ene posen med blod som blodgiveren gir kan dermed gå til å redde tre forskjellige liv.
        </p>
        <img className="medium-img" src={kristine2} alt="Bilde av Kritine"></img>
        </div>      
        </section>
      <section className="paragraph gap">
        <h3>Riktig blodtype</h3>
        <p>
        For at en pasient skal kunne få blod fra en blodgiver, må det sjekkes nøye at de får blodtypen de har. Hvis det blir gitt feil 
        blod til feil person kan det skape immunreaksjoner i kroppen hos mottakeren og kan i verste fall være livstruende.         
        </p>
        <p>
        <a href={forskningno} target="_blank" rel="noreferrer">Forskning.no</a> forklarer at kroppen har fra tidlig alder dannet antigener på de 
        røde blodcellene i blodet. Disse antigenene er arvelige og de varierer fra person til person. De er med på å bestemme hvilken blodtype 
        man har, noe som vil gjøre at man arver blodtype fra foreldrene. Kroppen danner også antistoffer mot fremmede antigener. Dette gjør at 
        når en person får blod fra en med annen blodtype, vil kroppen produsere antistoffer som angriper antigenene og det kan fort bli farlig for personen.
        </p>
      </section>
      <img className="blod-bilde" src={blod7} alt="illustrasjon av blodoverføring"/>
      <section className="paragraph">
        <h3>Forskjellige blodtyper</h3>
        <div className="row">
        <p>
        Det finnes 8 forskjellige blodtyper, skriver <a href={rodekorsUrl5} target="_blank" rel="noreferrer">Røde Kors</a>. Disse går under 
        blodtypesystemet ABO som viser til blodtypene A, B, AB og O. I tillegg deles disse inn i rhesussystemet som forteller om de er RhD- 
        eller RhD+. Dette utgjør de åtte blodtypene; O-, O+, A-, A+, B-, B+, AB- og AB+.
        </p>
        <img id="blodtyper" src={blodtyper} alt="blodtyper"/>
        </div>
        <p>
        Når det finnes så mange forskjellige blodtyper er det viktig at det blir gitt riktig blodtype til riktige personer. 
        </p>
        </section>
        <section className="paragraph gap">
        <div className="row">
          <p>
          Ifølge tall fra <a href={rodekorsUrl5} target="_blank" rel="noreferrer">Røde Kors</a> har nesten halvparten av Norges befolkning 
          blodtypen A, med 48%. Videre kommer blodtypen O, med 39%, så B med 8% og 4% har blodtypen AB. Av disse personene er 85% RhD-, og 15% RhD+. 
          </p>
          <img className="small-img" src={blooddrop} alt="Blodstatistikk"/>
        </div>
      </section>
      <section className="paragraph gap">
        <h3>Hvem som får blod</h3>
        <p>
        Etter at blodposen har blitt merket riktig etter hvilken blodtype det er, kan det gis til riktig person. 
        </p>
        <p>
        Iversen fra Blodbanken i Fredrikstad forteller om ulike grupper som trenger blod. Rundt halvparten av blodet går til behandling av 
        kreftpasienter. Kirurgiske inngrep og forskjellige ulykker og fødsler kan føre til store blodtap og det er dermed livsviktig at det 
        er nok blod tilgjengelig på sykehusene. I tillegg er det mange med ulike blodsykdommer, som regelmessig kan trenge blodtilførsel. Det 
        er livsviktig at sykehusene har nok blod for disse tilfellene, men da må antall blodgivere i Norge øke.
        </p>
      </section>
      <img className="blod-bilde" src={blod8} alt="illustrasjon av blodoverføring"/>
      <section className="paragraph gap">
        <p>
        ”Følelsen av å kunne potensielt redde liv ved å bare sitte i en stol, bli stukket i armen og drikke appelsinjuice er fantastisk” forteller 
        Stine om opplevelsen med å gi blod for første gang hos Blodbanken i Fredrikstad. 
        </p>
        <p>
        Denne opplevelsen er noe flere kan få ved å bli blodgivere. Nå vet vi hva som skjer med blodet etter man gir blod hos en blodbank og ser 
        at det ender opp hos pasienter som virkelig trenger det. Det er en stor prosess for å klargjøre blodet fra tapping til bruk, men det er 
        helt nødvendig. Takket være dedikerte bioingeniører og helsepersonell kan blodet ditt bidra til å redde flere liv, for blod er et livsviktig 
        element som så mange mennesker trenger daglig. Om du blir blodgiver og gir en pose blod, kan du være med på å redde tre forskjellige liv 
        ved å melde deg som blodgiver her: <a href={bliblodgiver} target="_blank" rel="noreferrer">Bli blodgiver!</a>
        </p>
      </section>
      <div id="rotating-div"></div>
    </section>
    </body>
  )
}