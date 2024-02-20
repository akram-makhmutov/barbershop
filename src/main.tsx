import React from 'react'
import ReactDOM from 'react-dom/client'
import Header from './components/Header/Header.tsx'
import Home from './components/Home/Home.tsx'
import FewServices from "./components/FewServices/FewServices.tsx"
import Choose from "./components/Choose/Choose.tsx"
import './index.css'
import '../global/assets/styles/reset.css'
import '../global/assets/styles/global.scss'
import {mine_data} from './components/Home/minedata'

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <Header/>
        <Home mine_data={mine_data as unknown as mine_data[]}/>
        <FewServices/>
        <Choose/>
    </React.StrictMode>
)