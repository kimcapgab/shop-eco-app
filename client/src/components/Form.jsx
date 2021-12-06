import { useState } from "react"
import { postShop } from "../services"
import { useNavigate, useParams } from "react-router-dom"
import Button from '@mui/material/Button'
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';


export default function Form(props) {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [url, setURL] = useState("");
  const [insta, setInsta] = useState("");
  const [email, setEmail] = useState("");
  const [image, setImage] = useState("");
  const [tags, setTags] = useState("");
  const navigate = useNavigate();
  const params = useParams();

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
      <input
        type="text"
        value={name}
        name="name"
        placeholder="Enter Shop's Name"
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="text"
        value={description}
        name="description"
        placeholder="Description"
        onChange={(e) => setDescription(e.target.value)}
      />
      <input
        type="text"
        value={url}
        name="url"
        placeholder="Shop's Website"
        onChange={(e) => setURL(e.target.value)}
      />
      <input
        type="text"
        value={insta}
        name="insta"
        placeholder="Shops's Instagram URL"
        onChange={(e) => setInsta(e.target.value)}
      />
      <input
        type="text"
        value={email}
        name="email"
        placeholder="Shop's Email Address"
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="text"
        value={image}
        name="image"
        placeholder="Image URL"
        onChange={(e) => setImage(e.target.value)}
      />
      {/* <input
        type="text"
        value={tags}
        name="tags"
        placeholder="Clothing, Furniture, or Candle"
        onChange={(e) => setTags(e.target.value)}
      /> */}

      <FormControl component="fieldset">
        <FormLabel component="legend">Category</FormLabel>
        <RadioGroup
          aria-label="category"
          defaultValue="Furniture"
          value={tags}
          onChange={(e) => setTags(e.target.value)}
          name="radio-buttons-group"
        >
          <FormControlLabel
            value="Furniture"
            control={<Radio />}
            label="Furniture"
          />
          <FormControlLabel
            value="Clothing"
            control={<Radio />}
            label="Clothing"
          />
          <FormControlLabel
            value="Candles"
            control={<Radio />}
            label="Candles"
          />
        </RadioGroup>
      </FormControl>

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
