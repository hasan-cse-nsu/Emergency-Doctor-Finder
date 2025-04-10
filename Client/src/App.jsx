import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./page/HomePage";
import LoginPage from "./page/LoginPage";
import DrPage from "./page/DrPage";
import DoctorDetail from "./page/DoctorDetail";
import AboutPage from "./page/AboutPage";
import ContactPage from "./page/ContactPage";
import DashboardPage from "./page/DashboardPage";
import DoctorsBySpecialty from "./page/DoctorsBySpecialty";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route exact path="/login" element={<LoginPage />} />
          <Route exact path="/doctors" element={<DrPage />} />
          <Route path="/doctors/:id" element={<DoctorDetail />} />
          <Route
            path="/specialty/:specialty"
            element={<DoctorsBySpecialty />}
          />
          <Route exact path="/about" element={<AboutPage />} />
          <Route exact path="/contact" element={<ContactPage />} />
          <Route exact path="/dashboard" element={<DashboardPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
