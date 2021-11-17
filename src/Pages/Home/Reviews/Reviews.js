import * as React from "react";
// import { Card, Col, Row } from 'react-bootstrap';
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
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
            image="https://i.ibb.co/pzXH6VB/man-formal-suit-man-formal-suit-white-background-107682590-1.jpg"
            alt="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Lizard
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Lizards are a widespread group of squamate reptiles, with over
              6,000 species, ranging across all continents except Antarctica
            </Typography>
          </CardContent>
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
            image="https://i.ibb.co/pzXH6VB/man-formal-suit-man-formal-suit-white-background-107682590-1.jpg"
            alt="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Lizard
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Lizards are a widespread group of squamate reptiles, with over
              6,000 species, ranging across all continents except Antarctica
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
