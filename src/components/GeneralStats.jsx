import React, { useEffect } from "react";
import { CgProfile } from "react-icons/cg";
import { HiUsers } from "react-icons/hi";
import { BiLoader } from "react-icons/bi";
import { FaRocket } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { fetchGeneralStats } from "../store/actions/generalStatsActions";
import Card from "./Card";

const GeneralStats = () => {
  const dispatch = useDispatch();
  const generalStats = useSelector((state) => state.generalStats);
  const { generalStatus } = generalStats;

  const activeUsers = Math.floor(
    (generalStatus?.active / generalStatus?.total_collaborators) * 100
  );

  const onBording = Math.floor(
    (generalStatus?.onboarding / generalStatus?.total_collaborators) * 100
  );
  useEffect(() => {
    dispatch(fetchGeneralStats());
  }, [dispatch]);
  return (
    <div className="max-w-[250px]">
      <div className="flex flex-col gap-5">
        <Card>
          <div className="flex items-center py-0">
            <CgProfile className="mr-4 text-[1.7rem] xl:text-[2rem] bg-primary text-white p-1 rounded-full" />
            <div className="flex flex-col leading-tight">
              <span className=" font-medium text-[1rem] xl:text-[1.3rem]">
                Profils crees
              </span>
              <span className="text-primary font-semibold text-[1.3rem] xl:text-[2rem]">
                {generalStatus?.total_profiles}
              </span>
            </div>
          </div>
        </Card>
        <Card>
          <div className="flex items-center">
            <HiUsers className="mr-4 text-[1.7rem] xl:text-[2rem] bg-primary text-white p-1 rounded-full" />
            <div className="flex flex-col leading-tight">
              <span className=" font-medium text-[1rem] xl:text-[1.3rem]">
                Total Utilisateurs
              </span>
              <span className="text-primary font-semibold text-[1.3rem] xl:text-[2rem]">
                {generalStatus?.total_collaborators}
              </span>
            </div>
          </div>
        </Card>
        <Card>
          <div className="flex items-center">
            <BiLoader className="mr-4 text-[2rem] bg-primary text-white p-1 rounded-full" />
            <div className="flex flex-col leading-tight">
              <span className=" font-medium text-[1rem] xl:text-[1.3rem]">
                % Onboarding
              </span>
              <span className="text-primary font-semibold text-[1.3rem] xl:text-[2rem]">
                {onBording} %
              </span>
            </div>
          </div>
        </Card>
        <Card>
          <div className="flex items-center">
            <FaRocket className="mr-4 text-[2rem]  bg-primary text-white p-[5px] rounded-full" />
            <div className="flex flex-col leading-tight">
              <span className=" font-medium text-[1rem] xl:text-[1.3rem]">% Actifs</span>
              <span className="text-primary font-semibold text-[1.3rem] xl:text-[2rem]">
                {activeUsers} %
              </span>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default GeneralStats;
