import React, {useState} from 'react'
import '../style.css'
import Nav from '../components/Nav';
import Thumbnails from '../components/Thumbnails';
import Showcase from '../components/Showcase';
import {data_flowers} from '../ImageSets'

function Flowers(){
  document.title = "Wojtek Kosmowski Fine Art | Flowers"
  const [data_item, setData_item] = useState(0);
	return (
    <div className="col">
       <Showcase data={data_flowers} dataItem={data_item}/>
       <Thumbnails data={data_flowers} setDataItem={setData_item}/>
       <Nav />
    </div>
	);
}
export default Flowers
