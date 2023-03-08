import Link from 'next/link';
import React from 'react'
import { useState } from 'react';
const Logo = '/logo.svg'
const banner1 = '/contact-us.jpg';
const banner2 = '/about-us.jpg';
const banner3 = '/policy.jpg';
const playstoreIcon = "/img/ion_logo-google-playstore.png"

const googlePlay = '/google-play.png';
const appStore = '/app-store.png';
const Apple = "/img/Apple.png"
export default function Header(props) {
  const [toggle, setToggle] = useState(false);
  const [close, setClose] = useState(false);
  return (
    <div>
      <div className='header-wrapper container'>
        <div className='logo'>
        <Link href='/'><img src={Logo}></img></Link>
        </div>
        <div className='list-wrapper d-none d-md-flex'>
          <Link href='/about-us'><a>About</a></Link>
          <Link href='/'><a>Features</a></Link>
          <Link href='/contact-us'><a>Contact Us</a></Link>
          <button className='btn-bigshort' onClick={() => setToggle(!toggle)}>
            <span>Download</span>
            <svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M0 0.5L5 5.5L10 0.5H0Z" fill="white" />
            </svg>
            {
              toggle && (
                <div className='btn-hover'>
                  <div className='apple'>
                    <svg width="13" height="16" viewBox="0 0 13 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M9.68193 0.00800701C9.64793 -0.029993 8.42293 0.023007 7.35693 1.18001C6.29093 2.33601 6.45493 3.66201 6.47893 3.69601C6.50293 3.73001 7.99893 3.78301 8.95393 2.43801C9.90893 1.09301 9.71593 0.047007 9.68193 0.00800701ZM12.9959 11.741C12.9479 11.645 10.6709 10.507 10.8829 8.31901C11.0949 6.13001 12.5579 5.53001 12.5809 5.46501C12.6039 5.40001 11.9839 4.67501 11.3269 4.30801C10.8445 4.04926 10.3107 3.90102 9.76393 3.87401C9.65593 3.87101 9.28093 3.77901 8.50993 3.99001C8.00193 4.12901 6.85693 4.57901 6.54193 4.59701C6.22593 4.61501 5.28593 4.07501 4.27493 3.93201C3.62793 3.80701 2.94193 4.06301 2.45093 4.26001C1.96093 4.45601 1.02893 5.01401 0.376926 6.49701C-0.275074 7.97901 0.0659258 10.327 0.309926 11.057C0.553926 11.786 0.934926 12.981 1.58293 13.853C2.15893 14.837 2.92293 15.52 3.24193 15.752C3.56093 15.984 4.46093 16.138 5.08493 15.819C5.58693 15.511 6.49293 15.334 6.85093 15.347C7.20793 15.36 7.91193 15.501 8.63293 15.886C9.20393 16.083 9.74393 16.001 10.2849 15.781C10.8259 15.56 11.6089 14.722 12.5229 13.023C12.8699 12.233 13.0279 11.806 12.9959 11.741Z" fill="black" />
                    </svg>
                    <span>iOS</span>
                  </div>
                  <div className='apple'>
                    <svg width="16" height="19" viewBox="0 0 16 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M14.344 6.70989C13.637 6.70989 13.065 7.28189 13.065 7.98789V12.5179C13.065 12.8571 13.1998 13.1824 13.4396 13.4223C13.6795 13.6621 14.0048 13.7969 14.344 13.7969C14.6832 13.7969 15.0085 13.6621 15.2484 13.4223C15.4883 13.1824 15.623 12.8571 15.623 12.5179V7.98789C15.623 7.28189 15.051 6.70989 14.344 6.70989ZM1.65601 6.70989C0.949014 6.70989 0.377014 7.28189 0.377014 7.98789V12.5179C0.377014 12.8571 0.511766 13.1824 0.751625 13.4223C0.991484 13.6621 1.3168 13.7969 1.65601 13.7969C1.99523 13.7969 2.32054 13.6621 2.5604 13.4223C2.80026 13.1824 2.93501 12.8571 2.93501 12.5179V7.98789C2.93515 7.81994 2.90215 7.65361 2.8379 7.49843C2.77366 7.34325 2.67944 7.20227 2.56064 7.08356C2.44183 6.96485 2.30078 6.87073 2.14555 6.80661C1.99032 6.7425 1.82396 6.70963 1.65601 6.70989ZM10.545 2.90089L11.313 1.51289C11.3355 1.47337 11.3498 1.42979 11.3553 1.38467C11.3608 1.33955 11.3572 1.2938 11.3448 1.25007C11.3324 1.20634 11.3115 1.16551 11.2832 1.12994C11.2549 1.09437 11.2198 1.06478 11.18 1.04289C11.1403 1.0205 11.0965 1.00622 11.0513 1.00089C11.006 0.995564 10.9601 0.999289 10.9163 1.01185C10.8724 1.02441 10.8316 1.04556 10.796 1.07406C10.7604 1.10257 10.7308 1.13786 10.709 1.17789L9.92001 2.59789C9.33201 2.36289 8.68401 2.22989 8.00001 2.22989C7.31601 2.22989 6.66801 2.36189 6.08001 2.59689L5.29101 1.17889C5.26919 1.13886 5.23963 1.10357 5.20405 1.07506C5.16847 1.04656 5.12758 1.02541 5.08376 1.01285C5.03993 1.00029 4.99405 0.996565 4.94877 1.00189C4.90349 1.00722 4.85973 1.0215 4.82001 1.04389C4.78038 1.06598 4.7455 1.09567 4.71736 1.13126C4.68922 1.16685 4.66837 1.20764 4.65602 1.2513C4.64366 1.29496 4.64004 1.34062 4.64536 1.38568C4.65068 1.43074 4.66483 1.47431 4.68701 1.51389L5.45501 2.90189C4.07201 3.68989 3.14801 5.09889 3.14801 6.70989C3.14801 6.72089 3.14801 6.73089 3.15001 6.74389C3.14801 6.74989 3.14801 6.75689 3.14801 6.76289V6.76389H12.851V6.70989C12.852 5.09889 11.928 3.69089 10.545 2.90089ZM5.76001 4.86889C5.71451 4.86856 5.66952 4.85927 5.6276 4.84156C5.58569 4.82384 5.54768 4.79804 5.51573 4.76563C5.45122 4.70018 5.41535 4.61179 5.41601 4.51989C5.41668 4.42799 5.45382 4.34012 5.51927 4.27561C5.58472 4.2111 5.67312 4.17523 5.76501 4.17589C5.85691 4.17655 5.94478 4.21369 6.00929 4.27914C6.07381 4.34459 6.10968 4.43299 6.10901 4.52489C6.10835 4.61679 6.07121 4.70466 6.00576 4.76917C5.94031 4.83368 5.85191 4.86955 5.76001 4.86889ZM10.24 4.86889C10.1528 4.86225 10.0713 4.82292 10.0118 4.75876C9.95238 4.69461 9.91934 4.61036 9.91934 4.52289C9.91934 4.43542 9.95238 4.35117 10.0118 4.28701C10.0713 4.22286 10.1528 4.18352 10.24 4.17689C10.3318 4.17689 10.4198 4.21334 10.4847 4.27823C10.5496 4.34312 10.586 4.43112 10.586 4.52289C10.586 4.61465 10.5496 4.70266 10.4847 4.76755C10.4198 4.83243 10.3318 4.86889 10.24 4.86889ZM3.14801 14.1199C3.14801 14.7659 3.67301 15.2909 4.32201 15.2909H4.90801V17.6919C4.90801 18.0311 5.04277 18.3564 5.28263 18.5963C5.52248 18.8361 5.8478 18.9709 6.18701 18.9709C6.52623 18.9709 6.85154 18.8361 7.0914 18.5963C7.33126 18.3564 7.46601 18.0311 7.46601 17.6919V15.2909H8.53201V17.6919C8.53201 18.3989 9.10401 18.9699 9.80901 18.9699C10.518 18.9699 11.09 18.3989 11.09 17.6919V15.2909H11.676C12.324 15.2909 12.85 14.7669 12.85 14.1199V7.02789H3.14801V14.1199Z" fill="black" />
                    </svg>

                    <span>Android</span>
                  </div>
                </div>
              )
            }
          </button>
        </div>
        <div className='list-wrapper d-flex d-md-none'>
          <div className='bar-icon'>
            {
              close ? (<svg width="30" height="30" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#ffffff" onClick={()=>setClose(!close)}>

                <g id="SVGRepo_bgCarrier" stroke-width="0" />

                <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round" />

                <g id="SVGRepo_iconCarrier">

                  <path fill-rule="evenodd" clip-rule="evenodd" d="M19.207 6.207a1 1 0 0 0-1.414-1.414L12 10.586 6.207 4.793a1 1 0 0 0-1.414 1.414L10.586 12l-5.793 5.793a1 1 0 1 0 1.414 1.414L12 13.414l5.793 5.793a1 1 0 0 0 1.414-1.414L13.414 12l5.793-5.793z" fill="#ffffff" />

                </g>

              </svg>) : (
                <svg width="30" height="30" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#ffffff" onClick={()=>setClose(!close)}>

                  <g id="SVGRepo_bgCarrier" stroke-width="0" />

                  <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round" />

                  <g id="SVGRepo_iconCarrier"> <path d="M5 12H20" stroke="#ffffff" stroke-width="2" stroke-linecap="round" /> <path d="M5 17H20" stroke="#ffffff" stroke-width="2" stroke-linecap="round" /> <path d="M5 7H20" stroke="#ffffff" stroke-width="2" stroke-linecap="round" /> </g>

                </svg>
              )
            }
          </div>
        </div>
      </div>
      {
        props.class == 'contact' && (
          <div className='banner-wrapper'>
            <img src={banner1}></img>
            <div className='content-wrapper'>
              <h2>Contact Us</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Egestas felis et arcu, enim sit</p>
            </div>
          </div>
        )
      }
      {
        props.class == 'about' && (
          <div className='banner-wrapper'>
            <img src={banner2}></img>
          </div>
        )
      }
      {
        props.class == 'policy' && (
          <div className='banner-wrapper'>
            <img src={banner3}></img>
          </div>
        )
      }
      {
        close && (
          <div className='sidebar'>
            <ul>
              <li><Link href='/about-us'>About</Link></li>
              <li><Link href='/about-us'>Features</Link></li>
              <li><Link href='/about-us'>Contact Us</Link></li>
            </ul>
            <div className='download-wrapper'>
            <div className="iconBox">
                <div className="boxDesign">
                  <img src={playstoreIcon} />+

                  <p>Google Play</p>
                </div>
                <div className="boxDesign">
                  <img src={Apple} />
                  <p>App Store</p>
                </div>
              </div>
              </div>
          </div>
        )
      }
    </div>
  )
}
