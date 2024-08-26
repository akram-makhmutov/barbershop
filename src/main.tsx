import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter} from 'react-router-dom';
import Header from './components/Header/Header.tsx';
import Home from './components/Home/Home.tsx';
import FewTypes from './components/FewTypes/FewT ypes.tsx';
import Choose from './components/Choose/Choose.tsx';
import FewPrices from './components/FewPrices/FewPrices.tsx';
import FewServices from './components/FewServices/FewServices.tsx';
import BestHaircut from './components/BestHaircut/BestHaircut.tsx';
import Footer from './components/Footer/Footer.tsx';
import {mine_data} from './components/Home/minedata';
import './index.css';
import '../global/assets/styles/reset.css';
import '../global/assets/styles/global.scss';

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <BrowserRouter>
            <Header/>
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