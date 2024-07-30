/* eslint-disable react/prop-types */
import '../../style/currentWeather.css';

const CurrentWeather = ({ data }) => {
  return (
    <div className="weather">
      <div className="top">
        <div>
          <p className="city">
            {data.name}, {data.sys.country}
          </p>
          <p className="weather-description">{data.weather[0].main}</p>
        </div>
        <img
          src={`../../public/icons/${data.weather[0].icon}.png`}
          alt="wether"
          className="weather-icon"
        />
      </div>

      <div className="bottom">
        <p className="temperature">{data.main.temp.toFixed()}°C</p>
        <div className="details">
          <div className="parameter-row">
            <span className="parameter-label">Details</span>
          </div>
          <div className="parameter-row">
            <span className="parameter-label">Feels Like</span>
            <span className="parameter-value">
              {data.main.feels_like.toFixed()}°C
            </span>
          </div>
          <div className="parameter-row">
            <span className="parameter-label">Wind</span>
            <span className="parameter-value">{data.wind.speed} m/s</span>
          </div>
          <div className="parameter-row">
            <span className="parameter-label">Humidity</span>
            <span className="parameter-value">{data.main.humidity}%</span>
          </div>
          <div className="parameter-row">
            <span className="parameter-label">Pressure</span>
            <span className="parameter-value">{data.main.humidity} hPa</span>
          </div>
        </div>
      </div>
    </div>
  );
};
export default CurrentWeather;
