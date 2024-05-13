import "bootstrap/dist/css/bootstrap.min.css"
import "./App.css"
import LinkedinAside from "./components/LinkedinAside"
import LinkedinFooter from "./components/LinkedinFooter"

function App() {
  return <div className="bg-black">
    <LinkedinAside />
    <LinkedinFooter />
  </div>
}

export default App
