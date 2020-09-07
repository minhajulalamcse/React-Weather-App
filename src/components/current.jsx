import React from "react";
import axios from "axios";
class Current extends React.Component {
  state = {
    current: null,
  };
  componentDidMount() {
    axios
      .get(
        "http://api.openweathermap.org/data/2.5/weather?q=dhaka&appid=8205bdb71cd8d86e6f7e21451a9ba64a&units=metric"
      )
      .then((response) => {
        this.setState({
          current: response.data,
        });
      })
      .catch(function (error) {
        console.log(error);
      });
  }
  render() {
    return (
      <div className="center">
        <div className="container">
          <p className="flow-text">
            <i className="fa fa-map-marker"></i>{" "}
            <b>
              {this.state.current ? (
                <b>
                  {this.state.current.name}, {this.state.current.sys.country}
                </b>
              ) : null}
            </b>
          </p>

          <p className="currentTemperature">
            {this.state.current ? this.state.current.main.temp : null}
            &#8451;
          </p>
          <p>
            <b>
              Feels like{" "}
              {this.state.current ? this.state.current.main.feels_like : null}
              &#8451;.
            </b>
          </p>
          <div className="row">
            <div className="col s6">
              <p>
                <span className="fa fa-send"></span>{" "}
                <span>
                  Speed:{" "}
                  {this.state.current ? this.state.current.wind.speed : null}
                  2.6m/s
                </span>
              </p>
            </div>
            <div className="col s6">
              <p>
                <span className="fa fa-compass"> </span>{" "}
                <span>
                  Pressure:{" "}
                  {this.state.current ? this.state.current.main.pressure : null}
                  hPa
                </span>
              </p>
            </div>
            <div className="col s6">
              <p>
                <span className="fa fa-circle"> </span>{" "}
                <span>
                  Humidity:{" "}
                  {this.state.current ? this.state.current.main.humidity : 0}%
                </span>
              </p>
            </div>
            <div className="col s6">
              <p>
                <span className="fa fa-eye"> </span>{" "}
                <span>
                  Visibility:{" "}
                  {this.state.current ? this.state.current.visibility : 0}m
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Current;
