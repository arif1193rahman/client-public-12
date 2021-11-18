import * as React from "react";
// import { Card, Col, Row } from 'react-bootstrap';
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import './Reviews.css';

const Reviews = () => {
  return (
   <div>
       <div className="review-header">
            <h5>WHAT PEOPLE SAY ABOUT US</h5>
            <h1>People Review for Us</h1>

       </div>
        <div className="container row card-style">
      <div className="col-lg-6">
        <Card sx={{ maxWidth: 445 }}>
          <CardMedia
            component="img"
            height="240"
            image="https://i.ibb.co/7nKKhzW/4-A8-F2-F1-B00000578-0-image-m-22-1522042449165.jpg"
            alt="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Lizard
            </Typography>
            <Typography variant="body2" color="text.secondary">
            Whether you rent or own, you want the best security camera system for keeping an eye on your home while you’re gone. That used to entail signing on with a professional—and pricey—security service like ADT. But a boom in consumer-level smart-home .
            </Typography>
          </CardContent>
          <i className="fab fa-font-awesome"></i>
        <i className="fab fa-font-awesome"></i>
        <i className="fab fa-font-awesome"></i>
          <CardActions>
            <Button size="small">Share</Button>
            <Button size="small">Learn More</Button>
          </CardActions>
        </Card>
        
      </div>

      <div className="col-lg-6">
        <Card sx={{ maxWidth: 445 }}>
          <CardMedia
            component="img"
            height="240"
            image="https://i.ibb.co/LJ50W0Z/975670-961858-r3.jpg"
            alt="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Lizard
            </Typography>
            <Typography variant="body2" color="text.secondary">
            These close cousins of webcams require minimal installation and offer flexible setups and a range of security features. Indeed, the offerings vary widely by camera, and deciding what to buy gets more daunting as this category grows ever more crowded.
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">Share</Button>
            <Button size="small">Learn More</Button>
          </CardActions>
        </Card>
      </div>
    </div>
   </div>
  );
};

export default Reviews;
