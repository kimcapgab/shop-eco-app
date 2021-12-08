import { useState } from "react";
import { postShop } from "../services";
import { useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import TextField from "@mui/material/TextField";

export default function Form(props) {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [url, setURL] = useState("");
  const [insta, setInsta] = useState("");
  const [email, setEmail] = useState("");
  const [image, setImage] = useState("");
  const [tags, setTags] = useState("");
  const navigate = useNavigate();


  const handleSubmit = async (e) => {
    e.preventDefault();
    const newShop = {
      name,
      description,
      url,
      insta,
      email,
      image,
      tags,
    };
    await postShop(newShop);
    props.setToggle((prevToggle) => !prevToggle);
    navigate(`/items/${tags}`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h1>Submit an Eco-friendly Shop below.</h1>
      <Box
        component="form"
        sx={{
          "& > :not(style)": { m: 1, width: "25ch" },
        }}
        noValidate
        autoComplete="off"
      >
        <TextField
          className="form_input"
          id="outlined-name"
          label="Shop's Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <TextField
          className="form_input"
          id="outlined-description"
          label="Description"
          value={description}
          multiline
          onChange={(e) => setDescription(e.target.value)}
        />
        <TextField
          className="form_input"
          id="outlined-url"
          label="Shop's Website"
          value={url}
          onChange={(e) => setURL(e.target.value)}
        />
        <TextField
          className="form_input"
          id="outlined-insta"
          label="Instagram URL"
          value={insta}
          onChange={(e) => setInsta(e.target.value)}
        />
        <TextField
          className="form_input"
          id="outlined-email"
          label="Shop's Email Address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <TextField
          className="form_input"
          id="outlined-image"
          label="Image URL"
          value={image}
          onChange={(e) => setImage(e.target.value)}
        />
          <FormControl className="form_dropdown" style={{ backgroundColor: "aliceblue" }} required sx={{ m: 2, minWidth: 180 }}>
            <InputLabel  id="demo-simple-select-label">
              Select Category
            </InputLabel>
          <Select
              className="form_dropdown_options"
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={tags}
              label="Tag"
              onChange={(e) => setTags(e.target.value)}
            >
              <MenuItem value="Furniture">Furniture</MenuItem>
              <MenuItem value="Clothing">Clothing</MenuItem>
              <MenuItem value="Candles">Candles</MenuItem>
            </Select>
        </FormControl>
        </Box>

        <Button
          style={{ backgroundColor: "#01161E" }}
          variant="contained"
          type="submit"
        >
          Submit
        </Button>
      
    </form>
  );
}
