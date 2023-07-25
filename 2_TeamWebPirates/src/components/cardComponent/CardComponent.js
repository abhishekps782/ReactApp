import IMAGES from "../../../utilities/image-exporter"
const CardComponent = (props) => {
  if(!props.details) {
    return null;
  }
  const {avatar_url, name, login, bio, company, location, blog, html_url} = props.details;
    return (
      <section className="card">
        <img src={avatar_url} alt="Default Image"></img>
        <article>
          <h3>{name || login}</h3>
          <p>{bio}</p>
          <p>{company}</p>
          <p>{location}</p>
          <p>
            <a href={blog}>
               <img src={IMAGES.linkedin} height="32px"></img>
            </a>
            <a href={html_url}>
               <img src={IMAGES.github} height="32px"></img>
            </a>
          </p>
        </article>
      </section>
    )
}

export default CardComponent;