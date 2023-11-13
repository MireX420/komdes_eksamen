import { useState } from "react";
import { Link } from "react-router-dom";
import blodceller from "../photos/blodceller.jpg"
import avo from "../photos/avo.jpg"
import julepynt from "../photos/julepynt.jpg"
import kaffe from "../photos/kaffe.jpg"

export default function Navpage() {

  // const [visibility, setVisibility] = useState("visible")

  // function toggleVisibility() {
  //   visibility === "visible" ? setVisibility("hidden") : setVisibility("visible")
  // }

  return(
    <body id="navpage">
    <h1>Eksamen i kommunikasjonsdesign høst 2023</h1>
    <p id="welcome" class="bubble" >Velkommen hit! Her finner du fire spennende visuelle artikler satt sammen med kjærlighet </p>
    {/* <p class="bubble">bla bla bla bla...</p> */}
    <section id="article-section">

      <Link to="/blood-donation">
        <article class="article-card long-article">
        <img src={blodceller} alt="blodceller"/>
          <section class="text-section">
            <h3>Langlesningssak</h3>
            <h2>Hvor blir det av blodet?</h2>
            <div id="tags">
              <p class="bubble">Illustrasjon</p>
              <p class="bubble">Animasjon</p>
            </div>
            <p>Blod er et helt nødvendig element for alle mennesker og flere trenger påfyll av blod. Dette er det vi har blodgivning for, slik at alle som trenger ekstra blod skal kunne få det. Men vet vi hvor blodet egentlig blir av etter blodgivningen? Hvordan er reisen fra blodgivning til en at pasient som trenger det får det? </p>
          </section>
        </article>
      </Link >

      <Link to="/avocado">
        <article class="article-card short-article">
          <img src={avo} alt="avokado"/>
          <section class="text-section">
            <h2>Tacokveldens grønne gull</h2>
            <p class="bubble">Tidslinje</p>
            <p>De siste tiårene har avokadoens popularitet skutt i været. Populariteten har ført til et hopp i pris på frukten, og for avokado bøndene gir dette en stor gevinst. Bak kulissene til avokado feberen skjuler det seg en kriminell fortelling som kaster skygger over en bransje som er alt annet enn grønn.</p>
          </section>
        </article>
      </Link>

      <Link to="/caffeine">
        <article class="article-card short-article">
          <img src={kaffe} alt="energidrikke"/>
          <section class="text-section">
            <h2>Dette skjuler seg i det du drikker</h2>
            <div id="tags">
              <p class="bubble">Statistikk</p>
              <p class="bubble">Quiz</p>
            </div>
            <p>Den norske befolkningen får i seg mer koffein nå enn noen gang før. De fleste tenker kanskje at de har oversikt over sitt eget koffeinforbruk, men er du egentlig klar over hvor mange varer som faktisk inneholder koffein?</p>
          </section>
        </article>
      </Link>

      <Link to="/colourblindness">
        <article class="article-card short-article">
          <img src={julepynt} alt="juletre"/>
          <section class="text-section">
            <h2>En fargesvak jul</h2>
            <p class="bubble">Fargetest</p>
            <p>Farger er ikke likt for alle mennesker, og en stor andel oppfatter verdens farger på en helt annen måte enn resten. Så om mannen din ikke gleder seg til å pynte med julens farger i hjemmet, kan det være en grunn til det!</p>
          </section>
        </article>
      </Link >
    </section>

    </body>
  )
}