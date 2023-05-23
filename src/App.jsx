import './App.css'
import {Routes, Route} from "react-router-dom"
import MyContext from "./mycontext";
import Navigation from "./components/Navigation";
import { useState, useEffect } from "react";
// Pages
import Home from "./pages/Home";
import Favoritos from "./pages/Favoritos";

function App() {
  const [fotos, setFotos] = useState([]);

  useEffect(() => {
    const myHeaders = new Headers();
    myHeaders.append(
      "Authorization",
      "mZmPC9Yi31pemLtPkoHS4Ajbo6P3Db9hvG6IUAlwVxjPUtfVqQIYAzd3"
    );

    const requestOptions = {
      method: "GET",
      headers: myHeaders,
      redirect: "follow"
    };

    fetch("https://api.pexels.com/v1/search?query=people", requestOptions)
      .then((response) => response.json())
      .then((result) => {
        const photos = result.photos.map((item) => {
          return {
            id: item.id,
            src: item.src,
            alt: item.alt,
            liked: item.liked
          };
        });
        setFotos(photos);
      })
      .catch((error) => console.log("error", error));
  }, []);

  const setFavoritos = (id) => {
    const index = fotos.findIndex((foto) => foto.id === id);
    fotos[index].liked = !fotos[index].liked;
    setFotos([...fotos]);
  };

  return (
    <MyContext.Provider value={{ fotos, setFavoritos }}>
      <div className="App">
        <Navigation />
        <Routes>
          <Route element={<Home />} index />
          <Route path="favoritos" element={<Favoritos />} />
        </Routes>
      </div>
    </MyContext.Provider>
  );
}
export default App;