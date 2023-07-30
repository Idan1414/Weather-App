import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import axios from 'axios';
import WeatherInfo from './weatherInfo';
import WeatherForm from './weatherForm';

function AppWeather() {
  const [info, setInfo] = useState({});
  const [error, setError] = useState('');
  const [query] = useSearchParams();

  useEffect(() => {
    doApi(query.get('q'));
  }, [query]);

  const doApi = async (cityName) => {
    try {
      let url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&APPID=2fe46a23e4343c6aa75afcb4ac32c18c&units=metric`;
      let resp = await axios.get(url);
      setInfo(resp.data);
      setError(''); // Clear any previous error if the API call is successful
    } catch (error) {
      setError('wrong city name, please write again');
    }
  };

  return (
    <React.Fragment>
      <WeatherForm doApiFromFather={doApi} />
      {error && <div style={{ color: 'red' }}>{error}</div>}
      <WeatherInfo infoFromFather={info} />
    </React.Fragment>
  );
}

export default AppWeather;
