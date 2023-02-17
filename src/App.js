import * as React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Routes, Route} from "react-router-dom" 
import { Home } from './pages/Home';
import { Doctor } from './pages/Doctor';
import { Hospital } from './pages/Hospital';
import { Search } from './pages/Search';
import { SignIn } from './pages/SignIn';
import { SignUp } from './pages/SignUp';
import { FinishSignUp } from './pages/FinishSignUp';
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
        <Route path="/hospital/:id" element={<Hospital />}></Route>
        <Route path="/search/:specialty/:location/:date" element={<Search />}></Route>
        <Route path="/search/:specialty/:location/:date" element={<Search />}></Route>
        <Route path="/signin/" element={<SignIn />}></Route>
        <Route path="/signup/" element={<SignUp />}></Route>
        <Route path="/finishsignup/" element={<FinishSignUp />}></Route>
        {/*<NavBar></NavBar>
        <SearchBar></SearchBar>
        <div style={{height : '20px'}}></div>
        <MostPopular></MostPopular>
        <MostPopularHospitals></MostPopularHospitals>*/}
      </Routes> 
    </>
  );
}