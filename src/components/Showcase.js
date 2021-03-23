import React from 'react';
import ImageLoading from '../ImageLoading';

function Showcase(props){
  return(
    <div className="showcase">
       <ImageLoading
         src={props.data[props.dataItem]["img"]}
         alt={props.data[props.dataItem]["title"]}
       />
       <h3 className="showcase-title">
         {props.data[props.dataItem]["title"]}
       </h3>
    </div>
  )
}
export default Showcase;
