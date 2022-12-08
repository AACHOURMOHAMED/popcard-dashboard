import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Line } from "react-chartjs-2";
import {
  Chart as chartjs,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
} from "chart.js";
import Card from "../Card";
import { fetchTrackingChart } from "../../store/actions/generalStatsActions";

chartjs.register(LineElement, CategoryScale, LinearScale, PointElement);

const TrackingChart = () => {
  const dispatch = useDispatch();
  const tracking = useSelector((state) => state.generalStats);
  const { trackingChart } = tracking;
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
        borderWidth: 1,
        pointBackgroundColor: "rgb(204, 183, 183)",
        pointBorderColor: "rgb(204, 183, 183)",
        pointRadius: 5,
        pointHoverRadius: 10,
        pointHoverBackgroundColor: "rgb(204, 183, 183)",
        pointHoverBorderColor: "rgb(204, 183, 183)",
        pointHitRadius: 30,
        pointBorderWidth: 2,
        tension: 0.5,
      },
      {
        label: "Nombre d'utilisateurs",
        data: trackingChart?.data.map((item) => item.total_open),
        backgroundColor: "",
        borderColor: "rgb(78, 49, 49)",
        borderWidth: 1,
        pointBackgroundColor: "rgb(78, 49, 49)",
        pointBorderColor: "rgb(78, 49, 49)",
        pointRadius: 5,
        pointHoverRadius: 10,
        pointHoverBackgroundColor: "rgb(78, 49, 49)",
        pointHoverBorderColor: "rgb(78, 49, 49)",
        pointHitRadius: 30,
        pointBorderWidth: 2,
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
          display: true,
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
          <div className="flex flex-col items-start mr-5">
            <h2 className="text-xl font-semibold">Date de debut</h2>
            <select className="border-secondary rounded-lg border-opacity-60 border-[1px] py-2 px-6 mt-2 focus:outline-none">
              {trackingChart?.data.map((item) => (
                <option
                  value={
                    item._id.day + "/" + item._id.month + "/" + item._id.year
                  }
                >
                  {item._id.day + "/" + item._id.month + "/" + item._id.year}
                </option>
              ))}
            </select>
          </div>
          <div className="flex flex-col items-start mr-5">
            <h2 className="text-xl font-semibold">Date de fin</h2>
            <select className="border-secondary rounded-lg border-opacity-60 border-[1px] py-2 px-6 mt-2 focus:outline-none">
              {trackingChart?.data.map((item) => (
                <option
                  value={
                    item._id.day + "/" + item._id.month + "/" + item._id.year
                  }
                >
                  {item._id.day + "/" + item._id.month + "/" + item._id.year}
                </option>
              ))}
            </select>
          </div>
          <div className="flex flex-col items-start">
            <h2 className="text-xl font-semibold">Profil</h2>
            <select className="border-secondary rounded-lg border-opacity-60 border-[1px] py-2 px-6 mt-2 focus:outline-none">
              <option>Tout</option>
            </select>
          </div>
        </div>

        <div className="flex items-center justify-end mb-5">
          <div className="flex items-center ">
            <div className="w-5 h-5 rounded-full bg-[#4E3131] mr-2" />
            <h2 className="text-xl font-semibold">Total Opens</h2>
          </div>
          <div className="flex items-center ml-10">
            <div className="w-5 h-5 rounded-full bg-[#CCB7B7] mr-2" />
            <h2 className="text-xl font-semibold">Total Clicks</h2>
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
