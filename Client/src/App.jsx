import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "react-datepicker/dist/react-datepicker.css";

import HomePage from "./page/HomePage";
import LoginPage from "./page/LoginPage";
import DrPage from "./page/DrPage";
import AboutPage from "./page/AboutPage";
import ContactPage from "./page/ContactPage";
import DoctorsBySpecialty from "./page/DoctorsBySpecialty";
import Signup from "./page/Signup";
import UpdateUserProfile from "./components/UpdateUserProfile";
import DoctorDetailPage from "./page/DoctorDetailPage";
import DoctorSignupPage from "./page/DoctorSignupPage";
import DoctorLoginPage from "./page/DoctorLoginPage";
import Dashboard from "./components/Dashboard";
import AdminDashboard from "./components/AdminDashboard";
import AdminLoginPage from "./page/AdminLoginPage";

function App() {
  return (
    <>
      <BrowserRouter>
        <ToastContainer position="top-center" autoClose={3000} />

        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route exact path="/updateUser" element={<UpdateUserProfile />} />
          <Route exact path="/doctors" element={<DrPage />} />
          <Route path="/doctors/:id" element={<DoctorDetailPage />} />
          <Route
            path="/specialty/:specialty"
            element={<DoctorsBySpecialty />}
          />
          <Route exact path="/about" element={<AboutPage />} />
          <Route exact path="/contact" element={<ContactPage />} />
          <Route exact path="/dashboard" element={<Dashboard />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<LoginPage />} />

          <Route path="/doctor/signup" element={<DoctorSignupPage />} />
          <Route path="/doctor/login" element={<DoctorLoginPage />} />

          <Route path="/admin/login" element={<AdminLoginPage />} />
          <Route path="/admin/dashboard" element={<AdminDashboard />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
