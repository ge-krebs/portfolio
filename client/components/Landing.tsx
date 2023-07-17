function Landing() {
  const greeting = 'Kia ora!👋'
  const name = "I'm Gemma, "
  const text =
    'a Junior Software Engineer with a passion for creating applications that are visible pleasing on the eye.'
  return (
    <div className="section-container">
      <div className="section-content-container">
        <div id="threejs-container">
          <img src="/images/laptop.jpg" alt="laptop" />
        </div>
        <div id="greeting-container">
          <div id="greeting-container-heading">
            <h1>{greeting}</h1>
          </div>
          <div id="greeting-container-text">
            <p>
              <span id="purple-text">{name}</span>
              {text}
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Landing

//create flexbox styling for two divs side by side 50% size
//find a 3JS model to use on lhs
//create div to hold large text content
//choose styling for text content and font etc
