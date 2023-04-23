
import './App.css';
import SearchHeader from './SearchHeader';
import searchimages from './api'
import { useState } from 'react';
import ImageList from './companent/ImageList'

function App() {

  const [images, setImages] = useState([])

   const handleSubmit= async(term)=>{
    
    const result = await searchimages(term);
    setImages(result);
  }

   return (
    <div className="App">
      <SearchHeader search={handleSubmit}/>
      <ImageList imagesPlacehalder={images}/>
    </div>
  );
}

export default App;
