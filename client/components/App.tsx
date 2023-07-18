import Header from './Header'
import Landing from './Landing'
import Timeline from './Timeline'
import AboutMe from './AboutMe'
import { BrowserRouter } from 'react-router-dom'

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Landing />
        <AboutMe />
        <Timeline />
      </BrowserRouter>
    </>
  )
}

export default App
