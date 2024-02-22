import React, {useState} from 'react'
import '../style.css'
import Thumbnails from '../components/Thumbnails';
import Showcase from '../components/Showcase';
import {data_photos} from '../ImageSets'

function Photos(){
  document.title = "Wojtek Kosmowski Fine Art | Backyard Safari"
  const [data_item, setData_item] = useState(0);
	return (
    <div className="col backyardsafari-pb">
       <Showcase data={data_photos} dataItem={data_item}/>
       <Thumbnails data={data_photos} setDataItem={setData_item}/>
    </div>
	);
}
export default Photos
