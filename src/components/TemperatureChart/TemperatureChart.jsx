import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
} from 'recharts';
import './TemperatureChart.scss';

export const TemperatureChart = () => {
  const temp = useSelector(({weather})=> {
    if(weather.data){
      return weather.data.map(item=> ({
        time: item.date.split(/ /g)[1].slice(0, 5),
        temperature: item.temp,
      }));
    }
  return null;
  })

  return (
    <div className="weather">
      {temp !== null && (
        <LineChart
          width={1200}
          height={300}
          data={temp}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="time" interval={1} angle={0} dx={10} />
          <YAxis />
          <Legend />
          <Line type="monotone" dataKey="temperature" stroke="#8884d8" activeDot={{ r: 8 }} />
        </LineChart>
      )}
    </div>
  )
}
