import { Link } from "react-router-dom";

export default function Header({innledning, tittel, undertittel, bgImg}){
  return(
    <section id="header" className={bgImg}>
      <Link to="/">
        <button id="back"><i className="bi bi-arrow-left"></i></button>
      </Link>
      <p id="intro">{innledning}</p>
      <h1>{tittel}</h1>
      <p>Publisert november 2023</p>
      {/* <p>Journalist: Jennifer Grimsrud</p>
      <p>Designer: Stine Vågnes</p>
      <p>Utvikler: Synne Heiberg</p> */}
      <p>Skrevet, designet og utviklet av:</p>
      <p>Jennifer Grimsrud, Stine Vågnes og Synne Heiberg</p>
    </section>
  )
}