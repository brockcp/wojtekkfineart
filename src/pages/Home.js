import React, {useState} from 'react'
import '../style.css'
import Thumbnails from '../components/Thumbnails';
import Showcase from '../components/Showcase';
import {data_home} from '../ImageSets'

function Home(){
  document.title = "Wojtek Kosmowski Fine Art | Welcome"
  const [data_item, setData_item] = useState(0);
	return (
    <div className="col">
       <Showcase data={data_home} dataItem={data_item}/>
       <Thumbnails data={data_home} setDataItem={setData_item}/>
    </div>
	);
}
export default Home
