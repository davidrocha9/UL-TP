import * as React from 'react';
import {NavBar} from './components/NavBar';
import {SearchBar} from './components/SearchBar';
import {MostPopular} from './components/MostPopularDoctors';
import {MostPopularHospitals} from './components/MostPopularHospitals';

export default function App() {
  return (
    <>
      <NavBar></NavBar>
      <SearchBar></SearchBar>
      <div style={{height : '20px'}}></div>
      <MostPopular></MostPopular>
      <MostPopularHospitals></MostPopularHospitals>
    </>
  );
}