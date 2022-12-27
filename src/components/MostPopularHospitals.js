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
import doctor2 from '../assets/doctor2.png';
import doctor3 from '../assets/doctor3.png';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

const ariaLabel = { 'aria-label': 'description' };

export function MostPopularHospitals() {
    const [value, setValue] = React.useState(null);
    var items = [
        {
            name: "Random Name #1",
            description: "Probably the most random thing you have ever seen!"
        },
        {
            name: "Random Name #2",
            description: "Hello World!"
        }
    ]

    const breakPoints = [
        {width: 500, itemsToShow: 2},
        {width: 768, itemsToShow: 3},
        {width: 1200, itemsToShow: 4},
        {width: 1500, itemsToShow: 5}
    ];

    return (
        <Box sx={{ flexGrow: 1, display: 'flex', height: '100%', paddingRight: "5vw", paddingLeft: "5vw", paddingBottom: "5vw", gap: '3vw'}}>
            <Grid container spacing={0} sx={{height: "100%", display: "flex", alignItems: "center", boxShadow : "0px"}}>
                <Grid item xs={3}>
                    <p style={{fontSize : '2.5rem'}}>Most Popular Hospitals in Poland</p>
                    <p style={{fontSize : '1.5rem', color:'#666666'}}>92% of patients gave these hospitals 5 stars</p>
                </Grid>
                <Grid item xs={0.1} />
                <Grid item xs={8.9} style={{padding: '0px'}}>
                    <Carousel breakPoints={breakPoints}>
                        <DoctorCard name="Dr. Cezary Laskowski" job="Dentist" city="Warsaw" score="4.62" nr_reviews="183" review="The best oncologist in Krakow." img={doctor2} />
                        <DoctorCard name="Dr. Cezary Laskowski" job="Dentist" city="Warsaw" score="4.62" nr_reviews="183" review="Doctor Olaf is very attentive and really understood my issues." img={doctor3} />
                        <DoctorCard name="Dr. Cezary Laskowski" job="Dentist" city="Warsaw" score="4.62" nr_reviews="183" review="The best oncologist in Krakow." img={doctor2} />
                    </Carousel>
                </Grid>
            </Grid>
        </Box>
  );
}