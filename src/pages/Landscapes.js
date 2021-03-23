import React, {useState} from 'react'
import '../style.css'
import Thumbnails from '../components/Thumbnails';
import Showcase from '../components/Showcase';
import {data_landscapes} from '../ImageSets'

function Landscapes(){
  document.title = "Wojtek Kosmowski Fine Art | Landscapes"
  const [data_item, setData_item] = useState(0);
	return (
    <div className="col">
       <Showcase data={data_landscapes} dataItem={data_item}/>
       <Thumbnails data={data_landscapes} setDataItem={setData_item}/>
    </div>
	);
}
export default Landscapes
