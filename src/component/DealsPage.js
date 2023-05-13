import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import "../styles/Styles.css";
import Carousel from './Carousel';

export default function MediaCard() {
    return (
        <>
            <Carousel />
            <Typography style={{ fontWeight: "600", margin: "10px" }} variant="h5">
                Today's deals
            </Typography>
            <hr />
            <div className='dealsContainer'>
                <Card sx={{ maxWidth: 345 }}>
                    <CardMedia
                        sx={{ height: 400 }}
                        image="https://m.media-amazon.com/images/I/51CIZgoY2DL._AC_SR155,154_QL70_.jpg"
                    />
                    <CardActions>
                        <Button variant='filled' style={{ backgroundColor: "red", color: "white" }} size="small">Upto 64% off</Button>
                        <Button style={{ color: "red" }} size="small">Deal of the day</Button>
                    </CardActions>
                    <CardContent>
                        <Typography>
                            Boat Smart Watch
                        </Typography>
                    </CardContent>
                </Card>
                <Card sx={{ maxWidth: 345 }}>
                    <CardMedia
                        sx={{ height: 400 }}
                        image="https://images-eu.ssl-images-amazon.com/images/I/51IemHi5XdL._AC_UL232_SR232,232_.jpg"
                    />
                    <CardActions>
                        <Button variant='filled' style={{ backgroundColor: "red", color: "white" }} size="small">Upto 64% off</Button>
                        <Button style={{ color: "red" }} size="small">Deal of the day</Button>
                    </CardActions>
                    <CardContent>
                        <Typography style={{ textAlign: "center" }}>
                            NOISE EarBuds with ANC
                        </Typography>
                    </CardContent>
                </Card>
                <Card sx={{ maxWidth: 345 }}>
                    <CardMedia
                        sx={{ height: 400 }}
                        image="https://m.media-amazon.com/images/I/61bK6PMOC3L._AC_SR270,180_QL70_.jpg"
                    />
                    <CardActions>
                        <Button variant='filled' style={{ backgroundColor: "red", color: "white" }} size="small">Upto 64% off</Button>
                        <Button style={{ color: "red" }} size="small">Deal of the day</Button>
                    </CardActions>
                    <CardContent>
                        <Typography style={{ textAlign: "center" }}>
                            Iphone 13 256GB
                        </Typography>
                    </CardContent>
                </Card>
                <Card sx={{ maxWidth: 345 }}>
                    <CardMedia
                        sx={{ height: 400 }}
                        image="https://m.media-amazon.com/images/I/41xNB9WGLDL._AC_SY200_.jpg"
                    />
                    <CardActions>
                        <Button variant='filled' style={{ backgroundColor: "red", color: "white" }} size="small">Upto 64% off</Button>
                        <Button style={{ color: "red" }} size="small">Deal of the day</Button>
                    </CardActions>
                    <CardContent>
                        <Typography>
                            Fastrack New Limitless FS1 Smart Watch
                        </Typography>
                    </CardContent>
                </Card>
            </div>
        </>
    );
}