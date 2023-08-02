import Header from './Header'
import Landing from './Landing'
import Timeline from './Timeline'
import AboutMe from './AboutMe'
import { BrowserRouter } from 'react-router-dom'
import Projects from './Projects'

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Landing />
        <AboutMe />
        <Projects />
        <Timeline />
      </BrowserRouter>
    </>
  )
}

export default App
