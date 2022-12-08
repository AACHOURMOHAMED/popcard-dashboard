import Navbar from './components/Navbar';
import { Routes, Route } from 'react-router-dom';
import DashboardScreen from './screens/DashboardScreen';

function App() {
  return (
    <>
      <div className='flex'>
        <Navbar />
        <div className='w-[16rem] h-[100vh] left-0'/>
        <div className=' mt-[4rem] max-w-[1000px] w-full m-auto'>
          <Routes>
            <Route path="/" element={<DashboardScreen />} />
            <Route path='/profile' element={<h1>Hello</h1>}/>
          </Routes>
        </div>
      </div>
    </>
  );
}

export default App;
