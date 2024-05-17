import "bootstrap/dist/css/bootstrap.min.css"
import "./App.css"
import ProfilePage from "./components/ProfilePage"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import LinkedInNavBar from "./components/LinkedinNavBar"
import Home from "./components/HomePageLinkedin"
import JobsPage from "./components/JobsPage"
import UserProfilePage from "./components/otherProfilePage/UserProfilePage"

function App() {
  return (
    <>
      <BrowserRouter>
        <LinkedInNavBar />
        <Routes>
          <Route path='/profilePage' element={<ProfilePage />} />
          <Route path='/' element={<Home />} />
          <Route path='/:userId' element={<UserProfilePage />}></Route>
          <Route path='/jobsPage' element={<JobsPage />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
