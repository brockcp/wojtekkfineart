import React, {Component} from 'react'
import './pages.css'
import { data_landscapes } from './Images'

class Landscapes extends Component {
  constructor(props){
    super(props);
    this.state = {
  	  landscapes: data_landscapes,
  	  landscape: 0
    }
  }
  componentDidMount(){
    document.title = "Wojtek Kosmowski Fine Art | Landscapes"
  }
  onClick=(e)=>{
  	this.setState({
  		landscape: e.target.dataset.index
  	})
  }
  render() {
    const images = this.state.landscapes.map((image,index) => (
      <img key={image.id} src={image.img} alt={image.title} data-index={index} />
    ));
  	return (
      <div>
       <div className="showcase">
        <img src={this.state.landscapes[this.state.landscape]["img"]} alt={this.state.landscapes[this.state.landscape]["title"]} />
        <h3>{this.state.landscapes[this.state.landscape]["title"]}</h3>
       </div>

		   <div className="images" onClick={this.onClick} >
         {images}
       </div>
      </div>
  	);
  }
}

export default Landscapes
