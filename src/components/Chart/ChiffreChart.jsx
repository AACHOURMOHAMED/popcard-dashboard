import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Line } from "react-chartjs-2";
import {
  Chart as chartjs,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
} from "chart.js";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Card from "../Card";
import { fetchChiffre } from "../../store/actions/generalStatsActions";
import { BiCoinStack } from "react-icons/bi";
import { AiOutlinePercentage } from "react-icons/ai";
import { BsFillCalendar2WeekFill } from "react-icons/bs";

chartjs.register(LineElement, CategoryScale, LinearScale, PointElement);

const ChiffreChart = () => {
  
  const [date, setDate] = useState(new Date());
  const [date2,setDate2] = useState(new Date())

  const dispatch = useDispatch();
  const chiffreChart = useSelector((state) => state.generalStats);
  const { chiffre, topProfiles } = chiffreChart;
  useEffect(() => {
    dispatch(fetchChiffre());
  }, [dispatch]);

  const data = {
    labels: chiffre?.data.map((item) => {
      const month = item._id.month;
      const monthName =
        month === 1
          ? "Janvier"
          : month === 2
          ? "Février"
          : month === 3
          ? "Mars"
          : month === 4
          ? "Avril"
          : month === 5
          ? "Mai"
          : month === 6
          ? "Juin"
          : month === 7
          ? "Juillet"
          : month === 8
          ? "Août"
          : month === 9
          ? "Septembre"
          : month === 10
          ? "Octobre"
          : month === 11
          ? "Novembre"
          : "Décembre";
      return item._id.day + " " +monthName.slice(0, 3) + " " + item._id.year;
    }),
    datasets: [
      {
        label: "Nombre d'utilisateurs",
        data: chiffre?.data.map((item) => item.total_ca),
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
        data: chiffre?.data.map((item) => item.total_reductions),
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
          callback: (value) => value,
        },
        grid: {
          borderDash: [10],
        },
      },
    },
  };

  // sum of total_ca
  const total_ca_sum = chiffre?.data.reduce((acc, item) => {
    return acc + item.total_ca;
  }, 0);

  // sum of total_reductions
  const total_reductions_sum = chiffre?.data.reduce((acc, item) => {
    return acc + item.total_reductions;
  }, 0);
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
              selected={date2}
              onChange={(date2) => setDate2(date2)}
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
            <h2 className="xl:text-xl text-[0.8rem] font-semibold">
              Reductions commerciales
            </h2>
          </div>
          <div className="flex items-center ml-10">
            <div className="xl:w-5 xl:h-5 h-2 w-2 rounded-full bg-[#CCB7B7] mr-2" />
            <h2 className="xl:text-xl text-[0.8rem] font-semibold">
              Chiffre d'affaires
            </h2>
          </div>
        </div>
        <div
          className="
           flex items-center justify-center
        "
        >
          <Line data={data} options={options} />
        </div>
        <div className="flex items-center justify-start my-[2rem]">
          <div className="flex items-center bg-secondary px-5 py-3 rounded-2xl mr-[2rem]">
            <BiCoinStack className="bg-primary text-white text-[2rem] xl:text-[2.5rem] p-1 rounded-full mr-[1rem]" />
            <div>
              <h2 className="xl:text-xl font-semibold">
                Total CA sur la periode
              </h2>
              <span className="xl:text-[1.5rem] font-bold">
                {total_ca_sum} Dhs
              </span>
            </div>
          </div>
          <div className="flex items-center bg-secondary px-5 py-3 rounded-2xl">
            <AiOutlinePercentage className="bg-primary text-white text-[2rem] xl:text-[2.5rem] p-1 rounded-full mr-[1rem]" />
            <div>
              <h2 className="xl:text-xl font-semibold">
                Total CA sur la periode
              </h2>
              <span className="xl:text-[1.5rem] font-bold">
                {total_reductions_sum} Dhs
              </span>
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default ChiffreChart;
