import React, {Component} from 'react'
import './pages.css'
import { data_flowers } from './Images'

class Flowers extends Component {

  state = {
  	flowers: data_flowers,
  	selectedImageIndex: 0
  }

  componentDidMount(){
    document.title = "Wojtek Kosmowski Fine Art | Flowers"
  }

  onClickHandler = (e) => {
  	this.setState({
  		selectedImageIndex: e.target.dataset.index
  	})
  }

  render() {
    const images = this.state.flowers.map((image,index) => (
      <img key={image.id} src={image.img} alt={image.title} data-index={index} />
    ));
  	return (
      <div>
       <div className="showcase">
        <img src={this.state.flowers[this.state.selectedImageIndex]["img"]} alt={this.state.flowers[this.state.selectedImageIndex]["title"]} />
        <h3>{this.state.flowers[this.state.selectedImageIndex]["title"]}</h3>
       </div>

		   <div className="images" onClick={this.onClickHandler} >
         {images}
       </div>
      </div>
  	);
  }
}

export default Flowers
