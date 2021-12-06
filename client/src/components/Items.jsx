// import { Link } from 'react-router-dom'
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import InstagramIcon from '@mui/icons-material/Instagram';
import EmailIcon from '@mui/icons-material/Email';

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
        <div className="card_container">
        <div className="card_items">
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
            <a href={item.fields.url} target="_blank" rel="noreferrer" >
              <Button size="small">Visit Shop</Button>
              </a>
            <a href={item.fields.insta} target="_blank" rel="noreferrer" >
              <InstagramIcon />
              </a>

              
                <a href={`mailto:${item.fields.email}`} target="_blank" rel="noreferrer" >
                <EmailIcon />
                </a>
              
            </CardActions>
          </Card>
          </div>
          </div>
      ))}
    </div>
  );
}
