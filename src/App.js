import './App.css';
import {Page} from "@shopify/polaris";
import { useEffect, useState} from "react";
import ImageCard from "./components/ImageCard";
import LoadingCard from "./components/LoadingCard";
const API_URL = "https://api.nasa.gov/planetary/apod?api_key=7kKAmNa91CqlNCkmMFahjvbVn4tGvJRjotFaeqlF&start_date=2022-01-01&end_date=2022-01-07"
function App() {
    const [images,setImages] = useState([]);
    const [loading,setLoading] = useState(false);
    const fetchData = async () => {
        setLoading(true)
        const response = await fetch(API_URL).then(response => response.json())
        setImages(response)
        setLoading(false)
    }
    useEffect(() => {
       fetchData().finally()
    },[])

  return (
      <Page>
          {
              images.map((image,index) => <ImageCard key={index} image={image}/>)
          }
          {
              loading && <>
                  {[...Array(7)].map((o,index)=><LoadingCard key={index}/>)}
              </>
          }
      </Page>

  );
}




export default App;
