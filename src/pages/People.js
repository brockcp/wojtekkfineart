import React, {Component} from 'react'
import '../style.css'
import { data_people } from '../ImageSets'

class People extends Component {
  constructor(props){
    super(props);
    this.state = {
  	  people: data_people,
  	  person: 0
    }
  }
  componentDidMount(){
    document.title = "Wojtek Kosmowski Fine Art | People"
  }
  onClick=(e)=>{
  	this.setState({
  		person: e.target.dataset.index
  	})
  }
  render() {
    const images = this.state.people.map((image,index) => (
      <img key={image.id} src={image.img} alt={image.title} data-index={index} />
    ));
  	return (
      <div>
       <div className="showcase">
        <img src={this.state.people[this.state.person]["img"]} alt={this.state.people[this.state.person]["title"]} />
        <h3>{this.state.people[this.state.person]["title"]}</h3>
       </div>

		   <div className="images" onClick={this.onClick} >
         {images}
       </div>
      </div>
  	);
  }
}

export default People
