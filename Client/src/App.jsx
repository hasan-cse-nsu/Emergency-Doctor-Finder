import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./page/HomePage";
import LoginPage from "./page/LoginPage";
import DrPage from "./page/DrPage";
import DoctorDetail from "./page/DoctorDetail";
import AboutPage from "./page/AboutPage";
import ContactPage from "./page/ContactPage";
import DashboardPage from "./page/DashboardPage";
import DoctorsBySpecialty from "./page/DoctorsBySpecialty";
import Signup from "./page/Signup";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import UpdateUserProfile from "./components/UpdateUserProfile";
import "react-datepicker/dist/react-datepicker.css";


function App() {
  return (
    <>
      <BrowserRouter>
        <ToastContainer position="top-center" autoClose={3000} />

        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route exact path="/login" element={<LoginPage />} />
          <Route exact path="/updateUser" element={<UpdateUserProfile />} />
          <Route path="/dashboard" element={<DashboardPage />} />
          <Route exact path="/doctors" element={<DrPage />} />
          <Route path="/doctors/:id" element={<DoctorDetail />} />
          <Route
            path="/specialty/:specialty"
            element={<DoctorsBySpecialty />}
          />
          <Route exact path="/about" element={<AboutPage />} />
          <Route exact path="/contact" element={<ContactPage />} />
          <Route exact path="/dashboard" element={<DashboardPage />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<LoginPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
