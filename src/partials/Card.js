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

export function DoctorCard(props) {
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

    return (
            <Card id="card" style={{textAlign: 'center', borderRadius : '10px', width: "300px", height: "350px"}}>
                <CardActionArea style={{width: "300px", height: "350px"}}>
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            <CardMedia
                            id="doctor-img"
                            component="img"
                            image={image}
                            alt={props.name}
                            style={{margin: "0 auto", borderRadius: "50%!important"}}
                            />
                        </Typography>
                        <Typography gutterBottom variant="h5" component="div">
                            {props.name}
                        </Typography>
                        <Typography gutterBottom variant="h7" component="div">
                            {props.job}
                        </Typography>
                        <Typography gutterBottom variant="h8" component="div">
                            {props.city}
                        </Typography>
                        <Typography gutterBottom variant="h8" component="div" style={{display : 'flex', alignItems: 'center', gap : '5px', justifyContent : 'center'}}>
                            <div>
                                <StarIcon sx={{ m: 'auto' }} style={{width: '25px'}} />
                            </div>
                            <div style={{display : 'flex'}}>
                                <div style={{fontSize : '1rem'}}>
                                    {props.score.toFixed(1)}
                                </div>
                                <div style={{fontSize : '0.7rem', marginTop : '4px', marginLeft : '5px'}}>
                                    ({props.nr_reviews} reviews)
                                </div>
                            </div>
                        </Typography>
                        <Typography variant="body2" color="text.secondary" style = {{height : '50px'}}>
                            {props.review}
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
  );
}
