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
import {Link, Routes, Route, useNavigate} from 'react-router-dom';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import moment from 'moment';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

const ariaLabel = { 'aria-label': 'description' };

export function SearchBar() {
    const [specialty, setSpecialty] = React.useState('Any');
    const [location, setLocation] = React.useState('Any');
    const [date, setDate] = React.useState(moment());
    const navigate = useNavigate(); 

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(specialty, location, date)
        navigate("/search/" + specialty + "/" + location + "/" + date.format('YYYY-MM-DD'));
    }

    const handleChangeSpecialty = (event) => {
        setSpecialty(event.target.value);
    };

    const handleChangeLocation = (event) => {
        setLocation(event.target.value);
    };

    return (
        <form onSubmit={handleSubmit}>
        <Box sx={{ flexGrow: 1, display: 'flex', height: '100%', flexDirection: "column", backgroundColor: "#dce9fd", paddingRight: "5vw", paddingLeft: "5vw", paddingBottom: "5vw"}}>
                <p style={{fontSize: '5rem', lineHeight:'75px', paddingTop: "50px"}}> <b>Find local doctors <br></br> who will take care of you</b></p>
                <Grid container spacing={0} sx={{height: "100%", display: "flex", alignItems: "center", boxShadow : "0px", paddingTop: "20px"}}>
                    <Grid item xs={4.925}>
                        <Item sx={{gap: '1vw', height : '7.5vh', borderRadius : '0.5vw 0vw 0vw 0.5vw' , display : 'flex', border : '2px solid grey', borderRight : '0px', boxShadow : "0px"}} style={{boxShadow : 'none', height: '100px'}}>
                            <FormControl fullWidth>
                                <InputLabel id="demo-simple-select-label">Specialty</InputLabel>
                                <Select
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    value={specialty}
                                    label="Specialty"
                                    onChange={handleChangeSpecialty}
                                >
                                    <MenuItem value={"Primary Care Doctor"}>Primary Care Doctor</MenuItem>
                                    <MenuItem value={"Oncologist"}>Oncologist</MenuItem>
                                    <MenuItem value={"Dermatologist"}>Dermatologist</MenuItem>
                                </Select>
                            </FormControl>
                        </Item>
                    </Grid>
                    <Grid item xs={0.15}>
                        <Item sx={{gap: '1vw', height : '7.5vh', borderRadius : '0vw 0vw 0vw 0vw' , display : 'flex', border : '2px solid grey', borderRight: '0px', borderLeft: '0px'}} style={{boxShadow : 'none', height: '100px'}}>
                            <Divider orientation="vertical" variant="middle" flexItem />
                        </Item>
                    </Grid>
                    <Grid item xs={2.85}>
                        <Item sx={{gap: '1vw', height : '7.5vh', borderRadius : '0vw 0vw 0vw 0vw' , display : 'flex', border : '2px solid grey', borderRight : '0px', borderLeft : '0px'}} style={{boxShadow : 'none', height: '100px'}}>
                            <LocationOnIcon sx={{ m: 'auto' }} />
                            <FormControl fullWidth>
                                <InputLabel id="demo-simple-select-label">Location</InputLabel>
                                <Select
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    value={location}
                                    label="Location"
                                    onChange={handleChangeLocation}
                                >
                                    <MenuItem value={"Lodz"}>Lodz</MenuItem>
                                    <MenuItem value={"Warsaw"}>Warsaw</MenuItem>
                                    <MenuItem value={"Krakow"}>Krakow</MenuItem>
                                    <MenuItem value={"Wroclaw"}>Wroclaw</MenuItem>
                                </Select>
                            </FormControl>
                        </Item>
                    </Grid>
                    <Grid item xs={0.15}>
                        <Item sx={{gap: '1vw', height : '7.5vh', borderRadius : '0vw 0vw 0vw 0vw' , display : 'flex', border : '2px solid grey', borderRight : '0px', borderLeft : '0px'}} style={{boxShadow : 'none', height: '100px'}}>
                            <Divider orientation="vertical" variant="middle" flexItem />
                        </Item>
                    </Grid>
                    <Grid item xs={2.925}>
                        <Item sx={{gap: '1vw', height: '7.5vh'}} style={{borderRadius: "0px", boxShadow: "none", border:"2px solid grey", borderLeft:"0px", borderRight:"0px", display:"flex", boxShadow:"none", height: '100px'}}>
                            <LocalizationProvider dateAdapter={AdapterDayjs}>
                                <DatePicker style={{width: "100%"}}
                                    label="Today"
                                    value={date}
                                    onChange={(date) => {
                                        var new_date = new Date();
                                        var todayDate = moment(new_date);
                                        const d = new Date(date);
                                        setDate(d);
                                    }}
                                    renderInput={(params) => <TextField {...params} />}
                                />
                            </LocalizationProvider>
                        </Item>
                    </Grid>
                    <Grid item xs={1}>
                        <Item sx={{ m: 'auto', height: '7.5vh'}} style={{borderRadius: "0vw 0.5vw 0.5vw 0vw", boxShadow: "none", border:"2px solid grey", display:"flex", boxShadow:"none", height: '100px'}}>
                            <Button sx={{height: '7.5vh' , padding : '0px'}} type="submit" value="Submit">
                                <SearchIcon sx={{ m: 'auto' }} />
                            </Button>
                        </Item>
                    </Grid>
                </Grid>
            </Box>
        </form>
    )
}