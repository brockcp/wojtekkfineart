import React, {Component} from 'react'
import './pages.css'
import { data_animals,
         data_flowers,
         data_people,
         data_landscapes,
         data_sculptures } from './Images'

class Home extends Component {

  state = {
  		home_images: [
  			data_animals[0],
  			data_animals[1],
        data_landscapes[0],
        data_landscapes[1],
        data_people[0],
        data_landscapes[2],
        data_sculptures[0],
        data_flowers[1],
        data_landscapes[5],
        data_flowers[4],
        data_sculptures[7],
        data_people[1]
  		],
  		selectedImageIndex: 0
  };

  onClickHandler = (e) => {
  	this.setState({
  		selectedImageIndex:  e.target.dataset.index
  	})
  }

  componentDidMount(){
    document.title = "Wojtek Kosmowski Fine Art"
  }

  render() {
    const images = this.state.home_images.map((image,index) => (
      <img key={image.id} src={image.img} alt={image.title} data-index={index} />
    ));
  	return (
      <div>
       <div className="showcase">
        <img src={this.state.home_images[this.state.selectedImageIndex]["img"]} alt={this.state.home_images[this.state.selectedImageIndex]["title"]} />
        <h3>{this.state.home_images[this.state.selectedImageIndex]["title"]}</h3>
       </div>

		   <div className="images" onClick={this.onClickHandler} >
         {images}
       </div>
      </div>
  	);
  }
}

export default Home
