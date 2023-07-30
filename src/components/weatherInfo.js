import React from 'react';

function WeatherInfo(props) {
  const Myinfo = props.infoFromFather;

  // Check if info is available
  if (!Myinfo) {
    return null; // Render nothing if info is not available yet
  }

  return (
    <div className='container square border border-2 text-center mt-4'>
      <h2 className='display-4'>Weather in {Myinfo.name}</h2>
      {Myinfo.weather && Myinfo.weather[0] && (//in order to await.
        <img
          src={`http://openweathermap.org/img/w/${Myinfo.weather[0].icon}.png`}
          alt="Weather Icon"
          width="150"
        />
      )}
      <h3>Condition: {Myinfo.weather && Myinfo.weather[0] && Myinfo.weather[0].main}</h3>
      <h3>Temperature: {Myinfo.main && Myinfo.main.temp}</h3>
      <h3>Wind: {Myinfo.wind && Myinfo.wind.speed}</h3>
    </div>
  );
}

export default WeatherInfo;
