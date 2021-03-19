import React, {Component} from 'react'
import '../style.css'
import { data_animals } from '../ImageSets'

class Animals extends Component {
  constructor(props){
    super(props);
    this.state = {
  	  data_set: data_animals,
  	  data_item: 0
    }
  }
  componentDidMount(){
    document.title = "Wojtek Kosmowski Fine Art | Animals"
  }
  onClick=(e)=>{
  	this.setState({
  		data_item: e.target.dataset.index
  	})
  }
  render() {
    const images = this.state.data_set.map((x,y)=>(
      <div className={'thumbnail'}>
        <img key={x.id}
             src={x.img}
             alt={x.title}
             data-index={y}
             onClick={this.onClick}
        />
      </div>
    ));
  	return (
        <div className="col">
         <div className="showcase">
            <img src={this.state.data_set[this.state.data_item]["img"]}
                 alt={this.state.data_set[this.state.data_item]["title"]} />
         </div>
         <h3 className="showcase-title">{this.state.data_set[this.state.data_item]["title"]}</h3>
  		   <div className="thumbnails">
            {images}
         </div>
      </div>
  	);
  }
}

export default Animals
