// import { Link } from 'react-router-dom'
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import InstagramIcon from "@mui/icons-material/Instagram";
import EmailIcon from "@mui/icons-material/Email";
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

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
    <div className="items_container">
      <h1>Shops</h1>
      <Box sx={{ flexGrow: 1 }}>
        <Grid
          container
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 4, sm: 8, md: 12 }} justifyContent="space-around"
          alignItems="center"
        >
          {items.map((item) => (
            <Grid item xs={2} sm={4} md={4}>
              <Item>
                <Card sx={{ maxWidth: 800 }}>
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
                    <a href={item.fields.url} target="_blank" rel="noreferrer">
                          <ShoppingBagIcon color="primary" />
                    </a>
                    <a
                      href={item.fields.insta}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <InstagramIcon color="primary" />
                    </a>
                    <a
                      href={`mailto:${item.fields.email}`}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <EmailIcon color="primary" />
                    </a>
                  </CardActions>
                </Card>
              </Item>
            </Grid>
          ))}
        </Grid>
      </Box>
    </div>
  );
}
