import * as React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Routes, Route} from "react-router-dom" 
import {NavBar} from '../components/NavBar';
import {SearchBar} from '../components/SearchBar';
import {MostPopular} from '../components/MostPopularDoctors';
import {MostPopularHospitals} from '../components/MostPopularHospitals';

export function Home() {
    return(
    <>
        <NavBar></NavBar>
        <SearchBar></SearchBar>
        <div style={{height : '20px'}}></div>
        <MostPopular></MostPopular>
        <MostPopularHospitals></MostPopularHospitals>
    </>
    );
}