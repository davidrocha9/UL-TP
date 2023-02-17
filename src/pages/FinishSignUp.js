import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
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
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

const steps = ['Select account type', 'Fill out details'];

export function FinishSignUp() {
  const [activeStep, setActiveStep] = React.useState(0);
  const [skipped, setSkipped] = React.useState(new Set());
  const [accountType, setType] = React.useState(0);
  const [age, setAge] = React.useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  const isStepSkipped = (step) => {
    return skipped.has(step);
  };

  const handlePatient = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setType("patient");
  };

  const handleDoctor = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setType("doctor");
  };

  const handleNext = () => {
    let newSkipped = skipped;
    if (isStepSkipped(activeStep)) {
      newSkipped = new Set(newSkipped.values());
      newSkipped.delete(activeStep);
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped(newSkipped);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleSkip = () => {

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped((prevSkipped) => {
      const newSkipped = new Set(prevSkipped.values());
      newSkipped.add(activeStep);
      return newSkipped;
    });
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  return (
    <Box sx={{ width: '50%', margin: "0 auto" }}>
      <Stepper activeStep={activeStep}>
        {steps.map((label, index) => {
          const stepProps = {};
          const labelProps = {};
          if (isStepSkipped(index)) {
            stepProps.completed = false;
          }
          return (
            <Step key={label} {...stepProps}>
              <StepLabel {...labelProps}>{label}</StepLabel>
            </Step>
          );
        })}
      </Stepper>
      {activeStep === steps.length ? (
        <React.Fragment>
            <MDBCard className="mb-4">
                <MDBCardBody>
                    <MDBCardText style={{fontSize: "2.5rem"}}>Thank you for registering!</MDBCardText>
                    <Button onClick={handlePatient} variant="contained" style={{width: "40%", marginRight: "20px", height: "50px"}}>Patient</Button>                        
                </MDBCardBody>
            </MDBCard>
          <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
            <Box sx={{ flex: '1 1 auto' }} />
            <Button onClick={handleReset}>Reset</Button>
          </Box>
        </React.Fragment>
      ) : (
        <React.Fragment>


            {activeStep === 1 ?
            <div>
                {accountType === "patient" ? 
                    <Typography sx={{ mt: 2, mb: 1 }} style={{textAlign: "center"}}>
                        <MDBCard className="mb-4">
                            <MDBCardBody>
                                <MDBCardText style={{fontSize: "2.5rem"}}>Account Details</MDBCardText>
                                <Grid container spacing={3}>
                                    <Grid item xs={12} sm={6}>
                                    <TextField
                                        required
                                        id="firstName"
                                        name="firstName"
                                        label="First name"
                                        fullWidth
                                        autoComplete="given-name"
                                        variant="standard"
                                    />
                                    </Grid>
                                    <Grid item xs={12} sm={6}>
                                    <TextField
                                        required
                                        id="lastName"
                                        name="lastName"
                                        label="Last name"
                                        fullWidth
                                        autoComplete="family-name"
                                        variant="standard"
                                    />
                                    </Grid>
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                        required
                                        id="address1"
                                        name="address1"
                                        label="Address line 1"
                                        fullWidth
                                        autoComplete="shipping address-line1"
                                        variant="standard"
                                    />
                                </Grid>
                                <FormControl fullWidth>
                                    <InputLabel id="demo-simple-select-label">Age</InputLabel>
                                    <Select
                                        labelId="demo-simple-select-label"
                                        id="demo-simple-select"
                                        value={age}
                                        label="Age"
                                        onChange={handleChange}
                                    >
                                        <MenuItem value={1}>1</MenuItem>
                                        <MenuItem value={2}>2</MenuItem>
                                        <MenuItem value={3}>3</MenuItem>
                                        <MenuItem value={4}>4</MenuItem>
                                        <MenuItem value={5}>5</MenuItem>
                                        <MenuItem value={6}>6</MenuItem>
                                        <MenuItem value={7}>7</MenuItem>
                                        <MenuItem value={8}>8</MenuItem>
                                        <MenuItem value={9}>9</MenuItem>
                                        <MenuItem value={10}>10</MenuItem>
                                        <MenuItem value={11}>11</MenuItem>
                                        <MenuItem value={12}>12</MenuItem>
                                        <MenuItem value={13}>13</MenuItem>
                                        <MenuItem value={14}>14</MenuItem>
                                        <MenuItem value={15}>15</MenuItem>
                                        <MenuItem value={16}>16</MenuItem>
                                        <MenuItem value={17}>17</MenuItem>
                                        <MenuItem value={18}>18</MenuItem>
                                        <MenuItem value={19}>19</MenuItem>
                                        <MenuItem value={20}>20</MenuItem>
                                        <MenuItem value={21}>21</MenuItem>
                                        <MenuItem value={22}>22</MenuItem>
                                        <MenuItem value={23}>23</MenuItem>
                                        <MenuItem value={24}>24</MenuItem>
                                        <MenuItem value={25}>25</MenuItem>
                                        <MenuItem value={26}>26</MenuItem>
                                        <MenuItem value={27}>27</MenuItem>
                                        <MenuItem value={28}>28</MenuItem>
                                        <MenuItem value={29}>29</MenuItem>
                                        <MenuItem value={30}>30</MenuItem>
                                        <MenuItem value={31}>31</MenuItem>
                                        <MenuItem value={32}>32</MenuItem>
                                        <MenuItem value={33}>33</MenuItem>
                                        <MenuItem value={34}>34</MenuItem>
                                        <MenuItem value={35}>35</MenuItem>
                                        <MenuItem value={36}>36</MenuItem>
                                        <MenuItem value={37}>37</MenuItem>
                                        <MenuItem value={38}>38</MenuItem>
                                        <MenuItem value={39}>39</MenuItem>
                                        <MenuItem value={40}>40</MenuItem>
                                        <MenuItem value={41}>41</MenuItem>
                                        <MenuItem value={42}>42</MenuItem>
                                        <MenuItem value={43}>43</MenuItem>
                                        <MenuItem value={44}>44</MenuItem>
                                        <MenuItem value={45}>45</MenuItem>
                                        <MenuItem value={46}>46</MenuItem>
                                        <MenuItem value={47}>47</MenuItem>
                                        <MenuItem value={48}>48</MenuItem>
                                        <MenuItem value={49}>49</MenuItem>
                                        <MenuItem value={50}>50</MenuItem>
                                        <MenuItem value={51}>51</MenuItem>
                                        <MenuItem value={52}>52</MenuItem>
                                        <MenuItem value={53}>53</MenuItem>
                                        <MenuItem value={54}>54</MenuItem>
                                        <MenuItem value={55}>55</MenuItem>
                                        <MenuItem value={56}>56</MenuItem>
                                        <MenuItem value={57}>57</MenuItem>
                                        <MenuItem value={58}>58</MenuItem>
                                        <MenuItem value={59}>59</MenuItem>
                                        <MenuItem value={60}>60</MenuItem>
                                        <MenuItem value={61}>61</MenuItem>
                                        <MenuItem value={62}>62</MenuItem>
                                        <MenuItem value={63}>63</MenuItem>
                                        <MenuItem value={64}>64</MenuItem>
                                        <MenuItem value={65}>65</MenuItem>
                                        <MenuItem value={66}>66</MenuItem>
                                        <MenuItem value={67}>67</MenuItem>
                                        <MenuItem value={68}>68</MenuItem>
                                        <MenuItem value={69}>69</MenuItem>
                                        <MenuItem value={70}>70</MenuItem>
                                        <MenuItem value={71}>71</MenuItem>
                                        <MenuItem value={72}>72</MenuItem>
                                        <MenuItem value={73}>73</MenuItem>
                                        <MenuItem value={74}>74</MenuItem>
                                        <MenuItem value={75}>75</MenuItem>
                                        <MenuItem value={76}>76</MenuItem>
                                        <MenuItem value={77}>77</MenuItem>
                                        <MenuItem value={78}>78</MenuItem>
                                        <MenuItem value={79}>79</MenuItem>
                                        <MenuItem value={80}>80</MenuItem>
                                        <MenuItem value={81}>81</MenuItem>
                                        <MenuItem value={82}>82</MenuItem>
                                        <MenuItem value={83}>83</MenuItem>
                                        <MenuItem value={84}>84</MenuItem>
                                        <MenuItem value={85}>85</MenuItem>
                                        <MenuItem value={86}>86</MenuItem>
                                        <MenuItem value={87}>87</MenuItem>
                                        <MenuItem value={88}>88</MenuItem>
                                        <MenuItem value={89}>89</MenuItem>
                                        <MenuItem value={90}>90</MenuItem>
                                        <MenuItem value={91}>91</MenuItem>
                                        <MenuItem value={92}>92</MenuItem>
                                        <MenuItem value={93}>93</MenuItem>
                                        <MenuItem value={94}>94</MenuItem>
                                        <MenuItem value={95}>95</MenuItem>
                                        <MenuItem value={96}>96</MenuItem>
                                        <MenuItem value={97}>97</MenuItem>
                                        <MenuItem value={98}>98</MenuItem>
                                        <MenuItem value={99}>99</MenuItem>
                                    </Select>
                                </FormControl>
                                <TextField
                                id="outlined-multiline-static"
                                label="Multiline"
                                multiline
                                rows={4}
                                style={{width: "100%"}}
                                defaultValue="Default Value"
                                />
                            </MDBCardBody>
                        </MDBCard>
                    </Typography>
                : <Typography sx={{ mt: 2, mb: 1 }} style={{textAlign: "center"}}>Doctor</Typography>}
            </div>

            :
            
            <Typography sx={{ mt: 2, mb: 1 }} style={{textAlign: "center"}}>
                <MDBCard className="mb-4">
                    <MDBCardBody>
                        <MDBCardText style={{fontSize: "2.5rem"}}>I am a...</MDBCardText>
                        <Button onClick={handlePatient} variant="contained" style={{width: "40%", marginRight: "20px", height: "50px"}}>Patient</Button>                        
                        <Button onClick={handleDoctor} variant="contained" style={{width: "40%", marginLeft: "20px", height: "50px"}}>Doctor</Button>
                    </MDBCardBody>
                </MDBCard>
            </Typography>
            
            }
            
            {activeStep === 1 ?
          <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
            <Button
              color="inherit"
              disabled={activeStep === 0}
              onClick={handleBack}
              sx={{ mr: 1 }}
            >
              Back
            </Button>
            <Box sx={{ flex: '1 1 auto' }} />

            <Button onClick={handleNext}>
              {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
            </Button>
          </Box>
          :
          <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}/>
            }
        </React.Fragment>
      )}
    </Box>
  );
}