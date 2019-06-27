import React, {Component} from 'react'
import './pages.css'
import { data_sculptures } from './Images'

class Sculptures extends Component {

  state = {
  	sculptures: data_sculptures,
  	selectedImageIndex: 0
  }

  componentDidMount(){
    document.title = "Wojtek Kosmowski Fine Art | Sculptures"
  }

  onClickHandler = (e) => {
  	this.setState({
  		selectedImageIndex: e.target.dataset.index
  	})
  }

  render() {
    const images = this.state.sculptures.map((image,index) => (
      <img key={image.id} src={image.img} alt={image.title} data-index={index} />
    ));
  	return (
      <div>
       <div className="showcase">
        <img src={this.state.sculptures[this.state.selectedImageIndex]["img"]} alt={this.state.sculptures[this.state.selectedImageIndex]["title"]} />
        <h3>{this.state.sculptures[this.state.selectedImageIndex]["title"]}</h3>
       </div>

		   <div className="images" onClick={this.onClickHandler} >
         {images}
       </div>
      </div>
  	);
  }
}

export default Sculptures
