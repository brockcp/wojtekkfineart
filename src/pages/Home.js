import React, {Component} from 'react'
import './pages.css'
import { data_animals,
         data_flowers,
         data_people,
         data_landscapes,
         data_sculptures } from './Images'

class Home extends Component {
  constructor(props){
    super(props);
    this.state = {
  		home_images: [
        data_animals[16],
        data_landscapes[19],
        data_animals[15],
        data_animals[17],
        data_landscapes[20],
        data_animals[18],
        data_landscapes[21],
        data_landscapes[22],
        data_people[13],
        data_landscapes[14],
        data_landscapes[17],
        data_flowers[9],
        data_flowers[10],
  			data_animals[0],
  			data_animals[1],
        data_landscapes[0],
        data_landscapes[13],
        data_people[0],
        data_sculptures[0],
  		],
  		selectedImageIndex: 0
    }
  }
  onClickHandler=(e)=>{
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
        <img src={this.state.home_images[this.state.selectedImageIndex]["img"]}
             alt={this.state.home_images[this.state.selectedImageIndex]["title"]}
        />
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
