import './App.css';
import {Page} from "@shopify/polaris";
import { useEffect, useState} from "react";
import ImageCard from "./components/ImageCard";
function App() {
    const [images,setImages] = useState([]);
    const fetchData = async () => {
        const url = "https://api.nasa.gov/planetary/apod?api_key=7kKAmNa91CqlNCkmMFahjvbVn4tGvJRjotFaeqlF&start_date=2022-01-01&end_date=2022-01-14"
        const response = await fetch(url).then(response => response.json())
        console.log(response)
        setImages(response)
    }
    useEffect(() => {
       fetchData().finally()
    },[])

  return (
      <Page>
          {
              images.map((image,index) => <ImageCard key={index} image={image}/>)
          }
      </Page>

  );
}



export default App;
