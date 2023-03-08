import Slider from "react-slick";
import Footer from "../components/Footer";
import Header from "../components/Header";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const AppStore = "/img/AppStore.png"
const GooglePlay = "/img/GooglePlay.png"
const Iphone = "/img/Iphone.png"
const playstoreIcon = "/img/ion_logo-google-playstore.png"
const Apple = "/img/Apple.png"
const Iphone2 = "/img/Iphone3.png"
const BgLight2 = "/img/BgLight2.png"
const Slider1 = "/img/slider-1.png"
const Slider2 = "/img/slider-2.png"
const Slider3 = "/img/slider-3.png"
const Webtext = "/img/webtext.png"
const Insights = "/img/Insights.png"
const ShareText = "/img/ShareText.png"
const Card1 = "/img/Card1.png"
const card1hover = "/img/card1hover.png"
const Card2 = "/img/Card2.png"
const card2hover = "/img/card2hover.png"
const Card3 = "/img/Card3.png"
const card3hover = "/img/card3hover.png"
const Card4 = "/img/Card4.png"
const card4hover = "/img/card4hover.png"
const Card5 = "/img/Card5.png"
const card5hover = "/img/card5hover.png"
const Card6 = "/img/Card6.png"
const card6hover = "/img/card6hover.png"
const Logo = '/logo.svg'


export default function Home() {


  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };

  return (
    <>
      <div className='homepage'>
        <div className='bannerbg'>
          <Header />
          <div className="container">
            <div className="textbanner">
              <h2>
                World's <span>1st</span> Interactive Social  Media Platform!
              </h2>
              <p>Home to a variety of interactive content, making it the perfect place to connect and engage with like-minded individuals.</p>
            </div>
            <div className="iconBox">
              <div className="boxDesign">
                <img src={playstoreIcon} />
                <p>Google Play</p>
              </div>
              <div className="boxDesign">
                <img src={Apple} />
                <p>App Store</p>
              </div>
            </div>
            <div className="iphoneDesign">
              {/* <div className="boxshodw" > 
              <img className="BgLight" src={BgLight} />
              </div> */}
              <img className="oneImage" src={Iphone} />
              <img className="towImage" src={Iphone2} />
            </div>
          </div>

        </div>
        {/* <div className="homesecoundBannerMain"></div> */}
        <div className="homethirdBannerMain"></div>
        <div className="secoundtext">
          <div className="container-md">
            <h4>Experience the Ultimate <br /> Interactive App!</h4>

          </div>
        </div>
        <div className="homefourBannerMain"></div>
        <div className="BannerSlider">
          <div className="sliderContainer" >

            <Slider {...settings}>
              <div className="sliderbox">
                <div className="slideralignbox">
                  <div className="imageSlider">
                    <img src={Slider1} />
                  </div>
                  <div className="sliderTextalign">
                    <img src={Webtext} />
                    <p>Lorem ipsum dolor sit amet consectetur. Gravida placerat tempor eleifend magna diam. Lacus amet amet nec integer. Suspendisse ac ut erat venenatis vivamus turpis arcu. Sit elit diam sit posuere semper.</p>
                  </div>
                </div>

              </div>
              <div className="sliderbox">
                <div className="slideralignbox">
                  <div className="imageSlider">
                    <img src={Slider2} />
                  </div>
                  <div className="sliderTextalign">
                    <img src={ShareText} />
                    <p>Lorem ipsum dolor sit amet consectetur. Gravida placerat tempor eleifend magna diam. Lacus amet amet nec integer. Suspendisse ac ut erat venenatis vivamus turpis arcu. Sit elit diam sit posuere semper.</p>
                  </div>
                </div>

              </div>
              <div className="sliderbox">
                <div className="slideralignbox">
                  <div className="imageSlider">
                    <img src={Slider3} />
                  </div>
                  <div className="sliderTextalign">
                    <img src={Insights} />
                    <p>Lorem ipsum dolor sit amet consectetur. Gravida placerat tempor eleifend magna diam. Lacus amet amet nec integer. Suspendisse ac ut erat venenatis vivamus turpis arcu. Sit elit diam sit posuere semper.</p>
                  </div>
                </div>

              </div>

            </Slider>
          </div>
        </div>
        <div className="homeFiveBannerMAin"></div>

        <div className="ExcitingApps">
          <div className="container">
            <div className="heading">
              <h4>Exciting App Features</h4>
            </div>
            <div className="exappsGrid">
              <div className="innerGrid">
                <img className="cimg1" src={Card1} />
                <img className="cimg2" src={card1hover} />
              </div>
              <div className="innerGrid">
                <img className="cimg1" src={Card2} />
                <img className="cimg2" src={card2hover} />
              </div>
              <div className="innerGrid">
                <img className="cimg1" src={Card3} />
                <img className="cimg2" src={card3hover} />
              </div>
              <div className="innerGrid">
                <img className="cimg1" src={Card4} />
                <img className="cimg2" src={card4hover} />
              </div>
              <div className="innerGrid">
                <img className="cimg1" src={Card5} />
                <img className="cimg2" src={card5hover} />
              </div>
              <div className="innerGrid">
                <img className="cimg1" src={Card6} />
                <img className="cimg2" src={card6hover} />
              </div>
            </div>

          </div>
        </div>

        <div className="boxBigShorts" >
          <div className="container">
            <div className="bgcolorbanner">
              <img src={Logo} />
              <h5>Download Bigshorts for Free Now</h5>
              <p>Unleash Your Creativity with BigShorts </p>
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
        </div>

      </div>
      <Footer />
    </>
  )
}
