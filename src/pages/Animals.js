import React, {useState} from 'react'
import '../style.css'
import Nav from '../components/Nav';
import Thumbnails from '../components/Thumbnails';
import Showcase from '../components/Showcase';
import {data_animals} from '../ImageSets'

function Animals(){
  document.title = "Wojtek Kosmowski Fine Art | Animals"
  const [data_item, setData_item] = useState(0);
	return (
    <div className="col">
       <Showcase data={data_animals} dataItem={data_item}/>
       <Thumbnails data={data_animals} setDataItem={setData_item}/>
       <Nav />
    </div>
	);
}
export default Animals
