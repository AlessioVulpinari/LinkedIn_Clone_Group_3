import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import ProfilePage from "./components/ProfilePage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LinkedInNavBar from "./components/LinkedinNavBar";
import Home from "./components/HomePageLinkedin";

function App() {
  return (
    <>
      {/* <BrowserRouter>
        <LinkedInNavBar />
        <Routes>
          <Route path="/" element={<ProfilePage />} />
        </Routes>
      </BrowserRouter> */}
      <Home />
    </>
  );
}

export default App;
