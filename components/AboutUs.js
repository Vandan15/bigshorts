import React from 'react'
const logo = './logo.svg';
export default function AboutUs() {
    return (
        <div className='about-us-wrapper'>
            <div className='main-box'>
                <div className='container'>
                    <div className='inner-box page'>
                        <img src={logo}></img>
                        <h3>About Us</h3>
                        <p>BigShorts, the world's first interactive social media platform that's designed to empower users with easy-to-use video creation tools. With BigShorts, you can capture and showcase your creativity, knowledge, and special moments of everyday life to a diverse and wide audience. Our platform is home to a variety of interactive content, making it the perfect place to connect and engage with like-minded individuals.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
