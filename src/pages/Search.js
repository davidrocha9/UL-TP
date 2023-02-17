import * as React from 'react';
import ReactDOM from 'react-dom';
import {NavBar} from '../components/NavBar';
import {SearchBar} from '../components/SearchBar';
import {MostPopular} from '../components/MostPopularDoctors';
import {MostPopularHospitals} from '../components/MostPopularHospitals';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import { HorizontalCard } from '../partials/HorizontalCard';
import { getFirestore, doc, getDoc } from "firebase/firestore";
import Button from '@mui/material/Button';

import {
    MDBCol,
    MDBContainer,
    MDBRow,
    MDBCard,
    MDBCardText,
    MDBCardBody,
    MDBCardImage,
    MDBBtn,
    MDBBreadcrumb,
    MDBBreadcrumbItem,
    MDBProgress,
    MDBProgressBar,
    MDBIcon,
    MDBListGroup,
    MDBListGroupItem
} from 'mdb-react-ui-kit';
import {firestore, storage} from '../firebase/config';
import { useParams } from 'react-router-dom';
import { snackbarClasses } from '@mui/material';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import VaccinesIcon from '@mui/icons-material/Vaccines';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import Input from '@mui/material/Input';
import SearchIcon from '@mui/icons-material/Search';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import moment from 'moment';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import TextField from '@mui/material/TextField';
import {Link, Routes, Route, useNavigate} from 'react-router-dom';
  
export function Search() {
    // get params
    const { specialty, location, date } = useParams();
    const navigate = useNavigate(); 

    // if date is type moment, convert to string
    if (date._isAMomentObject) {
        date = date.format('YYYY-MM-DD');
    }

    const [doctors, setDoctors] = React.useState([]);
    const [isLoading, setIsLoading] = React.useState(true);
    const [_specialty, setSpecialty] = React.useState(specialty);
    const [_location, setLocation] = React.useState(location);
    const [_date, setDate] = React.useState(moment());

    const fetchDoctors = async () => {
              
        const response = firestore.collection('doctors');
        const req = await response.get();

        const tempDoctors = req.docs.map((doc) => {
            return {...doc.data(), id: doc.id};
        });

        setDoctors(tempDoctors);
        setIsLoading(false);
    }

    React.useEffect(() => {
        //fetchDoctors();
        setIsLoading(false);
    }, []);
    
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    }

    const handleSubmit = (e) => {
        //e.preventDefault();
        //console.log(specialty, location, date)
        navigate("/search/" + _specialty + "/" + _location + "/" + _date.format('YYYY-MM-DD'));
    }

    const handleChangeSpecialty = (event) => {
        setSpecialty(event.target.value);
    };

    const handleChangeLocation = (event) => {
        setLocation(event.target.value);
    };

    if (!isLoading) {
    return (
        <section>
        <NavBar></NavBar>
        <MDBContainer className="py-5">
        <MDBRow>
            <MDBCol lg="4">
            <MDBCard className="mb-4">
                <MDBCardBody className="text-center">
                    <MDBCardText className="text-muted">Search Filters</MDBCardText>
                </MDBCardBody>
            </MDBCard>

            <form onSubmit={handleSubmit}>
                <MDBCard className="mb-4">
                    <MDBCardBody>
                    <MDBRow>
                        <FormControl fullWidth>
                            <InputLabel id="demo-simple-select-label">Specialty</InputLabel>
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                value={_specialty}
                                label="Specialty"
                                onChange={handleChangeSpecialty}
                            >
                                <MenuItem value={"Any"}>Any</MenuItem>
                                <MenuItem value={"Primary Care Doctor"}>Primary Care Doctor</MenuItem>
                                <MenuItem value={"Oncologist"}>Oncologist</MenuItem>
                                <MenuItem value={"Dermatologist"}>Dermatologist</MenuItem>
                            </Select>
                        </FormControl>
                    </MDBRow>
                    <hr />
                    <MDBRow>
                        <FormControl fullWidth>
                            <InputLabel id="demo-simple-select-label">Location</InputLabel>
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                value={_location}
                                label="Location"
                                onChange={handleChangeLocation}
                            >
                                <MenuItem value={"Any"}>Any</MenuItem>
                                <MenuItem value={"Lodz"}>Lodz</MenuItem>
                                <MenuItem value={"Warsaw"}>Warsaw</MenuItem>
                                <MenuItem value={"Krakow"}>Krakow</MenuItem>
                                <MenuItem value={"Wroclaw"}>Wroclaw</MenuItem>
                            </Select>
                        </FormControl>
                    </MDBRow>
                    <hr />
                    <MDBRow>
                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                            <DatePicker style={{width: "100%"}}
                                label="Today"
                                value={_date}
                                onChange={(_date) => {
                                    const d = new Date(_date);
                                    setDate(d);
                                }}
                                renderInput={(params) => <TextField {...params} />}
                            />
                        </LocalizationProvider>
                    </MDBRow>
                    <MDBRow style={{paddingTop: "20px"}}>
                        <button type="button" class="btn btn-primary" style={{width: "100%"}} type="submit" value="Submit">Search</button>
                    </MDBRow>
                    </MDBCardBody>
                </MDBCard>
            </form>
            </MDBCol>

            <MDBCol lg="8">
            <MDBCard className="mb-4">
                <MDBCardBody>
                    <MDBRow>
                        <MDBCardText style={{fontSize: "2.5rem"}}>Results</MDBCardText>
                    </MDBRow>
                </MDBCardBody>
            </MDBCard>
            
            {doctors.map((doctor) => {
                return (
                    <>
                        <HorizontalCard id={doctor.id} name={doctor.name} job={doctor.primary_care} city={doctor.city} score={doctor.score} nr_reviews={doctor.nr_reviews} review="Doctor Olaf is very attentive and really understood my issues." img={doctor.profile_picture} bio={doctor.bio}/>
                    </>
                );
            }
            )}
            
            </MDBCol>
        </MDBRow>
        </MDBContainer>
    </section>
    );
    } else {}
}