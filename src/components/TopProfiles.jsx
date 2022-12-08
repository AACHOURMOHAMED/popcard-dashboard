import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchTopProfiles } from "../store/actions/generalStatsActions";
import { GiConcentricCrescents } from "react-icons/gi";
import Card from "./Card";

const TopProfiles = () => {
  const dispatch = useDispatch();
  const TopProfiles = useSelector((state) => state.generalStats);
  const { topProfiles } = TopProfiles;
 
  useEffect(() => {
    dispatch(fetchTopProfiles());
  }, [dispatch]);

  return (
    <div className="w-full max-w-[600px]">
      <div className="flex items-center text-primary mb-6">
        <GiConcentricCrescents className="text-[2rem] mr-2" />
        <h2 className="text-2xl font-semibold">
          Top 10 des profils par nomber d'utilisateurs
        </h2>
      </div>
      <Card>
        <div className="flex flex-col items-center">
          <div className="flex justify-around w-full mt-2">
            <h2 className="text-primary font-semibold text-[1.2rem]">Profil</h2>
            <h2 className="text-primary font-semibold text-[1.2rem]">
              Nb d'utilisateurs
            </h2>
          </div>
          <hr className="my-5 bg-secondary border-dashed w-full" />
          <div className="max-h-[200px] overflow-auto w-full 
           scrollbar-thump-primary 
          ">
            {topProfiles?.data.map((profile, index) => (
              <div key={index}>
                <div  className="flex w-full bg-bl max-h-[50px]">
                  <div className="flex items-center justify-around w-full">
                    <span className="bg-primary text-white text-center rounded-full  w-[25px] h-[25px]">
                      {index + 1}
                    </span>
                    <div className="flex  min-w-[300px] items-center">
                      {profile.logo ? (
                        <img
                          className="w-[20px] h-[20px] rounded-full"
                          src={profile.logo}
                          alt="logo"
                        />
                      ) : (
                        <GiConcentricCrescents className="text-[1.1rem]" />
                      )}
                      <span className="ml-2">{profile.name}</span>
                    </div>
                    <span className="font-semibold text-[1.2rem] min-w-[100px]">
                      {profile.total_collaborators}
                    </span>
                  </div>
                </div>
                <hr className="my-3 bg-secondary border-dashed w-full" />
              </div>
            ))}
          </div>
          <button className="bg-black text-white py-2 px-4 rounded-3xl my-[1.2rem]">Charger toute la list</button>
        </div>
      </Card>
    </div>
  );
};

export default TopProfiles;
