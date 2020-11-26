import React from 'react';
import { useSelector } from 'react-redux';
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid,
} from 'recharts';
import './TemperatureChart.scss';

export const TemperatureChart = () => {
  const temp = useSelector(({ weather }) => {
    if (weather.data) {
      return weather.data.map((item, i) => ({
        date: item.date.split(/ /g)[0],
        time: item.date.split(/ /g)[1].slice(0, 5),
        temperature: item.temp,
        index: i,
      }));
    }
    return null;
  });

  return (
    <div className="weather">
      {temp !== null && (
        <>
          <LineChart
            width={1200}
            height={300}
            data={temp}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis
              dataKey="time"
              interval={1}
              angle={0}
              dx={10}
            />
            <YAxis type="number" />
            <Line
              type="monotone"
              dataKey="temperature"
              stroke="#8884d8"
              activeDot={{ r: 8 }}
            />
          </LineChart>
          <div className="weather__dates">
            {temp.filter((item, i, arr) => i === 0 || item.date !== arr[i - 1].date).map((item) => (
              <span
                className="weather__dates-item"
                key={item.date}
              >
                {item.date}
              </span>
            ))}
          </div>
        </>
      )}
    </div>
  );
};
