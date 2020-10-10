import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';

import card1 from '../Images/tire-services.png';
import card2 from '../Images/service-safety.png';
import card3 from '../Images/low-pressure.png';
import card4 from '../Images/peace-of-mind.png';
import slide1 from '../Images/slide-1.jpg';
import slide2 from '../Images/slide-2.png';
import slide3 from '../Images/slide-3.png';
import slide4 from '../Images/slide-4.png';
import slide5 from '../Images/slide-5.png';

const Home = () => {
  return (
    <div className="container-fluid">
      <div className="row justify-content-center" style={{backgroundColor: "#EFEFEF"}}>
        <div id="carouselIndicators" className="carousel slide" data-ride="carousel">
          <ol className="carousel-indicators">
            <li data-target="#carouselIndicators" data-slide-to="0" className="active"></li>
            <li data-target="#carouselIndicators" data-slide-to="1"></li>
            <li data-target="#carouselIndicators" data-slide-to="2"></li>
            <li data-target="#carouselIndicators" data-slide-to="3"></li>
            <li data-target="#carouselIndicators" data-slide-to="4"></li>
          </ol>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img className="d-block w-100" src={slide1} alt="welcome to nitrogeN2" />
            </div>
            <div className="carousel-item">
              <Link to="/about">
                <img className="d-block w-100" src={slide2} alt="quality customer service and care is our #1 priority" />
              </Link>
            </div>
            <div className="carousel-item">
              <Link to="why_n2">
                <img className="d-block w-100" src={slide3} alt="nitrogen-filled tires keep you safer on the road" />
              </Link>
            </div>
            <div className="carousel-item">
              <Link to="/services">
                <img className="d-block w-100" src={slide4} alt="if your tire pressure is low, check out our mobile services to get you back on the road" />
              </Link>
            </div>
            <div className="carousel-item">
              <Link to="/schedule_now">
                <img className="d-block w-100" src={slide5} alt="schedule your service with nitrogeN2 today!" />
              </Link>
            </div>
          </div>
          <a 
            className="carousel-control-prev" href="#carouselIndicators" 
            role="button"
            data-slide="prev"
          >
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="sr-only">Previous</span>
          </a>
          <a 
            className="carousel-control-next" 
            href="#carouselIndicators" 
            role="button"
            data-slide="next"
          >
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="sr-only">Next</span>
          </a>
        </div>
      </div>
      <div className="row justify-content-center" style={{ backgroundColor: "#EEEEEE" }}>
        <div className="col-md-8 col-lg-7 my-5">
          <h1 className="text-center">About Us</h1>
          <hr />
          <p className="text-center">
            We are a local Veteran-owned and operated company providing convenient mobile nitrogen tire services. We are dedicated to upholding the highest level of quality customer service, professionalism, and safety in the greater Austin community!
          </p>
        </div>
      </div>
      {/* <div className="row justify-content-center">
        <div className="col-md-8 my-4">
          <div className="card-deck">
            
          </div>
        </div>
      </div> */}
      <div className="row justify-content-center">
        <div className="col-md-10 mb-5 pt-5">
          <div className="card-deck">
            <div className="card border-dark">
              <img className="card-img-top mt-4 mx-auto" src={card1} style={{width: "60px"}} alt="" />
              <div className="card-body">
                <h5 className="card-title text-center">N<sub>2</sub> Tire Services</h5>
                <p className="card-text text-center">
                  Our mobile service will quickly and completely purge the air in your tires and fill them with pure nitrogen. The aviation industry and NASCAR have used it for decades! Trust the pros, we got you covered!
                </p>
              </div>
            </div>
            <div className="card border-dark">
              <img className="card-img-top mt-4 mx-auto" src={card2} style={{width: "60px"}} alt="" />
              <div className="card-body">
                <h5 className="card-title text-center">Pressure Low?</h5>
                <p className="card-text text-center">
                  TPMS (Tire Pressure Monitoring System) trying to get your attention? Quickly and easily book an appointment for a quick nitrogen top off! We inspect and refill your tires with pure N2 and reset your TPMS. We’ll come to you!
                </p>
              </div>
            </div>
            <div className="card border-dark">
              <img className="card-img-top mt-4 mx-auto" src={card3} style={{width: "60px"}} alt="" />
              <div className="card-body">
                <h5 className="card-title text-center">Quality Service and Safety</h5>
                <p className="card-text text-center">
                  Our free tire safety inspections include a measurement of each tire’s tread depth with a valve stem and core leak check. Valve or core leaking? We’ll replace it on the spot! Your safety on the road is our #1 priority!
                  </p>
              </div>
            </div>
            <div className="card border-dark">
              <img className="card-img-top mt-4 mx-auto" src={card4} style={{width: "60px"}} alt="" />
              <div className="card-body">
                <h5 className="card-title text-center">Peace of Mind</h5>
                <p className="card-text text-center">
                  Reliability on the road? No problem!  Nitrogen filled tires (properly maintained) improve tire endurance, improve tire life, decrease fuel consumption, and improve tire running stability. We promise, your tires will thank you!
                  </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home;