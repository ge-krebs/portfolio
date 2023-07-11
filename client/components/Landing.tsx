function Landing() {
  const greeting = 'Kia ora! 👋'
  const text =
    "I'm Gemma, a Junior Software Engineer with a passion for creating applications that are visible pleasing on the eye."
  return (
    <div className="section-container">
      <div className="section-content-container">
        <div id="threejs-container">
          <p>3js logo</p>
        </div>
        <div id="greeting-container">
          <h1>{greeting}</h1>
          <p>{text}</p>
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
