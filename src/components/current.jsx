import React from "react";

const Current = (props) => {
  return (
    <div className="col s6">
      <div className="container">
        <p className="flow-text">
          <i className="fa fa-map-marker"></i> <b>Samair, BD</b>
        </p>
        <p className="gray-text">10:19pm, Saturday, August 29, 2020</p>

        <p className="currentTemperature">
          <i className="fa fa-sun-o"></i> 28&#8451;
        </p>
        <p>
          <b>Feels like 31&#8451;.</b> <b>Moderate rain.</b> <b>Light breeze</b>
        </p>
        <div className="row">
          <div className="col s6">
            <p>
              <span className="fa fa-send"></span> <span>2.6m/s SE</span>
            </p>
          </div>
          <div className="col s6">
            <p>
              <span className="fa fa-compass"> </span> <span>1004hPa</span>
            </p>
          </div>
          <div className="col s6">
            <p>
              <span className="fa fa-circle"> </span> <span>Humidity: 74%</span>
            </p>
          </div>
          <div className="col s6">
            <p>
              <span className="fa fa-eye"> </span>{" "}
              <span>Visibility: 3.5km</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Current;
