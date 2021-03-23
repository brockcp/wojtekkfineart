import React from 'react';
import ImageLoading from '../ImageLoading';

function Thumbnails(props){
  const images = props.data.map((x,y)=>(
    <div className='thumbnail'>
      <ImageLoading
         key={y}
         src={x.img}
         alt={x.title}
         onClick={()=>props.setDataItem(x.id)}
      />
    </div>
  ));
  return (
    <div className="thumbnails">
      {images}
    </div>
  )
}
export default Thumbnails;
