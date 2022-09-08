import { DailyForecast } from '../types/types';

export const getLocation = (): Promise<[number, number]> => {
  return new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const lat = position.coords.latitude;
        const lon = position.coords.longitude;
        resolve([lat, lon]);
      },
      (err) => {
        reject(err.message);
      }
    );
  });
};

export const degreesToDirection = (degree: number) => {
  degree = degree % 360;
  if (11.25 <= degree && degree < 33.75) {
    return 'NNE';
  } else if (33.75 <= degree && degree < 56.25) {
    return 'NE';
  } else if (56.25 <= degree && degree < 78.75) {
    return 'ENE';
  } else if (78.75 <= degree && degree < 101.25) {
    return 'E';
  } else if (101.25 <= degree && degree < 123.75) {
    return 'ESE';
  } else if (123.75 <= degree && degree < 146.25) {
    return 'SE';
  } else if (146.25 <= degree && degree < 168.75) {
    return 'SSE';
  } else if (168.75 <= degree && degree < 191.25) {
    return 'S';
  } else if (191.25 <= degree && degree < 213.75) {
    return 'SSW';
  } else if (213.75 <= degree && degree < 236.25) {
    return 'SW';
  } else if (236.25 <= degree && degree < 258.75) {
    return 'WSW';
  } else if (258.75 <= degree && degree < 281.25) {
    return 'W';
  } else if (281.25 <= degree && degree < 303.75) {
    return 'WNW';
  } else if (303.75 <= degree && degree < 326.25) {
    return 'NW';
  } else if (326.25 <= degree && degree < 348.75) {
    return 'NNW';
  } else {
    return 'N';
  }
};

export const formatToDailyForecast = (data: DailyForecast) => {
  const groupTemperaturesByDate = (data: DailyForecast) => {
    return data.list.reduce((obj: { [key: string]: number[] }, item) => {
      const date = item.dt_txt.slice(0, 10);
      if (!obj[date]) {
        obj[date] = [item.main.temp_min, item.main.temp_max];
      } else {
        obj[date].push(item.main.temp_min, item.main.temp_max);
      }
      return obj;
    }, {});
  };

  const temperatures = groupTemperaturesByDate(data);

  return data.list
    .filter((item) => {
      const time = item.dt_txt.slice(-8);
      return time === '12:00:00';
    })
    .map((item) => {
      const date = item.dt_txt.slice(0, 10);
      return {
        image: item.weather[0].icon,
        date,
        minTemp: Math.round(Math.min(...temperatures[date])),
        maxTemp: Math.round(Math.max(...temperatures[date])),
      };
    });
};
