import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { GiConcentricCrescents } from "react-icons/gi";
import Card from "./Card";
import { fetchProfileStats } from "../store/actions/generalStatsActions";
import { AiFillPieChart } from "react-icons/ai";

const ProfileStatus = () => {
  const dispatch = useDispatch();
  const ProfileStats = useSelector((state) => state.generalStats);
  const { profileStats } = ProfileStats;

  useEffect(() => {
    dispatch(fetchProfileStats());
  }, [dispatch]);

  return (
    <div className="w-full ">
      <div className="flex items-center text-primary mb-6">
        <AiFillPieChart className="text-[1.5rem] xl:text-[2rem] mr-2" />
        <h2 className="text-lg xl:text-2xl font-semibold">
          Statistiques par profil
        </h2>
      </div>
      <Card>
        <div className="flex flex-col items-center">
          <div className="flex justify-around w-full mt-2">
            <h2 className="text-primary font-semibold xl:text-[1.2rem] w-[130px] ml-[5rem]">
              Profil
            </h2>
            <h2 className="text-primary font-semibold xl:text-[1.2rem] max-w-[130px]">
              Utilisateur en Onboarding
            </h2>
            <h2 className="text-primary font-semibold xl:text-[1.2rem] max-w-[130px]">
              {" "}
              utilisateurs Actifs
            </h2>
            <h2 className="text-primary font-semibold xl:text-[1.2rem] max-w-[130px]">
              {" "}
              Comptes desactives
            </h2>
          </div>
          <hr className="xl:my-5 my-2 bg-secondary border-dashed w-full" />
          <div
            className="max-h-[200px] overflow-auto w-full 
           scrollbar-thump-primary 
          "
          >
            {profileStats?.data.map((act, index) => (
              <div key={index}>
                <div className="flex w-full bg-bl max-h-[50px]">
                  <div className="flex items-center justify-around w-full">
                    <span className="bg-primary text-white text-center rounded-full  w-[25px] h-[25px]">
                      {index + 1}
                    </span>

                    <div className="flex  min-w-[150px] items-center">
                      {act.logo ? (
                        <img
                          className="w-[30px] bg-black object-contain h-[30px] rounded-full"
                          src={act.logo}
                          alt="logo"
                        />
                      ) : (
                        <img
                          className="w-[20px] h-[20px] rounded-full"
                          src="https://www.pngitem.com/pimgs/m/146-1468479_my-profile-icon-blank-profile-picture-circle-hd.png"
                          alt="logo"
                        />
                      )}
                      <span className="ml-2">{act.profile_name}</span>
                    </div>
                    {/* *************** */}
                    <div className="flex flex-col items-start">
                      <span className="font-medium text-[14px] min-w-[100px]">
                        {Math.floor(
                          (act.total_onboarding / act.total_collaborators) * 100
                        )}
                        /100 (
                        {Math.floor(
                          (act.total_onboarding / act.total_collaborators) * 100
                        )}
                        %)
                      </span>
                      <div className="h-[8px] rounded-lg bg-secondary w-[150px]">
                        <div
                          className={`bg-primary h-[8px] rounded-lg`}
                            style={{
                                width: `${Math.floor(
                                    (act.total_onboarding / act.total_collaborators) * 100
                                )}%`,
                            }}
                        ></div>
                      </div>
                    </div>
                    {/* ******************* */}
                    {/* *************** */}
                    <div className="flex flex-col items-start">
                      <span className="font-medium text-[14px] min-w-[100px]">
                        {Math.floor(
                          (act.total_active / act.total_collaborators) * 100
                        )}
                        /100 (
                        {Math.floor(
                          (act.total_active / act.total_collaborators) * 100
                        )}
                        %)
                      </span>
                      <div className="h-[8px] rounded-lg bg-secondary w-[150px]">
                        <div
                          className={`bg-primary h-[8px] rounded-lg`}
                          style={{
                            width: `${
                                act.total_active > act.total_collaborators ? 100 :
                                Math.floor(
                              (act.total_active / act.total_collaborators) * 100
                            )}%`,
                          }}
                        ></div>
                      </div>
                    </div>
                    {/* ******************* */}
                    <span className="font-semibold text-[1.2rem] min-w-[100px]">
                      {act.total_desactiver}
                    </span>

                  </div>
                </div>
                <hr className="my-3 bg-secondary border-dashed w-full" />
              </div>
            ))}
          </div>
          <button className="bg-black text-white py-2 px-4 rounded-3xl my-[0.3rem] xl:my-[1.2rem]">
            Charger toute la list
          </button>
        </div>
      </Card>
    </div>
  );
};

export default ProfileStatus;
