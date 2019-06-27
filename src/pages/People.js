import React, {Component} from 'react'
import './pages.css'
import { data_people } from './Images'

class People extends Component {

  state = {
  	people: data_people,
  	selectedImageIndex: 0
  }

  componentDidMount(){
    document.title = "Wojtek Kosmowski Fine Art | People"
  }

  onClickHandler = (e) => {
  	this.setState({
  		selectedImageIndex: e.target.dataset.index
  	})
  }

  render() {
    const images = this.state.people.map((image,index) => (
      <img key={image.id} src={image.img} alt={image.title} data-index={index} />
    ));
  	return (
      <div>
       <div className="showcase">
        <img src={this.state.people[this.state.selectedImageIndex]["img"]} alt={this.state.people[this.state.selectedImageIndex]["title"]} />
        <h3>{this.state.people[this.state.selectedImageIndex]["title"]}</h3>
       </div>

		   <div className="images" onClick={this.onClickHandler} >
         {images}
       </div>
      </div>
  	);
  }
}

export default People
