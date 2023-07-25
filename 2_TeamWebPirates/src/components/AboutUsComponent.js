import HeaderComponent from "./headerComponent/HeaderComponent";

const AboutUsComponent = () => {
  return (
    <div className="container">      
      <HeaderComponent hideSearchEle={true}/>
      <article className="aboutus__container">
        <h2>We are part of Team Web Pirates</h2>
        <p>Here to learn the Reactjs from scratch and build some cool Projects !</p>
      </article>
    </div>
  )
}

export default AboutUsComponent;