import * as React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Routes, Route} from "react-router-dom" 
import {NavBar} from '../components/NavBar';
import {SearchBar} from '../components/SearchBar';
import {MostPopular} from '../components/MostPopularDoctors';
import {MostPopularHospitals} from '../components/MostPopularHospitals';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
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

export function Doctor() {
    // get id param
    const { id } = useParams();

    const [doctor, setDoctor] = React.useState([]);
    const [image, setImage] = React.useState([]);
    const [reviews, setReviews] = React.useState([]);
    const [hospital, setHospital] = React.useState([]);
    const [hospitalID, setHospitalID] = React.useState([]);
    const [isLoading, setIsLoading] = React.useState(true);

    const fetchDoctors = async () => {
        firestore.collection('doctors').doc(id).get().then((snapshot) => {
            if (snapshot) {
                setDoctor(snapshot.data())
                console.log(snapshot.data())
                getImage(snapshot.data().profile_picture);
                fetchReviews();
                getHospital(snapshot.data().hospital);
            }
        })
    }

    const getImage = async (img_path) => {
        const images = storage.ref().child('doctors');
        const image = images.child(img_path);
        const url = await image.getDownloadURL();

        setImage(url);
    }

    const getHospital = async (hospital) => {
        const docRef = doc(firestore, "hospitals", hospital);

        try {
            const docSnap = await getDoc(docRef);
            setHospitalID(docSnap.id)
            setHospital(docSnap.data());
            setIsLoading(false);
        } catch(error) {
            console.log(error)
        }
    }
    
    const fetchReviews = async () => {
        // get reviews for doctor        
        const response = firestore.collection('reviews').where("doctor", "==", id);
        const req = await response.get();

        console.log(req.docs);

        const tempReviews = req.docs.map((doc) => {
            return {...doc.data(), id: doc.id};
        });

        setReviews(tempReviews); 
    }

    React.useEffect(() => {
        fetchDoctors();
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
                    style={{ width: '150px', paddingBottom: '20px' }}
                    fluid />
                <p className="text-muted mb-1">{doctor.name}</p>
                <p className="text-muted mb-4">{doctor.primary_care}</p>
                <div className="d-flex justify-content-center mb-2">
                    <MDBBtn outline className="ms-1">Message</MDBBtn>
                </div>
                </MDBCardBody>
            </MDBCard>

            <MDBCard className="mb-4">
                <MDBCardBody>
                <MDBRow>
                    <MDBCol sm="4">
                    <MDBCardText>Email</MDBCardText>
                    </MDBCol>
                    <MDBCol sm="8">
                    <MDBCardText className="text-muted">{doctor.email}</MDBCardText>
                    </MDBCol>
                </MDBRow>
                <hr />
                <MDBRow>
                    <MDBCol sm="4">
                    <MDBCardText>Phone</MDBCardText>
                    </MDBCol>
                    <MDBCol sm="8">
                    <MDBCardText className="text-muted">{doctor.phone}</MDBCardText>
                    </MDBCol>
                </MDBRow>
                <hr />
                <MDBRow>
                    <MDBCol sm="4">
                    <MDBCardText>Address</MDBCardText>
                    </MDBCol>
                    <MDBCol sm="8">
                    <MDBCardText className="text-muted">{doctor.city}</MDBCardText>
                    </MDBCol>
                </MDBRow>
                <hr />
                <MDBRow>
                    <MDBCol sm="4">
                    <MDBCardText>Hospital</MDBCardText>
                    </MDBCol>
                    <MDBCol sm="8">
                    <MDBCardText className="text-muted">
                        <Link to={"/hospital/" + hospitalID}>
                            {hospital.name}
                        </Link>
                    </MDBCardText>
                    </MDBCol>
                </MDBRow>
                </MDBCardBody>
            </MDBCard>
            </MDBCol>
            
            <MDBCol lg="8">

            <MDBCard className="mb-4">
                <MDBCardBody>
                    <MDBCardText style={{fontSize: "2.5rem"}}>About Me</MDBCardText>
                    <hr />
                    <MDBCardText style={{textAlign: "justify"}}>{doctor.bio}</MDBCardText>
                </MDBCardBody>
            </MDBCard>
            <MDBCard className="mb-4">
                <MDBCardBody>
                    <MDBRow>
                        <MDBCol sm="10">
                            <MDBCardText style={{fontSize: "2.5rem"}}>Reviews</MDBCardText>
                        </MDBCol>
                        <MDBCol sm="2">
                            <MDBCardText className="text-muted" style={{display: "flex"}}>
                                <p style={{fontSize: "2.5rem"}}>{doctor.score.toFixed(1)}</p>
                                <p style={{paddingTop: "25px"}}>/5.0</p>
                            </MDBCardText>
                            <MDBCardText className="text-muted"></MDBCardText>
                        </MDBCol>
                    </MDBRow>
                    {reviews.map((review) => {
                        return (
                            <>
                                <MDBRow style={{paddingRight: "20px", paddingLeft: "20px"}}>
                                    <MDBCard className="mb-4">
                                        <MDBCardBody>
                                        <MDBRow>
                                            <MDBCardText style={{fontSize: "1rem"}}>{review.review_text}</MDBCardText>
                                            <hr />
                                            <MDBRow>
                                                <MDBCol sm="3">
                                                    <MDBCardText className="text-muted" style={{display: "flex"}}>
                                                        <p>Score: {review.rating.toFixed(1)}/5.0</p>
                                                    </MDBCardText>
                                                </MDBCol>
                                                <MDBCol sm="9">
                                                    <MDBCardText className="text-muted" style={{display: "flex"}}>
                                                        <p>Review made by: {review.pacient}</p>
                                                    </MDBCardText>
                                                </MDBCol>
                                            </MDBRow>
                                        </MDBRow>
                                        </MDBCardBody>
                                    </MDBCard>
                                </MDBRow>
                            </>
                        );
                    }
                    )}
                </MDBCardBody>
            </MDBCard>

            
            </MDBCol>
        </MDBRow>
        </MDBContainer>
    </section>
    );
    } else {}
}