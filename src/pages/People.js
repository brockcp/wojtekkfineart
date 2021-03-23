import React, {useState} from 'react'
import '../style.css'
import Thumbnails from '../components/Thumbnails';
import Showcase from '../components/Showcase';
import {data_people} from '../ImageSets'

function People(){
  document.title = "Wojtek Kosmowski Fine Art | People"
  const [data_item, setData_item] = useState(0);
	return (
    <div className="col">
       <Showcase data={data_people} dataItem={data_item}/>
       <Thumbnails data={data_people} setDataItem={setData_item}/>
    </div>
	);
}
export default People
