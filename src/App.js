import * as React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Routes, Route} from "react-router-dom" 
import { Home } from './pages/Home';
import { Doctor } from './pages/Doctor';
import { Workplace } from './pages/Workplace';
import {NavBar} from './components/NavBar';
import {SearchBar} from './components/SearchBar';
import {MostPopular} from './components/MostPopularDoctors';
import {MostPopularHospitals} from './components/MostPopularHospitals';

export default function App() {
  return (
    <>
      <Routes> 
        <Route path="/" element={<Home />}></Route>
        <Route path="/doctor/:id" element={<Doctor />}></Route>
        <Route path="/workplace/:id" element={<Workplace />}></Route>
        {/*<NavBar></NavBar>
        <SearchBar></SearchBar>
        <div style={{height : '20px'}}></div>
        <MostPopular></MostPopular>
        <MostPopularHospitals></MostPopularHospitals>*/}
      </Routes> 
    </>
  );
}