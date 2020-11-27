import React, { useMemo } from 'react';
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
    return [];
  });

  const actualDates = useMemo(() => {
    let dates = [];
    if (temp.length) {
      dates = temp.filter((item, i, arr) => i === 0 || item.date !== arr[i - 1].date);
      if (dates[1].index <= 4) {
        dates.shift();
      } else {
        dates.pop();
      }

      return dates;
    }

    return [];
  }, [temp]);

  return (
    <div className="weather">
      {!!temp.length && (
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
              activeDot={{ r: 1 }}
            />
          </LineChart>
          <div
            className="weather__dates"
            style={{
              paddingLeft: actualDates[0].index ? '40px' : '0px',
            }}
          >
            {actualDates.map((item) => (
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
