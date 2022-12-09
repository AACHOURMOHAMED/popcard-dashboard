import React from 'react'
import { MdDashboard } from 'react-icons/md'
import { AiFillPieChart } from 'react-icons/ai'
import { GrMoney } from 'react-icons/gr'
import TrackingChart from '../components/Chart/TrackingChart'
import GeneralStats from '../components/GeneralStats'
import Header from '../components/Header'
import ProfileStatus from '../components/ProfileStatus'
import TopActivites from '../components/TopActivites'
import TopProfiles from '../components/TopProfiles'
import ChiffreChart from '../components/Chart/ChiffreChart'

const DashboardScreen = () => {
  return (
    <>
        <Header />
        <div className='flex items-center text-primary font-medium mt-[4rem]'>
            <MdDashboard className="mr-2 text-[1.5rem]" />
            <h1 className='text-[1.5rem]'>Dashboard</h1>
        </div>
        <hr  className='border-none opacity-80 h-[1px] bg-secondary'/>
        <div className='mt-[3rem] xl:mt-[4rem] flex justify-between gap-4'>
          <GeneralStats />
          <TopProfiles  />
        </div>
        <div className='mt-[5rem] flex justify-between gap-4'>
          <TopActivites />
        </div>
        <div className='mt-[5rem] flex justify-between gap-4'>
          <ProfileStatus />
        </div>
        <div className='flex items-center justify-start mt-[5rem]'>
          <AiFillPieChart 
            className="mr-2 text-[2rem] text-primary"
          />
          <h1 className='text-[2rem] font-semibold text-primary '>Statistiques d'usage des cartes de visites</h1>
        </div>
        <div className='mt-[4rem]  gap-4'>
          <TrackingChart />
        </div>
        <div className='flex items-center justify-start mt-[5rem] text-primary'>
          <GrMoney 
            className="mr-2 text-[2rem] text-primary"
          />
          <h1 className='text-[2rem] font-semibold text-primary '>Suivi du CA</h1>
        </div>
        <div className='mt-[4rem]  gap-4 mb-[5rem]'>
          <ChiffreChart />
        </div>
    </>
  )
}

export default DashboardScreen