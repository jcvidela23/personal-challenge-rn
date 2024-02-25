import * as React from 'react';
import { View, Text } from 'react-native';

import getWeather from '../api';

import { Forecast } from '../components';

export default () => {
  const [weatherData, setWeatherData] = React.useState<any>(null);

  React.useEffect(() => {
    getWeather().then(data => {
      setWeatherData(data);
    });
  }, []);

  React.useEffect(() => {
    console.log(weatherData);
  }, [weatherData]);

  return (
    <View>
      {weatherData && (
        <View>
          <Text>Weather Data</Text>
          <Text>City: {weatherData.name}</Text>
          <Text>Temperature: {weatherData.main.temp}</Text>
          <Text>Description: {weatherData.weather[0].description}</Text>
        </View>
      )}

      <View
        style={{
          borderBottomColor: 'black',
          borderBottomWidth: 1,
          marginVertical: 15,
        }}
      />

      {weatherData && (
        <View>
          <Text>Air Speed: {weatherData.wind.speed}</Text>
          <Text>Humidity: {weatherData.main.humidity}</Text>
          <Text>Min: {weatherData.main.temp_min}</Text>
          <Text>Max: {weatherData.main.temp_max}</Text>
        </View>
      )}

      <View
        style={{
          borderBottomColor: 'black',
          borderBottomWidth: 1,
          marginVertical: 15,
        }}
      />

      <Forecast
        data={[
          {
            time: 'Now',
            weather: 'Weather',
            temperature: '75°',
          },
          {
            time: '6 pm',
            weather: 'Weather',
            temperature: '75°',
          },
          {
            time: '7 pm',
            weather: 'Weather',
            temperature: '75°',
          },
          {
            time: '8 pm',
            weather: 'Weather',
            temperature: '75°',
          },
        ]}
      />
    </View>
  );
};
