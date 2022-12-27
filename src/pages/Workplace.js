import * as React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Routes, Route} from "react-router-dom" 
import {NavBar} from '../components/NavBar';
import {SearchBar} from '../components/SearchBar';
import {MostPopular} from '../components/MostPopularDoctors';
import {MostPopularHospitals} from '../components/MostPopularHospitals';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import { HorizontalCard } from '../partials/HorizontalCard';
import { getFirestore, doc, getDoc } from "firebase/firestore";
import {
    BrowserRouter as Router,
    Switch,
    Link,
    useRouteMatch
  } from "react-router-dom";

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

export function Workplace() {
    // get id param
    const { id } = useParams();

    const [doctors, setDoctors] = React.useState([]);
    const [image, setImage] = React.useState([]);
    const [reviews, setReviews] = React.useState([]);
    const [workplace, setWorkplace] = React.useState([]);
    const [workplaceID, setWorkplaceID] = React.useState([]);
    const [isLoading, setIsLoading] = React.useState(true);
    
    const fetchWorkplace = async () => {
        firestore.collection('workplaces').doc(id).get().then((snapshot) => {
            if (snapshot) {
                setWorkplace(snapshot.data())
                getImage(snapshot.data().picture);
                fetchDoctors();
                setIsLoading(false);
            }
        })
    }

    const fetchDoctors = async () => {
        // get reviews for doctor        
        const response = firestore.collection('doctors').where("workplace", "==", id);
        const req = await response.get();

        const tempDoctors = req.docs.map((doc) => {
            return {...doc.data(), id: doc.id};
        });

        setDoctors(tempDoctors); 
    }

    const getImage = async (img_path) => {
        const images = storage.ref().child('workplaces');
        console.log(img_path);
        const image = images.child(img_path);
        const url = await image.getDownloadURL();

        setImage(url);
    }

    React.useEffect(() => {
        fetchWorkplace();
    }, []);

    if (!isLoading) {
    return (
    <section>
        <NavBar></NavBar>
        <MDBContainer className="py-5">
        <MDBRow>
            <MDBCol lg="4">
            <MDBCard className="mb-4">
                <MDBCardBody className="text-center">
                <MDBCardImage
                    src={image}
                    alt="avatar"
                    className="rounded-circle"
                    style={{ width: '150px', height: "150px"}}
                    fluid />
                <p className="text-muted mb-1" style={{fontSize: "1.5rem", paddingTop: "20px"}}>{workplace.name}</p>
                </MDBCardBody>
            </MDBCard>

            <MDBCard className="mb-4">
                <MDBCardBody>
                <MDBRow>
                    <MDBCol sm="4">
                    <MDBCardText>Email</MDBCardText>
                    </MDBCol>
                    <MDBCol sm="8">
                    <MDBCardText className="text-muted">{workplace.email}</MDBCardText>
                    </MDBCol>
                </MDBRow>
                <hr />
                <MDBRow>
                    <MDBCol sm="4">
                    <MDBCardText>Phone</MDBCardText>
                    </MDBCol>
                    <MDBCol sm="8">
                    <MDBCardText className="text-muted">{workplace.phone}</MDBCardText>
                    </MDBCol>
                </MDBRow>
                <hr />
                <MDBRow>
                    <MDBCol sm="4">
                    <MDBCardText>Address</MDBCardText>
                    </MDBCol>
                    <MDBCol sm="8">
                    <MDBCardText className="text-muted">{workplace.address}</MDBCardText>
                    </MDBCol>
                </MDBRow>
                </MDBCardBody>
            </MDBCard>
            </MDBCol>

            <MDBCol lg="8">
            <MDBCard className="mb-4">
                <MDBCardBody>
                    <MDBRow>
                        <MDBCardText style={{fontSize: "2.5rem"}}>List of Doctors</MDBCardText>
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