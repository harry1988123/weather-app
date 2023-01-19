import React from 'react'
import { Card } from 'antd';

const WeatherCard = ({ temprature, description, city, icon, visibility, wind, humidity }) => {
    console.log(icon)
    const { Meta } = Card;

    return (
        <Card
            style={{ width: 400, padding: '1rem', margin: '1rem' }}
            cover={
                <img
                    alt=""
                    className="windimg"
                    src={"wind.svg"}
                />
            }
        >
            <Meta
                title={
                    <div>
                        {city}
                        <br />Temprature {temprature} &deg; C
                        <br />Visibility {visibility}
                        <br />Wind Speed {wind} Km
                        <br />Humidity {humidity}%
                    </div>
                }
                description={"Description " + description}
            />
        </Card>
    )
}

export default WeatherCard