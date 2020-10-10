import React from 'react';

const ScheduleNow = () => {
  return (
    <div className="container-fluid">
      <div className="row justify-content-center">
        <div className="col-md-8 my-5">
          <script src='https://squareup.com/appointments/buyer/widget/hq979sx173c049/LPMDYR6M8CT8K.js'></script>
          <h1>Schedule Now</h1>
          <hr />
          <form>
            <div className="form-row">
              <div className="form-group col-md-6">
                <label for="inputFirstName">First name:</label>
                <input 
                  className="form-control" 
                  type="text" 
                  id="inputFirstName"
                />
              </div>
              <div className="form-group col-md-6">
                <label for="inputLastName">Last name:</label>
                <input
                  className="form-control"
                  type="text"
                  id="inputLastName"
                />
              </div>
            </div>
            <div className="form-row">
              <div className="form-group col-md-4">
                <label for="inputPhone">Phone #:</label>
                <input
                  className="form-control"
                  type="text"
                  id="inputPhone"
                />
              </div>
              <div className="form-group col-md-8">
                <label for="inputEmail">Email:</label>
                <input
                  className="form-control"
                  type="text"
                  id="inputEmail"
                />
              </div>
            </div>
            <div className="form-row">
              <div className="form-group col-4 col-md-2">
                <label for="vehicleYear">Vehicle year:</label>
                <input
                  className="form-control"
                  id="vehicleYear"
                  placeholder="2020"
                  required
                />
              </div>
              <div className="form-group col-md">
                <label for="vehicleMake">Vehicle make:</label>
                <input
                  className="form-control"
                  id="vehicleMake"
                  placeholder="Ford"
                  required
                />
              </div>
              <div className="form-group col-md">
                <label for="vehicleModel">Vehicle model:</label>
                <input
                  className="form-control"
                  id="vehicleModel"
                  placeholder="Mustang"
                  required
                />
              </div>
            </div>
            <div className="form-group">
              <label for="address">Address:</label>
              <input
                className="form-control"
                id="address"
                placeholder="123 Main St"
                required
              />
            </div>
            <div className="form-row">
              <div className="form-group col-md">
                <label for="city">City:</label>
                <input
                  className="form-control"
                  id="city"
                  placeholder="Austin"
                  required
                />
              </div>
              <div className="form-group col-md">
                <label for="zip">ZIP:</label>
                <input
                  className="form-control"
                  id="zip"
                  placeholder="78745"
                  required
                />
              </div>
            </div>
            <div className="form-row">
              <div className="form-group form-check">
                <input 
                  className="form-check-input" 
                  id="check1" 
                  type="checkbox" 
                  value="" 
                />
                <label className="form-check-label" for="check1">
                  Use different address for service
                </label>
              </div>
            </div>
            <div className="form-row">
              <div className="form-group col-md-6">
                <label for="inputTireSize">Tire size (if known):</label>
                <input
                  className="form-control"
                  type="text"
                  id="inputTireSize"
                />
              </div>
              <div className="form-group col-md-6">
                <label for="inputTireAge">Tire age (if known):</label>
                <input
                  className="form-control"
                  type="text"
                  id="inputTireAge"
                />
              </div>
            </div>
          </form>
          <div className="form-row justify-content-end">
            <div className="col">
              <button 
                className="btn btn-primary mt-4"
                type="submit" 
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ScheduleNow;