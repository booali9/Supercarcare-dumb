import { Routes, Route, Navigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Header from "./Timeassign/header";

// import Aboutus from "./widgets/layout/Aboutus";
import Footer from "./Timeassign/footer";
import Contact from "./Timeassign/contact";
import VehicleInformation from "./Timeassign/VehicleInformation";
// import TireSelection from "./Timeassign/TireSelection";
import ServiceSelectionForm from "./Timeassign/ServiceSelectionForm";
import AppointmentScheduler from "./Timeassign/Schedule";
import ReviewAppointment from "./Timeassign/ReviewAppointment";
// import Location from "./Timeassign/location";
import { motion } from "framer-motion";
import About from "./Timeassign/About";
import Services from "./Timeassign/ServicesSection";
import Testimonials from "./Timeassign/Testimonials";
import HeroVideoBanner from "./Timeassign/HeroVideoBanner";
import Newsletter from "./Timeassign/NewsletterSection";
import Signup from "./Timeassign/Signup";
import Login from "./Timeassign/login";
import AccountSidebar from "./pages/AccountSidebar";
import AccountVehicles from "./pages/AccountVehicle";
// /import AddressManagement from "./pages/AddressManagemet";
// import SavedInstaller from "./pages/SavedInstaller";
// import SavedItem from "./pages/SavedItems";
import OrderHistory from "./pages/Orderhistory";
import { Outlet } from 'react-router-dom';
// import SavedItems from "./pages/SavedItems";
import AccountSettings from "./pages/AccountSetting";
// import RatingsReviews from "./pages/RatingsandReview";
import ChangePassword from "./pages/ChangePassword";
import ServicesPage from './pages/ShopPage';
import WhyUsComingSoon from './pages/WhyUsComingSoon';
import FinancingComingSoon from './pages/FinancingComingSoon';
import PaymentGateway from './components/PaymentGateway';
import HowDidYouHearModal from "./components/HowDidYouHearModal";
import Chatbot from "./components/Chatbot";
import Stepper from "./pages/Stepper";
import AdminAccountSidebar from "./admin/AccountSidebaradmin";
import AdminUserStats from "./admin/UserManagement ";
import AnalyticsPage from "./admin/Analytics";
import ReportsPage from "./admin/Report";


function Layout({ children, activeStep }) {
  const location = useLocation();
  const isHomePage = location.pathname === "/";
  const isContactPage = location.pathname === "/contact-us";
  const isSignupPage = location.pathname === "/signup"
  const isLoginPage = location.pathname === "/login"
    const isAccount = location.pathname.startsWith("/account");
    const isShop = location.pathname.startsWith("/shop");
    const isWhyUsPage = location.pathname === "/why-us";
    const isFinancingPage = location.pathname === "/financing";    
    const isAdmin = location.pathname.startsWith("/admin");


  return (
    <div className="min-h-screen flex flex-col">      {/* Header */}
      <Header />

      {/* Stepper (only show on appointment flow routes) */}
      {!isHomePage && !isContactPage && !isSignupPage && !isLoginPage && !isAccount && !isShop && !isWhyUsPage && !isFinancingPage  && !isAdmin && <Stepper className="mt-4" activeStep={activeStep} />}

      {/* Animated Page Transition */}      <motion.main
        key={location.pathname} // Change animation on route change
        initial={{ opacity: 0, x: 50 }} // Start position
        animate={{ opacity: 1, x: 0 }} // End position
        exit={{ opacity: 0, x: -50 }} // Exit animation
        transition={{ duration: 0.4, ease: "easeInOut" }} // Smooth transition
        className="flex-grow bg-white"
      >
        {children}
      </motion.main>

      {/* Footer should always stay at the bottom */}
      {!isHomePage && (
        <div className="mt-auto">
          <Footer />
        </div>
      )}
    </div>
  );
}

function App() {
  const [activeStep, setActiveStep] = useState(0); // State to track the active step
  const location = useLocation();
  const [showModal, setShowModal] = useState(true); // Always show modal when on user portal

  // Function to handle next step
  const handleNext = () => {
    setActiveStep((prevStep) => prevStep + 1);
  };

  // Function to handle previous step
  const handleBack = () => {
    setActiveStep((prevStep) => prevStep - 1);
  };

  const isUserPortal = location.pathname.startsWith('/account');

  useEffect(() => {
    // Show modal every time user visits /account or subroutes
    if (isUserPortal) {
      setShowModal(true);
    } else {
      setShowModal(false);
    }
  }, [location.pathname]);

  return (
    <>
      {isUserPortal && (
        <HowDidYouHearModal open={showModal} onClose={() => setShowModal(false)} />
      )}
      <Chatbot />
      <Routes>
        {/* Home Route */}
        <Route
          path="/"
          element={
            <Layout activeStep={activeStep}>
              <HeroVideoBanner/>
              <About/>
              <Services/>
              <Testimonials/>
              <Newsletter/>
              <Footer />
            </Layout>
          }
        />

        {/* Contact Form Route */}
        <Route
          path="/contact-us"
          element={
            <Layout activeStep={activeStep}>
              <Contact onNext={handleNext} />
            </Layout>
          }
        />

        {/* Other Routes */}


        {/*<Route
          path="/Location"
          element={
            <Layout activeStep={activeStep}>
              <Location onNext={handleNext} onBack={handleBack} />
            </Layout>
          }
        />*/}
        <Route
          path="/vehicle-info"
          element={
            <Layout activeStep={activeStep}>
              <VehicleInformation onNext={handleNext} onBack={handleBack} />
            </Layout>
          }
        />
        
        
       {/* <Route
          path="/tire-info"
          element={
            <Layout activeStep={activeStep}>
              <TireSelection onNext={handleNext} onBack={handleBack} />
            </Layout>
          }
        />*/}
        <Route
          path="/services"
          element={
            <Layout activeStep={activeStep}>
              <ServicesPage />
            </Layout>
          }
        />
        <Route
          path="/select-services"
          element={
            <Layout activeStep={activeStep}>
              <ServiceSelectionForm onNext={handleNext} onBack={handleBack} />
            </Layout>
          }
        />
        <Route
          path="/service-schedule-page"
          element={
            <Layout activeStep={activeStep}>
              <ServiceSelectionForm onNext={handleNext} onBack={handleBack} />
            </Layout>
          }
        />
        <Route
          path="/scheduler"
          element={
            <Layout activeStep={activeStep}>
              <AppointmentScheduler onNext={handleNext} onBack={handleBack} />
            </Layout>
          }
        />
        <Route
          path="/review-appointment"
          element={
            <Layout activeStep={activeStep}>
              <ReviewAppointment onBack={handleBack} />
            </Layout>
          }
        />

        <Route
          path="/signup"
          element={
            <Layout>
              <Signup/>
            </Layout>
          }
        />
        <Route
          path="/login"
          element={
            <Layout>
              <Login/>
            </Layout>
          }
        />

    <Route path="/shop" element={ <Layout><ServicesPage /></Layout>} />
    <Route path="/shop/:category" element={<Layout><ServicesPage /></Layout>} />

    <Route 



    path="/account" 
    element={
      <Layout>
        <div className="flex flex-grow">
          <AccountSidebar />
          <div className="flex-grow p-6">
            <Outlet />
          </div>
        </div>
      </Layout>
    }
  >
    <Route index element={<Navigate to="/account/vehicles" replace />} />
    <Route path="vehicles" element={<AccountVehicles />} />
   { /*<Route path="addresses" element={<AddressManagement />} />*/}
    {/*<Route path="installers" element={<SavedInstaller/>} />*/}
    {/*<Route path="wishlist" element={<SavedItems/>} />*/}
    <Route path="orders" element={<OrderHistory/>} />
    <Route path="setting" element={<AccountSettings/>} />
    {/*<Route path="ratings" element={<RatingsReviews/>} />*/}
    <Route path="password" element={<ChangePassword/>} />
    <Route path="payment-gateway" element={<PaymentGateway />} />
    {/* Add other account routes here */}
  </Route>

  <Route 
  path="/admin" 
  element={
    <Layout>
      <div className="flex flex-grow">
        <AdminAccountSidebar/>
        <div className="flex-grow p-6">
          <Outlet />
        </div>
      </div>
    </Layout>
  }
>
 <Route index element={<Navigate to="/admin/users" replace />} />
  <Route path="users" element={<AdminUserStats/>} />

 
  <Route path="analytics" element={<AnalyticsPage/>} />
 
  <Route path="reports" element={<ReportsPage/>} />

</Route>

        <Route
          path="/why-us"
          element={
            <Layout>
              <WhyUsComingSoon />
            </Layout>
          }
        />
        <Route
          path="/financing"
          element={
            <Layout>
              <FinancingComingSoon />
            </Layout>
          }
        />

        {/* Redirect unknown routes to Home */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </>
  );
}

export default App;