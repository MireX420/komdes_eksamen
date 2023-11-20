export default function ArticleTitle({description, title, intro, articleClass}){
  return(
    <article className={`${articleClass} article-title`}>
      <h4>{description}</h4>
      <h3>{title}</h3>
      <p>{intro}</p>
    </article>
  )
}