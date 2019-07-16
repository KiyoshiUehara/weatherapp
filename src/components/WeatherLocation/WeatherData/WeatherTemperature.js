import React from 'react';
import WeatherIcons from 'react-weathericons';
import {
    CLOUD,
    CLOUDY,
    SUN,
    RAIN,
    SNOW,
    WINDY,
} from './../../../constants/weathers'; 
import PropTypes from 'prop-types';

const icons = {
    [CLOUD]: "could",
    [CLOUDY]: "cloudy",
    [SUN]: "day-sunny",
    [RAIN]: "rain",
    [SNOW]: "snow",
    [WINDY]: "windy"

};
const getWeatherIcon = weatherState => {
    const icon = icons[weatherState];
    const sizeIcon = "4x";
    return <WeatherIcons className="wicon" name={(icon) ? icon : 'day-sunny' } size={sizeIcon} />
}
const WeatherTemperature = ({temperature, weatherState}) => { 
    
    return (
    <div className='weatherTemperatureCont'>
            {
                getWeatherIcon(weatherState)
            }
            <span className="temperature">{ `${temperature}`}</span>
            <span className="temperatureType">{`°C`}</span>
    </div>
    );
};

WeatherTemperature.propTypes = {
    temperature: PropTypes.number.isRequired,
    weatherState: PropTypes.string.isRequired,
};
export default WeatherTemperature;