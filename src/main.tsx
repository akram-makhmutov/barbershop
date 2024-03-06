import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Header from './components/Header/Header.tsx';
import OurTeam from './components/OurTeam/OurTeam.tsx';
import Home from './components/Home/Home.tsx';
import FewTypes from './components/FewTypes/FewT ypes.tsx';
import Choose from './components/Choose/Choose.tsx';
import FewPrices from './components/FewPrices/FewPrices.tsx';
import FewServices from './components/FewServices/FewServices.tsx';
import BestHaircut from './components/BestHaircut/BestHaircut.tsx';
import Footer from './components/Footer/Footer.tsx';
import './index.css';
import '../global/assets/styles/reset.css';
import '../global/assets/styles/global.scss';
import {mine_data} from './components/Home/minedata';

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <BrowserRouter>
            <Header/>
            <Routes>
                <Route path='/team' element={<OurTeam/>} />
            </Routes>
            <Home mine_data={mine_data as unknown as mine_data[]}/>
            <FewTypes/>
            <Choose/>
            <FewPrices/>
            <FewServices/>
            <BestHaircut/>
            <Footer/>
        </BrowserRouter>
    </React.StrictMode>
)