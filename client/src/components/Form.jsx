import { useState } from "react"
import { postShop } from "../services"


export default function Form() {
  const [name, setName] = useState('')
  const [description, setDescription] = useState('')
  const [url, setURL] = useState('')
  const [insta, setInsta] = useState('')
  const [email, setEmail] = useState('')
  const [image, setImage] = useState('')
  const [tags, setTags] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
    const newShop = {
      name,
      description,
      url,
      insta,
      email,
      image,
      tags,
    }
    await postShop(newShop)
  }


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
      <input
        type="text"
        value={tags}
        name="tags"
        placeholder="Clothing, Furniture, or Candle"
        onChange={(e) => setTags(e.target.value)}
      />
      <button>Submit</button>
    </form>
  )
}
