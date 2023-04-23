import axios from "axios";

const searchimages= async(term)=>{
    const response = await axios.get('https://api.unsplash.com/search/photos',{
      headers:{
        Authorization:'Client-ID rxay5sOItQ-LC8F5VvuDcPNo5fggD5FH68m0DDhXNo4',
      },
      params:{
        query:term, 
      },
    });
   
    return response.data.results;
  };

  export default  searchimages;