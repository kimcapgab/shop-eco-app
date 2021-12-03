import './App.css';
import { useState, useEffect } from 'react'
import axios from 'axios'
import {BASE_URL, config} from "./services/index"

function App() {
  const [items, setItems] = useState('')

  useEffect(() => {
    const getAllItems = async () => {
      const response = await axios.get(BASE_URL, config)
      setItems(response.data.records)
    }
    getAllItems()
  },[])


  return (
    <div className="App">
      <h1>test</h1>
    </div>
  );
}

export default App;
