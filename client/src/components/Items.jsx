import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import {useParams} from 'react-router-dom'

export default function Items(props) {
  const [item, setItem] = useState([])
  const params = useParams()

  useEffect(() => {
    const foundTag = props.items.find(item => {
      return item.fields.tags === params.tags
    })
    console.log(foundTag)
    setItem(foundTag)
  },[])
    

  return (
    <div>
      {item && item.fields &&
        <>
        <h1>Shops</h1>
        <h1>{item.fields.name}</h1>
        <p>{item.fields.description}</p>
        <p>{item.fields.url}</p>
        </>
      }
    </div>
  )
}
