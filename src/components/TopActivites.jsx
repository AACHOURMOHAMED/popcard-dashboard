import React, { useEffect } from 'react'
import { GiConcentricCrescents } from 'react-icons/gi'
import { useDispatch, useSelector } from 'react-redux'
import { fetchTopActivities } from '../store/actions/generalStatsActions'
import Card from './Card'

const TopActivites = () => {
    const dispatch = useDispatch()
    const topActivites = useSelector(state => state.generalStats)
    const { topActivities } = topActivites

    useEffect(() => {
        dispatch(fetchTopActivities())
    }, [dispatch])

  return (
    <div className="w-full ">
      <div className="flex items-center text-primary mb-6">
        <GiConcentricCrescents className="text-[1.5rem] xl:text-[2rem] mr-2" />
        <h2 className="text-lg xl:text-2xl font-semibold">
          Top 10 des utilisateurs par activite
        </h2>
      </div>
      <Card>
        <div className="flex flex-col items-center">
          <div className="flex justify-around w-full mt-2">
            <h2 className="text-primary min-w-[200px] ml-4 font-semibold xl:text-[1.2rem]">Utilisateur</h2>
            <h2 className="text-primary font-semibold xl:text-[1.2rem]">Nb Ouvertures</h2>
            <h2 className="text-primary font-semibold xl:text-[1.2rem]">Nb Ajouts</h2>
            <h2 className="text-primary font-semibold xl:text-[1.2rem]">
              Profil
            </h2>
          </div>
          <hr className="xl:my-5 my-2 bg-secondary border-dashed w-full" />
          <div className="max-h-[200px] overflow-auto w-full 
           scrollbar-thump-primary 
          ">
            {topActivities?.data.map((act, index) => (
              <div key={index}>
                <div  className="flex w-full bg-bl max-h-[50px]">
                  <div className="flex items-center justify-around w-full">
                    <span className="bg-primary text-white text-center rounded-full  w-[25px] h-[25px]">
                      {index + 1}
                    </span>
                    <div className="flex  min-w-[300px] items-center">
                      {!act.profile_picture ? (
                        <img
                            className="w-[20px] h-[20px] rounded-full"
                            src={act.profile_picture}
                            alt="logo"
                        />
                      ) : (
                        <img
                            className="w-[25px] h-[25px] object-cover rounded-full"
                            src="https://www.pngitem.com/pimgs/m/146-1468479_my-profile-icon-blank-profile-picture-circle-hd.png"
                            alt="logo"
                            
                            />
                      )}
                      <span className="ml-2">{act.first_name}</span>
                      <span className="ml-2">{act.last_name}</span>
                    </div>
                    <span className="font-semibold xl:text-[1.2rem] min-w-[100px]">
                      {act.total_open}
                    </span>
                    <span className="font-semibold xl:text-[1.2rem] min-w-[100px]">
                      {act.total_add_to_contact}
                    </span>
                    <span className="font-semibold xl:text-[1.2rem] min-w-[100px]">
                      {act.profile}
                    </span>
                  </div>
                </div>
                <hr className="xl:my-3 my-2 bg-secondary border-dashed w-full" />
              </div>
            ))}
          </div>
          <button className="bg-black text-white py-2 px-4 rounded-3xl mt-2 xl:my-[1.2rem]">Charger toute la list</button>
        </div>
      </Card>
    </div>
  )
}

export default TopActivites