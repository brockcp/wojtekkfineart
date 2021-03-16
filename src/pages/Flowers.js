import React, {Component} from 'react'
import '../style.css'
import { data_flowers } from '../ImageSets'

class Flowers extends Component {
  constructor(props){
    super(props);
    this.state = {
  	  flowers: data_flowers,
  	  flower: 0
    }
  }
  componentDidMount(){
    document.title = "Wojtek Kosmowski Fine Art | Flowers"
  }
  onClick=(e)=>{
  	this.setState({
  		flower: e.target.dataset.index
  	})
  }
  render() {
    const images = this.state.flowers.map((image,index) => (
      <img key={image.id} src={image.img} alt={image.title} data-index={index} />
    ));
  	return (
      <div>
       <div className="showcase">
        <img src={this.state.flowers[this.state.flower]["img"]} alt={this.state.flowers[this.state.flower]["title"]} />
        <h3>{this.state.flowers[this.state.flower]["title"]}</h3>
       </div>

		   <div className="images" onClick={this.onClick} >
         {images}
       </div>
      </div>
  	);
  }
}

export default Flowers
