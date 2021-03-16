import React, {Component} from 'react'
import '../style.css'
import { data_animals } from '../ImageSets'

class Animals extends Component {
  constructor(props){
    super(props);
    this.state = {
  	  animals: data_animals,
  	  animal: 0
    }
  }
  componentDidMount(){
    document.title = "Wojtek Kosmowski Fine Art | Animals"
  }
  onClick=(e)=>{
  	this.setState({
  		animal: e.target.dataset.index
  	})
  }
  render() {
    const images = this.state.animals.map((x,y)=>(
      <div className={'thumbnails'}>
        <img key={x.id}
             src={x.img}
             alt={x.title}
             data-index={y}
             onClick={this.onClick}
        />
      </div>
    ));
  	return (
      <div>
         <div className="showcase">
            <img src={this.state.animals[this.state.animal]["img"]}
                 alt={this.state.animals[this.state.animal]["title"]} />
            <h3>{this.state.animals[this.state.animal]["title"]}</h3>
         </div>

  		   <div className="images">
            {images}
         </div>
      </div>
  	);
  }
}

export default Animals
