
import ImageItems from "./ImageItems";

 function ImageList({imagesPlacehalder}) {
  return (
    <div className="imageList">
        {imagesPlacehalder.map((image,index) => {
          return  <ImageItems key={index} image={image}/>
        })}
    </div>
  )
}

export default ImageList;
