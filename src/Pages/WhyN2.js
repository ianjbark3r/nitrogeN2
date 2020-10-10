import React from 'react';
import photo from '../Images/why_n2.jpeg';
import tireSafety from '../Images/tire-safety.png';
import coins from '../Images/coins.png';

const WhyN2 = () => {
  return (
    <div className="container-fluid">
      <div className="row justify-content-center mt-5">
        <div className="col-md-8">
          <h1>Why N<sub>2</sub>?</h1>
          <hr />
        </div>
      </div>
      <div className="row justify-content-center">
        <div className="col-md-3 p-2">
          <img className="img-fluid mb-3" src={photo} alt="" />
        </div>
        <div className="col-md-5">
          <p>
            Why nitrogen (N<sub>2</sub>), you ask? The aviation industry and
            NASCAR have been using N<sub>2</sub> in their tires decades. Their two main reasons: safety and performance. Nitrogen-filled tires have statistically shown to maintain tire pressure longer, thus directly improving vehicle gas mileage, tire life, and overall running stability. Trust the Pros, we’ve got you covered!
          </p>
        </div>
      </div>
      <div className="row justify-content-center pb-4">
        <div className="col-md-8">
          <h3>Nitrogen Maintains Tire Pressure</h3>
          <p>
            Typical compressed air one gets at the gas station contains about 78% nitrogen. Compressed nitrogen for tire inflation is much more homogenous, generally containing between 93-99% pure nitrogen. This means that N<sub>2</sub> for tires has fewer impurities, helping you maintain tire pressure for up to six times longer.
          </p>
          <p>
            Nitrogen is also more resilient to temperature changes. This means that throughout the seasons of the year, ambient change in temperature will not effect tire pressure changes as much, when using Nitrogen. This also contributes to a more stable running temperature while your wheels are turning on the road. Overall, this means less required maintenance.
          </p>
          <h3>Nitrogen-Filled Tires Boost Gas Mileage</h3>
          <p>
            Nitrogen inflated tires may help save money on gas. According to the <a href="https://fueleconomy.gov/feg/maintain.jsp">U.S. Department of Energy</a>, You can improve your gas mileage by up to 3% in some cases—by keeping your tires inflated to the proper pressure. Under-inflated tires can lower gas mileage by about 0.2% for every 1-psi drop in the average pressure of all tires. Properly inflated tires are safer and last longer. 
          </p>
          <p>  
            Since N<sub>2</sub>–filled tires maintain pressure longer, properly maintained, one can average a $.07/gallon fuel savings.
          </p>
          <h3>Nitrogen Improves Tire Life</h3>
          <p>
            By maintaining a more constant and stable pressure in your tires, nitrogen supports their ability to wear evenly across the tread surface, which is what gives you traction on the road. This means that when properly maintained, nitrogen-filled tires will help you get more life and longevity out of all four of your tires.
          </p>
          <h3>Nitrogen Enhances Running Stability</h3>
          <p>
            Since nitrogen doesn’t support moisture or combustion, you’ll be driving with a much more stable pressure in your tires versus compressed air. This means that with properly maintained nitrogen- filled tires, your tires handling and traction will perform at their best.
          </p>
          <h1 className="mt-5 mb-2" id="tire-safety">Tire Safety</h1>
          <p>
            Nitrogen cannot change the laws of physics, we always recommend a monthly tire pressure safety check.
          </p>
          <h3>Tire Safety Practices</h3>
          <p>
            Before even starting your vehicle, your tires should be properly maintained and in good working condition. The more you know and understand about your tire’s health, the better off you will be when driving your vehicle. There are four main factors when it comes to the health of your tires: tread depth, tire age, tire inflation/load and keeping up with routine maintenance.
          </p>
          <img 
            alt="Check air pressure every 30 days, replace tires after six years, rotate every 6000 miles, and maintain minimum tread depth of four thirty-seconds of an inch" 
            className="img-fluid" 
            src={tireSafety} 
          />
          <h3 className="mt-5">DIY Tire Tread Check</h3>
          <img 
            alt="A quarter and a penny can be used to accurately guage your tires wear" 
            className="img-fluid mb-5" 
            src={coins}
          />
        </div>
      </div>
    </div>
  )
}

export default WhyN2;