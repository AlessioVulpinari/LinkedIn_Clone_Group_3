import "bootstrap/dist/css/bootstrap.min.css"
import "./App.css"
import HomePage from "./components/HomePage"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import LinkedInNavBar from "./components/LinkedinNavBar"

function App() {
  return (
    <>
      <BrowserRouter>
        <LinkedInNavBar />
        <Routes>
          <Route path='/' element={<HomePage />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
