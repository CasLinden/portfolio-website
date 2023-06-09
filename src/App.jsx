import Header from '/src/components/header/Header'
import ProjectsSection from '/src/components/projects/ProjectsSection'
import Footer from '/src/components/footer/Footer'

import '/src/css/App.css'

function App() {


  return (
    <div className="app">
      <Header></Header>
      <ProjectsSection></ProjectsSection>
      <Footer></Footer>
    </div> 
  )
}

export default App
