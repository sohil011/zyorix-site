"use client";
import { useState } from "react";

export default function CookieConsent(){
  const [show,setShow]=useState(true);
  function accept(){
    setShow(false);
    const s=document.createElement("script");
    s.src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXX";
    document.head.appendChild(s);
    // @ts-ignore
    window.dataLayer=window.dataLayer||[];
    // @ts-ignore
    function gtag(){window.dataLayer.push(arguments);}
    // @ts-ignore
    gtag("js", new Date()); gtag("config", "G-XXXXXXX", { anonymize_ip:true });
  }
  if(!show) return null;
  return (
    <div role="dialog" aria-live="polite" style={{position:"fixed",inset:"auto 16px 16px 16px",background:"#0b132b",color:"#fff",padding:"12px",borderRadius:"12px",zIndex:9999,display:"flex",justifyContent:"space-between",gap:"12px"}}>
      <span>We use analytics only with your consent.</span>
      <button onClick={accept} aria-label="Accept analytics cookies">Accept</button>
    </div>
  );
}
