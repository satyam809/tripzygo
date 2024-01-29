import React from 'react'
import Link from 'next/link'
import LandingModal from "../components/LandingModal"


export default function landingheader() {
    return (
        <>

            <header className="main_header_area">
                <div className="header_menu" id="header_menu">
                    <nav className="navbar navbar-default" style={{ height: "65px" }}>
                        <div className="container">
                            <div className="navbar-flex d-flex align-items-right justify-content-between w-100 pb-2 pt-2">
                                <div className="navbar-header">
                                    <a className="navbar-brand" href="/">
                                        <img src="/logo.webp" alt="tripzygo" style={{ height: "25px", position: "relative", marginTop: "5px" }} />
                                        {/* <img src="/logo 1.png" alt="tripzygo" style={{ height: "35px" }} /> */}

                                    </a>
                                </div>
                                {/* <div className="navbar-collapse1 d-flex align-items-center" id="bs-example-navbar-collapse-1">
                                    <ul className="nav navbar-nav" id="responsive-menu">

                                    </ul>
                                </div> */}
                                <div class=" d-flex align-items-center">

                                    <img src="/images/user-headset-support.png" style={{ height: "12px", zIndex: "999", position: "relative", left: "18px", bottom: "4px" }}></img>

                                    {/* <a href="#" class="nir-btn white">Need Help Talk with our Expert</a> */}
                                    <LandingModal buttonLabel="&nbsp;Talk with our Expert"></LandingModal>

                                </div>
                                {/* <div class="register-login d-flex align-items-center">

                                    <img src="/images/user-headset-support.png" style={{ height: "12px", zIndex: "999", position: "relative", left: "18px", bottom: "4px" }}></img>

                                    <LandingModal buttonLabel="&nbsp;Talk with our Expert"></LandingModal>

                                </div> */}
                            </div>
                        </div>
                    </nav>
                </div>

            </header>

        </>
    )
}
