import './App.css';
import { useState, useEffect } from 'react'
import axios from 'axios'
import { BASE_URL, config } from "./services/index"
import {Route, Routes} from 'react-router-dom'
import Navbar from './components/Navbar'
import Items from './components/Items';
import Form from "./components/Form"

function App() {
  const [items, setItems] = useState([])

  useEffect(() => {
    const getAllItems = async () => {
      const response = await axios.get(BASE_URL, config)
      setItems(response.data.records)
    }
    getAllItems()
  },[])


  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route
          path='/'
          element={
            <h2>Promoting eco-friendly, small shops doing their part in creating products that consider the planet
              and the people making them at every step of the way
            </h2>
          }
        />
        <Route
          path='/new'
          element={<Form />}
        />
        <Route
          path='/items/:tags'
          element={<Items items={items}  />}
        />
      </Routes>
    </div>
  );
}

export default App;
