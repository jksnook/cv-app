import Experience from "./Experience"
import Education from "./Education"
import GeneralInfo from "./GeneralInfo"
import '../styles/style.css'

function App () {
  return(
    <div className="container">
      <GeneralInfo />
      <Education />
      <Experience />
    </div>
  )  
}

export default App