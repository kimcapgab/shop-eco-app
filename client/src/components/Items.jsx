// import { Link } from 'react-router-dom'
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

export default function Items(props) {
  const [items, setItems] = useState([]);
  const params = useParams();

  // const filterarr = props.items.filter(item => item.fields.tags === params.tags)
  // console.log(filterarr)

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
              />
            </div>
          ))}
    </div>
  );
}
