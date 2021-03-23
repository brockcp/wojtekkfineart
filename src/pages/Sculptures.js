import React, {useState} from 'react'
import '../style.css'
import Thumbnails from '../components/Thumbnails';
import Showcase from '../components/Showcase';
import {data_sculptures} from '../ImageSets'

function Sculptures(){
  document.title = "Wojtek Kosmowski Fine Art | Sculptures"
  const [data_item, setData_item] = useState(0);
	return (
    <div className="col">
       <Showcase data={data_sculptures} dataItem={data_item}/>
       <Thumbnails data={data_sculptures} setDataItem={setData_item}/>
    </div>
	);
}
export default Sculptures
