// import { Link } from 'react-router-dom'
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

export default function Items(props) {
  const [items, setItems] = useState([]);
  const params = useParams();

  useEffect(() => {
    const foundTags = props.items.filter((item) => {
      return item.fields.tags === params.tags;
    });
    setItems(foundTags);
    console.log(foundTags);
  }, [params.tags, props.items]);

  return (
    <div>
      <h1>Shops</h1>
      {items.map((item) => (
        <div>
          <Card sx={{ maxWidth: 345 }}>
            <CardMedia
              component="img"
              height="250"
              image={item.fields.image}
              alt="display_store"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
              {item.fields.name}
              </Typography>
              <Typography variant="body2" color="text.secondary">
              {item.fields.description}
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small">Share</Button>
              <Button size="small">Learn More</Button>
            </CardActions>
          </Card>
{/* 
          <h1>{item.fields.name}</h1>
          <p>{item.fields.description}</p>
          <p>{item.fields.url}</p>
          <p>{item.fields.insta}</p>
          <p>{item.fields.email}</p>
          <img
            key={item.fields.name}
            src={item.fields.image}
            width="250px"
            alt="display"
          /> */}
        </div>
      ))}
    </div>
  );
}
