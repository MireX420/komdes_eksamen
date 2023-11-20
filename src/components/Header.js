import { Link } from "react-router-dom";

export default function Header({innledning, tittel, undertittel, bgImg}){
  return(
    <section id="header" className={bgImg}>
      <Link to="/">
        <button id="back"><i class="bi bi-arrow-left"></i></button>
      </Link>
      <p id="intro">{innledning}</p>
      <h1>{tittel}</h1>
      {/* <p id="subtitle">{undertittel}</p> */}
      <p>Publisert november 2023</p>
      <p>Journalist: Jennifer Grimsrud</p>
      <p>Designer: Stine Vågnes</p>
      <p>Utvikler: Synne Heiberg</p>
    </section>
  )
}