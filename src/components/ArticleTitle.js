import FadeInSection from "./FadeInSection";

export default function ArticleTitle({description, title, intro, articleClass}){
  return(
    <FadeInSection>
'    <article className={`${articleClass} article-title`}>
      <h4>{description}</h4>
      <h3>{title}</h3>
      <p>{intro}</p>
      </article>
    </FadeInSection>
  )
}