import React from 'react'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import LandingHeader from "../landingheader"
import LandingFooter from '../landingfooter'
import { useRouter } from "next/router";

export default function Layout({ children }) {
  const router = useRouter();
  if (router.pathname != "/bali-honeymoon-tour-packages" && router.pathname != "/best-honeymoon-tour-packages-for-couples" && router.pathname != "/thailand-tour-package" && router.pathname != "/dubai-tour-package" && router.pathname != "/maldives-tour-packages" && router.pathname != "/europe-tour-packages" && router.pathname != "/kerala-tour-package" && router.pathname != "/kashmir-tour-package" && router.pathname != "/japan-tour-packages" && router.pathname != "/thank-you" && router.pathname != "/madhya-pradesh-tourism" && router.pathname != "/madhya-pradesh-tourism/adventure-tourism" && router.pathname != "/madhya-pradesh-tourism/cultural-tourism" && router.pathname != "/madhya-pradesh-tourism/heritage-tourism" && router.pathname != "/madhya-pradesh-tourism/nature-tourism" && router.pathname != "/madhya-pradesh-tourism/spiritual-tourism" && router.pathname != "/madhya-pradesh-tourism/wildlife-tourism" && router.pathname != "/turkey-tour-packages" && router.pathname != "/ladakh-tour-package" ) {
    return (
      <>
        <Header />
        <div>{children}</div>
        <Footer />
      </>
    )
  }
  else {
    return (
      <>
        <LandingHeader />
        {children}
        <LandingFooter />

      </>
    )
  }
}