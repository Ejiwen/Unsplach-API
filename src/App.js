import React, { useState, useEffect } from "react";

import "./index.css";
import axios from "axios";
import Photos from "./components/Photos";

function App() {
  const [images, setImages] = useState();
  const accessKey = "1fninR4a1nL5ujKMAdOcJJ1RZggNb73GaN60jIk4eg4";

  useEffect(() => {
    fetchImages();
  }, []);

  const fetchImages = () => {
    axios
      .get(
        `https://api.unsplash.com/users/hakantas212/photos/?&per_page=50&client_id=${accessKey}`
      )
      .then(res => {
        setImages(res.data);
        console.log(res.data);
      })
      .catch(error => {
        console.log(error);
      });
  };

  return (
    <div className="App">
      <div>
        <Photos images={images} />
      </div>
    </div>
  );
}

export default App;
