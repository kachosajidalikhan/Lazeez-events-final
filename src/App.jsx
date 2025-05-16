import { useState } from 'react'
import Navbar from './component/Navbar/navbar'
import { Route, Routes } from 'react-router-dom'
import Home from './component/Home/home'
import Footer from './component/Footer/footer'
import AboutUs from './component/AboutUs/aboutUs'
import LazeezPackages from './component/LazeezPackages/lazeezPackages'
import SignupForm from './component/signup/signup'
import LoginForm from './component/login/login'
import ForgotPass from './component/login/enterEmail'
import TwoStepPage from './component/login/twoStepPage'
import ResetPass from './component/login/resetpassword'
import VendorPage from './component/Vendor/vendorPage'
import SubPackages from './component/Subpackages/subPackages'
import FAQs from './component/FAQs/faqSection'
import Blogs from './component/Blogs/blogsPage'
import PressSection from './component/PressRelease/pressRelease'
import PrivacyPage from './component/PrivacyPage/privacyPolicy'
import TermsPage from './component/TermsandCondition/termsAndConditions'
import RefundPage from './component/Refundpage/refundCancellationPolicy'
import AppDownloadSection from './component/AppDownload/appDownloadPage'
import ThankYouScreen from './component/Thankyou/thankyou'
import RequireAuth from './requireAuth'
import GoogleSuccess from './component/googleSuccess'
function App() {

  return (
    <>
    <Navbar/>
    <br />
    <br />
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/about" element={<AboutUs/>} />  
      <Route path="/Lazeez-Packages" element={<LazeezPackages/>} />  
      <Route path="/Signup-Form" element={<SignupForm/>} />  
      <Route path="/Login-Form" element={<LoginForm/>} />  
      <Route path="/Forgot-Pass" element={<ForgotPass/>} />  
      <Route path="/Two-Step-Page" element={<TwoStepPage/>} />  
      <Route path="/Reset-Pass" element={<ResetPass/>} />
      <Route path="/vendor-page" element={<VendorPage/>} />
      <Route path="/FAQs" element={<FAQs/>} />
      <Route path="/blogs-page" element={<Blogs/>} />
      <Route path="/privacy-policy-page" element={<PrivacyPage/>} />
      <Route path="/terms-and-condition-page" element={<TermsPage/>} />
      <Route path="/refund-cancellation-page" element={<RefundPage/>} />
      <Route path="/press-release-page" element={<PressSection/>} />
      <Route path="/google-success" element={<GoogleSuccess />} />
      <Route
                path="/App-Download-Section"
                element={
                  <RequireAuth>
                    <AppDownloadSection />
                  </RequireAuth>
                }
              />
      <Route path="/Thank-You-Section" element={<ThankYouScreen/>} />
      <Route path="/Sub-Packages/:id" element={<SubPackages/>} />
    </Routes>
    <Footer/>
    </>
    /* Section 2 */
    

  )
}

export default App
