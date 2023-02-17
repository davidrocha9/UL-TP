import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import VaccinesIcon from '@mui/icons-material/Vaccines';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import Input from '@mui/material/Input';
import SearchIcon from '@mui/icons-material/Search';
import Divider from '@mui/material/Divider';
import Button from '@mui/material/Button';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import Carousel from 'react-elastic-carousel';
import { DoctorCard } from '../partials/Card';
import {useState,useEffect} from 'react';
import {firestore, storage} from '../firebase/config';
import "react-multi-carousel/lib/styles.css";
import { Fragment } from "react";

import {
    BrowserRouter as Router,
    Routes,
    Switch,
    Route,
    Link,
    useParams,
    useRouteMatch
  } from "react-router-dom";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

const ariaLabel = { 'aria-label': 'description' };

export function MostPopular() {
    const [doctors, setDoctors] = React.useState([]);

    const fetchDoctors = async () => {
        const response = firestore.collection('doctors');
        const req = await response.get();
        
        const tempDoctors = req.docs.map((doc) => {
            return {...doc.data(), id: doc.id};
        });

        setDoctors(tempDoctors); 
    }

    React.useEffect(() => {
        fetchDoctors();
    }, []);

    const breakPoints = [
        {width: 500, itemsToShow: 2},
        {width: 768, itemsToShow: 3},
        {width: 1200, itemsToShow: 4},
        {width: 1500, itemsToShow: 5}
    ];

    return (

        <Box sx={{ flexGrow: 1, display: 'flex', height: '100%', paddingRight: "5vw", paddingLeft: "5vw", paddingBottom: "5vw"}}>
            <Grid container spacing={0} sx={{height: "100%", display: "flex", alignItems: "center", boxShadow : "0px"}}>
                <Grid item xs={3}>
                    <p style={{fontSize : '2.5rem'}}>Most Popular Doctors in Poland</p>
                    <p style={{fontSize : '1.5rem', color:'#666666'}}>87% of patients gave these doctors 5 stars</p>
                    <p style={{fontSize : '1rem', color:'#666666', textDecoration: 'underline'}}>See all most popular doctors</p>
                </Grid>
                <Grid item xs={0.5} />
                <Grid item xs={8.5} style={{padding: '0px'}}>
                    <Carousel breakPoints={breakPoints}>
                        {doctors.map((doctor) => {
                            return (
                                <Link to={"/doctor/" + doctor.id}>
                                    <DoctorCard name={doctor.name} job={doctor.primary_care} city={doctor.city} score={doctor.score} nr_reviews={doctor.nr_reviews} img={doctor.profile_picture}/>
                                </Link>
                            );
                        }
                        )}
                    </Carousel>
                </Grid>
            </Grid>
        </Box>
        
  );
}