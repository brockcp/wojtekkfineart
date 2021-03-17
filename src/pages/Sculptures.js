import React, {Component} from 'react'
import '../style.css'
import { data_sculptures } from '../ImageSets'

class Sculptures extends Component {
  constructor(props){
    super(props);
    this.state = {
  	  data_set: data_sculptures,
  	  data_item: 0
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
    const images = this.state.data_set.map((x,y)=>(
      <div className={'thumbnail'}>
        <img key={x.id}
             src={x.img}
             alt={x.title}
             data-index={y}
             onClick={this.onClick}
        />
      </div>
    ));
  	return (
        <div>
         <div className="showcase">
            <img src={this.state.data_set[this.state.data_item]["img"]}
                 alt={this.state.data_set[this.state.data_item]["title"]} />
         </div>
         <h3 className="showcase-title">{this.state.data_set[this.state.data_item]["title"]}</h3>
  		   <div className="thumbnails">
            {images}
         </div>
      </div>
  	);
  }
}

export default Sculptures
