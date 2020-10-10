import React from 'react';

import photo1 from '../Images/about_us-1.jpeg'
import photo2 from '../Images/about_us-2.jpeg'

const AboutUs = () => {
  return (
    <div className="container-fluid">
      <div className="row justify-content-center mt-5">
        <div className="col-md-8">
          <h1 id="what-we-do">What We Do</h1>
          <hr />
        </div>
      </div>
      <div className="row justify-content-center mt-2">
        <div className="col-md-4">
          <img 
            alt="" 
            className="img-fluid mb-3" 
            src={photo1} 
          />
        </div>
        <div className="col-md-4">
          <p>
            We are a local Veteran-owned and operated company providing convenient mobile nitrogen tire services. We are dedicated to upholding the highest level of quality customer service, professionalism, and safety in the greater Austin community!
          </p>
        </div>
      </div>
      <div className="row justify-content-center mt-5">
        <div className="col-md-8">
          <h1 id="leadership">Leadership</h1>
          <hr />
        </div>
      </div>
      <div className="col d-block d-md-none">
        <figure className="figure">
          <img
            alt=""
            className="figure-img img-fluid"
            src={photo2}
          />
          <figcaption className="figure-caption text-center">Cody Elliott, CEO of nitrogeN<sub>2</sub></figcaption>
        </figure>
      </div>
      <div className="row justify-content-center mt-2">
        <div className="col-md-4">
          <p>
            9/11 changed the world for all of us, and in 2003, at 22 years old, I enlisted in the United States Marine Corps, feeling this was how I could best serve and make an impact. I thrived serving in various combat and prototype units, working with some of America’s finest in infantry and amphibious assault vehicle battalions. A service related injury ended my military career as a Sergeant at age 29.
          </p>
          <p>
            My mechanical interest started at age 16, turning a wrench on my own car, and was fueled by the knowledge and skills learned and developed in the Marines. It was an easy choice to start my academic chapter pursuing a degree in mechanical engineering, however, 2 1/2 years later, fate led me to change my major to cell and molecular biology. I spent the next 6 years in the semiconductor industry, working alongside some of the best and brightest, revolutionizing engineering technology.
          </p>
          <p>
            Throughout my career, I had always had the dream of operating my own business, however, I didn’t want to start just any company; I wanted to make a difference. In August 2020, I made the decision to start nitrogeN2, with the belief that by providing a mobile nitrogen tire service, I could help keep people and families in the Austin community a little bit safer on the road. ~Semper Fidelis~
          </p>
        </div>
        <div className="col-md-4 d-none d-md-block">
          <figure className="figure">
            <img
              alt=""
              className="figure-img img-fluid"
              src={photo2}
            />
            <figcaption className="figure-caption text-center">Cody Elliott, CEO of nitrogeN<sub>2</sub></figcaption>
          </figure>
        </div>
      </div>
      <div className="row justify-content-center mt-5">
        <div className="col-md-8 mb-5">
          <h1 id="contact">Contact Us</h1>
          <hr />
          <p>Phone: (737) 224-2718</p>
          <p>Email: c.elliott@nitrogeN2.com</p>
        </div>
      </div>
    </div>
  )
}

export default AboutUs;