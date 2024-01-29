import Head from "next/head";
import React from "react";
import { useEffect, useState } from 'react'

export default function payment() {
    const [mounted, setMounted] = useState(false);
    useEffect(() => setMounted(true), []);
    useEffect(() => {
        const Script = document.createElement("script");
        //id should be same as given to form element
        const Form = document.getElementById("donateForm");
        Script.setAttribute(
            "src",
            "https://checkout.razorpay.com/v1/payment-button.js"
        );
        Script.setAttribute("data-payment_button_id", "pl_L5YrGuHGZdF2TZ");
        Script.setAttribute("data-button_text", "Click here to pay");
        // Script.setAttribute("data-button_theme", "brand-color");


        if (Form) {
            Form.appendChild(Script);
        }
    }, []);


    return (
        <div>
            <Head>
                <title>TripzyGo - Payment</title>
                <meta name="description" content="Customer satisfaction is our top priority, and we protect your personal information. Please read this privacy policy carefully before providing any data to us." />
                <link rel="icon" href="/icon.png" />
            </Head>
            <section className="breadcrumb-main pb-15 pt-14" style={{ backgroundImage: "url(images/banner_images/payment_banner.jpg)" }}>
                <div className="breadcrumb-outer">
                    <div className="container">
                        <div className="breadcrumb-content text-center">
                            <h1 className="mb-3">Payment Details</h1>
                            <p style={{ color: "white" }}>Make Payments, Make Memories!</p>
                        </div>
                    </div>
                </div>
                <div className="dot-overlay"></div>
            </section>
            <section className="trending pt-4 pb-0">
                <div className="container rounded bg-grey">
                    <div className="row">
                        <div className="col-lg-12">
                            
                            <div className="payment-description mb-0">
                                <div className="row payment-box ">
                                    <div className="col-lg-12 col-md-12">
                                        <div className=" p-4 rounded ">
                                            <p className="text-justify text-center payment-description" >Say goodbye to delays and unnecessary paperwork. Say hello to a safe, secure, and seamless journey with us!</p>
                                            <p className="text-justify text-center payment-description" >TripzyGo is proud to offer a secure payment system to you. Go ahead, your trip to paradise is just a step away!</p>
                                        </div>
                                    </div>


                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="trending pt-4 pb-0">
                <div className="container rounded bg-grey">
                    <div className="row payment-box ">
                        <div className="col-lg-12">
                            <div className="single-content"></div>
                            <div className="description mb-0">
                                <div className="row">
                                    <div className="col-lg-12 col-md-12">
                                        <div className="py-4 rounded ">
                                            <p className="text-justify payment-description text-center" ><span className='strongfont'>Safe, Secure and Contactless Payment</span></p>
                                            <p className="text-justify payment-description text-center" >Complete the next step and have a memorable vacation with us</p>
                                        </div>
                                    </div>


                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 col-md-6 payment-section-banner">
                        <img className="w-100 rounded shadow" src="/images/landing/payment_page_demo.webp" />
                    </div>
                    <div className="payment-section-table col-lg-6 col-md-6 py-5" >
                        <div className="payment-section-container">
                            <h3 className="payment-section-main-heading">Choose as per your convenience</h3>
                            {/* <p className="lead">Crow's nest schooner ho scallywag hail-shot gabion salmagundi. Doubloon careen code of conduct lugsail hulk ye long clothes. </p>
                            <a href="#" className="btn btn-outline-dark">Read More</a> */}

                            <div id="section">
                                <h6>1. Bank Transfer</h6>
                                    <div className="payment-details px-2 mb-3 box-shadow">
                                        <div className="row bank-details-row">
                                            <div className="col-lg-6 col-md-6 col-sm-6 bank-details-col py-2">Bank Name</div>
                                            <div className="col-lg-6 col-md-6 col-sm-6 bank-details-col py-2">HDFC BANK</div>
                                        </div>
                                        <div className="row bank-details-row">
                                            <div className="col-lg-6 col-md-6 col-sm-6 bank-details-col py-2">Account Type</div>
                                            <div className="col-lg-6 col-md-6 col-sm-6 bank-details-col py-2">Current Account</div>
                                        </div>
                                        <div className="row bank-details-row">
                                            <div className="col-lg-6 col-md-6 col-sm-6 bank-details-col py-2">Account Name</div>
                                            <div className="col-lg-6 col-md-6 col-sm-6 bank-details-col py-2">Tripzygo International</div>
                                        </div>
                                        <div className="row bank-details-row">
                                            <div className="col-lg-6 col-md-6 col-sm-6 bank-details-col py-2">Account Number</div>
                                            <div className="col-lg-6 col-md-6 col-sm-6 bank-details-col py-2">50200068661036</div>
                                        </div>
                                        <div className="row bank-details-row">
                                            <div className="col-lg-6 col-md-6 col-sm-6 bank-details-col py-2">IFSC code</div>
                                            <div className="col-lg-6 col-md-6 col-sm-6 bank-details-col py-2">HDFC0005209</div>
                                        </div>
                                    </div>
                            </div>
                            <h6>2. Scan and Pay</h6>

                            <div className="qr-code-container">
                                <img className="pricing-plan__offer" src='/images/qr_code.webp'/></div>
                            <br />
                            <h6>3. Debit/Credit Card</h6>
                            <p className="payment-note">(Note: You have to pay additional 2.5% bank charges on your final payment amount)</p>
                            
                            <form id="donateForm" ></form>
                            
                            {/* <div className="entry-meta d-flex align-lightbox-center justify-content-between">
                                <div className="entry-button d-flex align-items-center mb-2">
                                    <form> <script src="https://checkout.razorpay.com/v1/payment-button.js"
                                        data-payment_button_id="pl_L5YrGuHGZdF2TZ"
                                        data-button_text="Click here to pay"
                                        data-button_theme="brand-color" async>
                                    </script></form>
                                </div>

                            </div> */}

                        </div>
                    </div>
                </div>
            </div>
            <section className="trending pt-2 pb-4">
                <div className="container rounded bg-grey">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="description mb-0">
                                <div className="row payment-box ">
                                    <div className="col-lg-12 col-md-12">
                                        <div className=" p-4 rounded ">
                                            <p className="contact-line-banner">For further information and query, feel free to contact your travel expert<br />
                                                <span className="contact-line-banner-bold">Or Call us on: 74940-09400</span>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </section>
            {/* <script src="/js/readmore.js"></script> */}
        </div>
    );
}
