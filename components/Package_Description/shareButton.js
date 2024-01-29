

import React from 'react';
import { useRouter } from 'next/router';

import {
    WhatsappShareButton
  } from "react-share";

  function copy() {
    navigator.clipboard.writeText(window.location.href);
    alert("Copied to Clipboard")
  }

  
  
  

function shareButton() {

  const { asPath } = useRouter();
  const origin =
      typeof window !== 'undefined' && window.location.origin
          ? window.location.origin
          : '';

  const URL = `${origin}${asPath}`;
  // const URL = "https://app.clickup.com/t/85zrgmqxg"
  
  

     return (
<div class="floating-container">
<div class="floating-button">
    <i class="fa fa-share-alt"></i>
</div>
<div class="element-container">
    
      <span class="float-element">
      <WhatsappShareButton 
        title="Check out this Amazing Deal on Tripzygo! : "
        url={URL}
      >
    <i class="fab fa-whatsapp"></i>
    </WhatsappShareButton>
      </span>

      <span class="float-element">
        <button onClick={copy} style={{background:"none", color:"white"}}>
      <i class="far fa-copy"></i>
      </button>
      </span>
  </div>
</div>
    )
}

export default shareButton