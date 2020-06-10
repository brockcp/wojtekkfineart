import React, {Component} from 'react'
import './pages.css'
import { data_sculptures } from './Images'

class Sculptures extends Component {
  constructor(props){
    super(props);
    this.state = {
  	  sculptures: data_sculptures,
  	  sculpture: 0
    }
  }
  componentDidMount(){
    document.title = "Wojtek Kosmowski Fine Art | Sculptures"
  }
  onClick=(e)=>{
  	this.setState({
  		sculpture: e.target.dataset.index
  	})
  }
  render() {
    const images = this.state.sculptures.map((image,index) => (
      <img key={image.id} src={image.img} alt={image.title} data-index={index} />
    ));
  	return (
      <div>
       <div className="showcase">
        <img src={this.state.sculptures[this.state.sculpture]["img"]} alt={this.state.sculptures[this.state.sculpture]["title"]} />
        <h3>{this.state.sculptures[this.state.sculpture]["title"]}</h3>
       </div>

		   <div className="images" onClick={this.onClick} >
         {images}
       </div>
      </div>
  	);
  }
}

export default Sculptures
