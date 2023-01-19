import React, { useState } from 'react'
import { Input } from 'antd';
import WeatherCard from './WeatherCard';
import useAxios from 'axios-hooks'

const Weather = () => {
    const [location, setLocation] = useState("Delhi");
    const [{ data, loading, error }] = useAxios(
        `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=e203317f0df5474c05874e35b030eda3`
    )

    return (
        <>
            <Input placeholder='Enter the location' onChange={(event) => setLocation(event.target.value)} size="large" style={{ width: '60%' }} />
            {
                data && <WeatherCard temprature={Math.round(data.main.temp - 273.15)}
                    description={data.weather[0].description} city={data.name} icon={data.weather[0].icon + '.svg'} visibility={data.visibility / 1000} wind={data.wind.speed} humidity={data.main.humidity} />
            }
            {loading && <span>Loading...</span>}
            {error && <span>Error...</span>}
        </>
    )
}

export default Weather