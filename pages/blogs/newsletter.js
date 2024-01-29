import React from 'react'
import axios from 'axios';
import { useState } from 'react'
import Router, { withRouter } from 'next/router'

const url = 'https://backend.tripzygo.in/newsletter';

export default function newsletter() {
    const [email_id, setEmail] = useState('');
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const resp = await axios.post(url, { email_id });
            
            alert("Submit Successfully");
            Router.push('/');
        } catch (error) {
            
        }
    };
    return (
        <div className="sidebar-item mb-4">
            <h3 class="black">Newsletter</h3>
            <div class="newsletter-form ">
                <p class="mb-3">Subscribe to our newsletter to stay up-to-date on our latest specials,
                    travel tips, and interesting stories.</p>
                <form action="#" method="get" onSubmit={handleSubmit} accept-charset="utf-8"
                    class="  align-items-center" >

                    <div className="form-group mb-4">
                        <input type="text" placeholder="Email Address" value={email_id} id="email" onChange={(e) => setEmail(e.target.value)} required />
                    </div>
                    <div className="comment-btn mb-2 pb-2 text-center border-b">
                        <input type="submit" className="nir-btn" id="submit1" value="submit" />
                    </div>


                </form>
            </div>
        </div>
    )
}