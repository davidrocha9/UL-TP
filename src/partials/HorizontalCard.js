import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import StarIcon from '@mui/icons-material/Star';
import {firestore, storage} from '../firebase/config';
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom"
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

export function HorizontalCard(props) {
    const [image, setImage] = React.useState([]);

    const getImage = async () => {
        const images = storage.ref().child('doctors');
        const image = images.child(props.img);
        const url = await image.getDownloadURL();

        setImage(url);
    }

    React.useEffect(() => {
        getImage(props.img);
    }, []);
    
    let navigate = useNavigate(); 
    const routeChange = () =>{ 
        let path = `newPath`; 
        navigate(path);
    }

    return (
        <MDBRow style={{paddingRight: "20px", paddingLeft: "20px"}}>
            <MDBCard className="mb-4">
                <MDBCardBody>
                <MDBRow>
                    <MDBRow>
                        <MDBCol sm="3">
                            <MDBCardBody className="text-center">
                                <MDBCardImage
                                    src={image}
                                    alt="avatar"
                                    className="rounded-circle"
                                    style={{ width: '150px'}}
                                    fluid />
                            </MDBCardBody>
                            <hr />
                            <MDBCardText className="text-muted" style={{display: "flex", justifyContent: "center"}}>
                                <p style={{fontSize: "2.5rem"}}>{props.score.toFixed(1)}</p>
                                <p style={{paddingTop: "25px"}}>/5.0</p>
                            </MDBCardText>
                        </MDBCol>
                        <MDBCol sm="9">
                            <MDBCardText style={{fontSize: "1.5rem"}}>{props.name}</MDBCardText>
                            <hr />
                            <MDBRow>
                                <MDBCardText className="text-muted" style={{display: "flex"}}>
                                    <p style={{textAlign: "justify"}}>{props.bio}</p>
                                </MDBCardText>
                            </MDBRow>
                        </MDBCol>
                    </MDBRow>
                </MDBRow>
                <Link to={"/doctor/" + props.id}>
                    <button type="button" className="btn btn-primary" style={{float: "right"}}>CHECK THEM OUT</button>
                </Link>
                </MDBCardBody>
            </MDBCard>
        </MDBRow>
  );
}
