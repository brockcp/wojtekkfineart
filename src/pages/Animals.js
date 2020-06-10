import React, {Component} from 'react'
import './pages.css'
import { data_animals } from './Images'

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
    const images = this.state.animals.map((image,index)=>(
      <img key={image.id} src={image.img} alt={image.title} data-index={index} />
    ));
  	return (
      <div>
       <div className="showcase">
        <img src={this.state.animals[this.state.animal]["img"]} alt={this.state.animals[this.state.animal]["title"]} />
        <h3>{this.state.animals[this.state.animal]["title"]}</h3>
       </div>

		   <div className="images" onClick={this.onClick} >
         {images}
       </div>
      </div>
  	);
  }
}

export default Animals
