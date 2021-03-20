import React, {useEffect, useState} from 'react'
import '../style.css'
import { data_flowers } from '../ImageSets'

function Flowers(){
  const dataaa = data_flowers;
  //const image = "http://ocwebworks.com/img/galaxy5.png"
  //const placeholder = "http://ocwebworks.com/img/ocbg.png"
  document.title = "Wojtek Kosmowski Fine Art | Flowers"
  const [loading, setLoading] = useState(true);
  const [currentSrc, updateSrc] = useState(placeholder);
  const [data_item, setData_item] = useState(0);

  useEffect(() => {
    const imageToLoad = new Image();
    imageToLoad.src = image;
    imageToLoad.onload = () => {
      setLoading(false);
      updateSrc(image);
    }
  },[image])

  const onClick = (e) => {
  		setData_item(e.target.dataset.index);
  }

    const images = data_flowers.map((x,y)=>(
      <div className='thumbnail'>
        <img key={x.id}
             src={x.img}
             alt={x.title}
             data-index={y}
             onClick={onClick}
        />
      </div>
    ));
  	return (
        <div className="col">flowers2
         <div className="showcase">
            <img src={data_flowers[data_item]["img"]}
                 alt={data_flowers[data_item]["title"]}
            />
         </div>
         <h3 className="showcase-title">{data_flowers[data_item]["title"]}</h3>
  		   <div className="thumbnails">
            {images}
         </div>
      </div>
  	);
  }


export default Flowers
