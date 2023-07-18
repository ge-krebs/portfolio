import { HashLink as Link } from 'react-router-hash-link'

//set states to allow text color to stay on dependent of which
//section the user is on the page

function Nav() {
  return (
    <>
      <nav id="nav-container">
        <div id="nav-links">
          <Link to="#about" className="nav-btn">
            About Me
          </Link>
          <Link to="#experience" className="nav-btn">
            Experience
          </Link>
          <Link to="#" className="nav-btn">
            Projects
          </Link>
          <Link to="#" className="nav-btn">
            Contact
          </Link>
        </div>
      </nav>
    </>
  )
}

export default Nav
