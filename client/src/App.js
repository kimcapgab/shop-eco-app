import "./App.css";
import { useState, useEffect } from "react";
import axios from "axios";
import { BASE_URL, config } from "./services/index";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Items from "./components/Items";
import Form from "./components/Form";
import HomeImage from "./components/HomeImage";
import Footer from "./components/Footer";
import Featured from "./components/Featured";
import Test from "./components/Test";

function App() {
  const [items, setItems] = useState([]);
  const [toggle, setToggle] = useState(false);

  useEffect(() => {
    const getAllItems = async () => {
      const response = await axios.get(BASE_URL, config);
      setItems(response.data.records);
    };
    getAllItems();
  }, [toggle]);

  return (
    <div className="App">
      <Navbar />
      <Test />
      <Routes>
        <Route
          path="/"
          element={
            <>
            <HomeImage />
            <Featured />
            </>
          }
        />
        <Route path="/new" element={<Form setToggle={setToggle} />} />
        <Route path="/items/:tags" element={<Items items={items} />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
