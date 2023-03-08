import Link from 'next/link';
import React from 'react'
const logo = '/logo.svg';
export default function Footer() {
  return (
    <div className='footer container'>
      <div className='footer-wrapper'>
        <div className='logo'>
          <Link href='/'><img src={logo}></img></Link>
        </div>
        <div className='quick-links'>
          <button><Link href='/'><span>Features</span></Link></button>
          <button><Link href='/about-us'><span>About Us</span></Link></button>
          <button><Link href='/contact-us'><span>Contact Us</span></Link></button>
        </div>
        <div className='social-media-wrapper'>
          <svg width="25" height="26" viewBox="0 0 25 26" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M24.7811 13.0745C24.7811 6.25035 19.2833 0.718994 12.5001 0.718994C5.7169 0.718994 0.219116 6.25035 0.219116 13.0745C0.219116 19.2428 4.70904 24.3542 10.581 25.281V16.6466H7.46326V13.0737H10.581V10.3522C10.581 7.25575 12.4141 5.5446 15.2199 5.5446C16.5626 5.5446 17.9692 5.78613 17.9692 5.78613V8.8269H16.4194C14.8941 8.8269 14.4192 9.7799 14.4192 10.7575V13.0745H17.8251L17.2807 16.6458H14.4192V25.281C20.2912 24.3542 24.7811 19.2428 24.7811 13.0745Z" fill="white" />
          </svg>
          <svg width="29" height="30" viewBox="0 0 192 192" xmlns="http://www.w3.org/2000/svg" fill="none">

            <g id="SVGRepo_bgCarrier" stroke-width="0" />

            <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round" />

            <g id="SVGRepo_iconCarrier">

              <path stroke="#ffffff" stroke-width="12" d="M96 162c-14.152 0-24.336-.007-32.276-.777-7.849-.761-12.87-2.223-16.877-4.741a36 36 0 0 1-11.33-11.329c-2.517-4.007-3.98-9.028-4.74-16.877C30.007 120.336 30 110.152 30 96c0-14.152.007-24.336.777-32.276.76-7.849 2.223-12.87 4.74-16.877a36 36 0 0 1 11.33-11.33c4.007-2.517 9.028-3.98 16.877-4.74C71.663 30.007 81.847 30 96 30c14.152 0 24.336.007 32.276.777 7.849.76 12.87 2.223 16.877 4.74a36 36 0 0 1 11.329 11.33c2.518 4.007 3.98 9.028 4.741 16.877.77 7.94.777 18.124.777 32.276 0 14.152-.007 24.336-.777 32.276-.761 7.849-2.223 12.87-4.741 16.877a36 36 0 0 1-11.329 11.329c-4.007 2.518-9.028 3.98-16.877 4.741-7.94.77-18.124.777-32.276.777Z" />

              <circle cx="96" cy="96" r="30" stroke="#ffffff" stroke-width="12" />

              <circle cx="135" cy="57" r="9" fill="#ffffff" />

            </g>

          </svg>
          <svg width="29" height="22" viewBox="0 0 29 22" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M28.3988 3.6772C28.2363 3.03093 27.9196 2.44582 27.4826 1.98409C27.0331 1.50816 26.4823 1.16772 25.8821 0.994891C23.6357 0.33498 14.6359 0.33498 14.6359 0.33498C10.884 0.287403 7.13299 0.496658 3.40408 0.961562C2.80384 1.14715 2.25406 1.49521 1.80364 1.97476C1.36106 2.44936 1.04049 3.03462 0.873033 3.67586C0.47076 6.0912 0.275308 8.54367 0.289312 11.0002C0.274959 13.4545 0.469931 15.9062 0.873033 18.3246C1.03691 18.9631 1.35628 19.5457 1.80005 20.0163C2.24382 20.4869 2.79644 20.8269 3.40408 21.0069C5.68035 21.6654 14.6359 21.6654 14.6359 21.6654C18.3926 21.7131 22.1484 21.5038 25.8821 21.0389C26.4823 20.866 27.0331 20.5256 27.4826 20.0497C27.9195 19.588 28.2357 19.0028 28.3976 18.3566C28.8104 15.9422 29.0111 13.4887 28.9969 11.0309C29.0279 8.56268 28.8275 6.09762 28.3988 3.67586V3.6772ZM11.7747 15.5649V6.43683L19.2626 11.0015L11.7747 15.5649Z" fill="white" />
          </svg>
        </div>
      </div>
      <hr></hr>
      <div className='sub-footer'>
        <p>© Copyright © 2023 Bigshorts. All rights reserved</p>
        <div className='btn-wrapper'>
          <button><Link href='/privacy-policy'>Privacy Policy</Link></button>
          <button><Link href='/'>Terms & Condition</Link></button>
        </div>
      </div>
    </div>
  )
}
