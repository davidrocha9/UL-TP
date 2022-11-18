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

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

const ariaLabel = { 'aria-label': 'description' };

export function SearchBar() {
    const [value, setValue] = React.useState(null);
  return (
        <Box sx={{ flexGrow: 1, display: 'flex', height: '100%', flexDirection: "column", backgroundColor: "#dce9fd", paddingRight: "5vw", paddingLeft: "5vw", paddingBottom: "5vw"}}>
            <p style={{fontSize: '5rem', lineHeight:'75px'}}> <b>Find local doctors <br></br> who will take care of you</b></p>
            <Grid container spacing={0} sx={{height: "100%", display: "flex", alignItems: "center", boxShadow : "0px"}}>
                <Grid item xs={4.925}>
                <Item sx={{gap: '1vw', height : '7.5vh', borderRadius : '0.5vw 0vw 0vw 0.5vw' , display : 'flex', border : '2px solid grey', borderRight : '0px', boxShadow : "0px"}} style={{boxShadow : 'none'}}>
                    {/* vaccinesicon centered horizontally and vertically */}
                    <VaccinesIcon sx={{ m: 'auto' }} />
                    {/* input centered horizontally and vertically without border*/}
                    <Input sx={{ m: 'auto', border: 'none', width: "100%" }} placeholder="Search" />
                </Item>
                </Grid>
                <Grid item xs={0.15}>
                    <Item sx={{gap: '1vw', height : '7.5vh', borderRadius : '0vw 0vw 0vw 0vw' , display : 'flex', border : '2px solid grey', borderRight: '0px', borderLeft: '0px'}} style={{boxShadow : 'none'}}>
                        <Divider orientation="vertical" variant="middle" flexItem />
                    </Item>
                </Grid>
                <Grid item xs={2.85}>
                    <Item sx={{gap: '1vw', height : '7.5vh', borderRadius : '0vw 0vw 0vw 0vw' , display : 'flex', border : '2px solid grey', borderRight : '0px', borderLeft : '0px'}} style={{boxShadow : 'none'}}>
                        {/* vaccinesicon centered horizontally and vertically */}
                        <LocationOnIcon sx={{ m: 'auto' }} />
                        {/* input centered horizontally and vertically without border*/}
                        <Input sx={{ m: 'auto', border: 'none', width: "100%" }} placeholder="Search" />
                    </Item>
                </Grid>
                <Grid item xs={0.15}>
                    <Item sx={{gap: '1vw', height : '7.5vh', borderRadius : '0vw 0vw 0vw 0vw' , display : 'flex', border : '2px solid grey', borderRight : '0px', borderLeft : '0px'}} style={{boxShadow : 'none'}}>
                        <Divider orientation="vertical" variant="middle" flexItem />
                    </Item>
                </Grid>
                <Grid item xs={2.925}>
                    <Item sx={{gap: '1vw', height: '7.5vh'}} style={{borderRadius: "0px", boxShadow: "none", border:"2px solid grey", borderLeft:"0px", borderRight:"0px", display:"flex", boxShadow:"none"}}>
                        <LocalizationProvider dateAdapter={AdapterDayjs} style={{width: "100%", border:"none"}}>
                            <DatePicker style={{width: "100%", border:"1px solid red"}}
                                label="Today"
                                value={value}
                                onChange={(newValue) => {
                                setValue(newValue);
                                }}
                                renderInput={(params) => <TextField {...params} />}
                            />
                        </LocalizationProvider>
                    </Item>
                </Grid>
                <Grid item xs={1}>
                    {/* search icon centered horizontally and vertically */}
                    <Item sx={{ m: 'auto', height: '7.5vh'}} style={{borderRadius: "0vw 0.5vw 0.5vw 0vw", boxShadow: "none", border:"2px solid grey", display:"flex", boxShadow:"none"}}>
                        <Button sx={{height: '7.5vh' , padding : '0px'}}>
                            <SearchIcon sx={{ m: 'auto' }} />
                        </Button>
                    </Item>
                </Grid>
            </Grid>
        </Box>
  );
}