import React, {Component} from 'react'
import './pages.css'
import { data_animals } from './Images'

class Animals extends Component {

  state = {
  	animals: data_animals,
  	selectedImageIndex: 0
  }

  componentDidMount(){
    document.title = "Wojtek Kosmowski Fine Art | Animals"
  }

  onClickHandler = (e) => {
  	this.setState({
  		selectedImageIndex: e.target.dataset.index
  	})
  }

  render() {
    const images = this.state.animals.map((image,index) => (
      <img key={image.id} src={image.img} alt={image.title} data-index={index} />
    ));
  	return (
      <div>
       <div className="showcase">
        <img src={this.state.animals[this.state.selectedImageIndex]["img"]} alt={this.state.animals[this.state.selectedImageIndex]["title"]} />
        <h3>{this.state.animals[this.state.selectedImageIndex]["title"]}</h3>
       </div>

		   <div className="images" onClick={this.onClickHandler} >
         {images}
       </div>
      </div>
  	);
  }
}

export default Animals
