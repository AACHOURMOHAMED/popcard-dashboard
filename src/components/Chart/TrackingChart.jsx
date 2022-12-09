import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Line } from "react-chartjs-2";
import { BsFillCalendar2WeekFill } from "react-icons/bs"
import {
  Chart as chartjs,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
} from "chart.js";
import Card from "../Card";
import { fetchTrackingChart } from "../../store/actions/generalStatsActions";
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'

chartjs.register(LineElement, CategoryScale, LinearScale, PointElement);

const TrackingChart = () => {
  const [date, setDate] = useState(new Date());

  const dispatch = useDispatch();
  const tracking = useSelector((state) => state.generalStats);
  const { trackingChart, topProfiles } = tracking;
  useEffect(() => {
    dispatch(fetchTrackingChart());
  }, [dispatch]);

  const data = {
    labels: trackingChart?.data.map(
      (item) => item._id.day + "/" + item._id.month + "/" + item._id.year
    ),
    datasets: [
      {
        label: "Nombre d'utilisateurs",
        data: trackingChart?.data.map((item) => item.total_click),
        backgroundColor: "rgb(204, 183, 183)",
        borderColor: "rgb(204, 183, 183)",
        borderWidth: 4,
        pointBackgroundColor: "rgb(204, 183, 183)",
        pointBorderColor: "rgb(204, 183, 183)",
        pointRadius: 5,
        pointHoverRadius: 10,
        pointHoverBackgroundColor: "rgb(204, 183, 183)",
        pointHoverBorderColor: "rgb(204, 183, 183)",
        pointHitRadius: 30,
        pointBorderWidth: 0,
        tension: 0.5,
      },
      {
        label: "Nombre d'utilisateurs",
        data: trackingChart?.data.map((item) => item.total_open),
        backgroundColor: "",
        borderColor: "rgb(78, 49, 49)",
        borderWidth: 4,
        pointBackgroundColor: "rgb(78, 49, 49)",
        pointBorderColor: "rgb(78, 49, 49)",
        pointRadius: 5,
        pointHoverRadius: 10,
        pointHoverBackgroundColor: "rgb(78, 49, 49)",
        pointHoverBorderColor: "rgb(78, 49, 49)",
        pointHitRadius: 30,
        pointBorderWidth: 0,
        tension: 0.5,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,

    plugins: {
      legend: {
        position: "bottom",
        labels: {
          color: "rgb(78, 49, 49)",
          font: {
            size: 16,
          },
        },
      },
    },
    scales: {
      x: {
        grid: {
          display: false,
        },
      },
      y: {
        ticks: {
          callback: (value) => value + "k",
        },
        grid: {
          borderDash: [10],
        },
      },
    },
  };

  return (
    <Card>
      <div className="w-full">
        <div className="flex items-center text-primary mb-6 mt-5">
          <div className="flex flex-col items-start mr-5 relative">
            <h2 className="xl:text-xl font-semibold">Date de debut</h2>
            <DatePicker
              selected={date}
              onChange={(date) => setDate(date)}
              dateFormat="dd/MM/yyyy"
              className="border-secondary relative rounded-lg border-opacity-60 border-[1px] py-2 px-6 mt-2 focus:outline-none"
            />
            <BsFillCalendar2WeekFill className="absolute right-4 top-[2.8rem]" />
          </div>
          <div className=" relative flex flex-col items-start mr-5">
            <h2 className="xl:text-xl font-semibold">Date de fin</h2>
            <DatePicker
              selected={date}
              onChange={(date) => setDate(date)}
              dateFormat="dd/MM/yyyy"
              className="border-secondary relative rounded-lg border-opacity-60 border-[1px] py-2 px-6 mt-2 focus:outline-none"
            />
            <BsFillCalendar2WeekFill className="absolute right-4 top-[2.8rem]" />
          </div>
          <div className="flex flex-col items-start">
            <h2 className="xl:text-xl font-semibold">Profil</h2>
            <select className="border-secondary rounded-lg border-opacity-60 max-w-[300px] border-[1px] py-2 px-6 mt-2 focus:outline-none">
              <option>Choisissez un profil</option>
              {topProfiles?.data.map((item) => (
                <option key={item._id}>{item.name}</option>
              ))}
            </select>
          </div>
        </div>

        <div className="flex items-center justify-end mb-5 mr-[3rem]">
          <div className="flex items-center ">
            <div className="xl:w-5 xl:h-5 h-2 w-2 rounded-full bg-[#4E3131] mr-2" />
            <h2 className="xl:text-xl text-[0.8rem] font-semibold">Ouverture de profil</h2>
          </div>
          <div className="flex items-center ml-10">
            <div className="xl:w-5 xl:h-5 h-2 w-2 rounded-full bg-[#CCB7B7] mr-2" />
            <h2 className="xl:text-xl text-[0.8rem] font-semibold">Ajout aux contacts</h2>
          </div>
        </div>
        <div
          className="
           flex items-center justify-center
        "
        >
          <Line data={data} options={options} />
        </div>
      </div>
    </Card>
  );
};

export default TrackingChart;
