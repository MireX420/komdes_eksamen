import { Link } from "react-router-dom";

import blodceller from "../photos/blodceller.jpg"
import avo from "../photos/avo.jpg"
import julekule from "../photos/julekule.jpg"
import kaffe from "../photos/kaffe.jpg"

export default function Navpage() {
  
  return(
    <section id="navpage">
    <h1>Eksamen i kommunikasjonsdesign høst 2023</h1>
    <h2>Kandidatnummer: 415, 454 og 435</h2>
    <p id="welcome" className="bubble" >Velkommen hit! Her finner du fire spennende visuelle artikler satt sammen med kjærlighet. 
    Skrevet, designet og utviklet av Jennifer Grimsrud, Stine Vågnes og Synne Heiberg.</p>
    <section id="article-section">

      <Link to="/blood-donation">
        <article className="article-card long-article">
        <img src={blodceller} alt="blodceller"/>
          <section className="text-section">
            <h3>Langlesningssak</h3>
            <h2>Hvor blir det av blodet ditt?</h2>
            <div id="tags">
              <p className="bubble">Visualisering</p>
              <p className="bubble">Animasjon</p>
              <p className="bubble">Kart</p>
              <p className="bubble">Statistikk</p>
            </div>
            <p>Blod er et helt nødvendig element for alle mennesker og flere trenger påfyll av blod. Dette er det vi har blodgivning for, slik at alle som trenger ekstra blod skal kunne få det. Men vet vi hvor blodet egentlig blir av etter blodgivningen? Hvordan er reisen fra blodgivning til en at pasient som trenger det får det? </p>
          </section>
        </article>
      </Link >

      <Link to="/caffeine">
        <article className="article-card short-article">
          <img src={kaffe} alt="energidrikke"/>
          <section className="text-section">
            <h3>Nyhetssak 1</h3>
            <h2>Dette skjuler seg i det du drikker</h2>
            <div id="tags">
              <p className="bubble">Statistikk</p>
              <p className="bubble">Quiz</p>
            </div>
            <p>Den norske befolkningen får i seg mer koffein nå enn noen gang før. De fleste tenker kanskje at de har oversikt over sitt eget koffeinforbruk, men er du egentlig klar over hvor mange varer som faktisk inneholder koffein?</p>
          </section>
        </article>
      </Link>

      <Link to="/colourblindness">
        <article className="article-card short-article">
          <img src={julekule} alt="juletre"/>
          <section className="text-section">
            <h3>Nyhetssak 2</h3>
            <h2>En fargesvak jul</h2>
            <div id="tags">
            <p className="bubble">Fargetest</p>
            <p className="bubble">Visualisering</p>
            </div>
            <p>Farger er ikke likt for alle mennesker, og en stor andel oppfatter verdens farger på en helt annen måte enn resten. Så om mannen din ikke gleder seg til å pynte med julens farger i hjemmet, kan det være en grunn til det!</p>
          </section>
        </article>
      </Link >

      <Link to="/avocado">
        <article className="article-card short-article">
          <img src={avo} alt="avokado"/>
          <section className="text-section">
            <h3>Nyhetssak 3</h3>
            <h2>Den mørke baksiden til tacokveldens grønne gull</h2>
            <div id="tags">
            <p className="bubble">Tidslinje</p>
            <p className="bubble">Kart</p>
            </div>
            <p>De siste tiårene har avokadoens popularitet skutt i været. Populariteten har ført til et hopp i pris på frukten, og for avokado bøndene gir dette en stor gevinst. Bak kulissene til avokado feberen skjuler det seg en kriminell fortelling som kaster skygger over en bransje som er alt annet enn grønn.</p>
          </section>
        </article>
      </Link>
    </section>

    </section>
  )
}