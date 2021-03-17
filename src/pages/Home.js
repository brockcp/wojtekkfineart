import React, {Component} from 'react'
import '../style.css'
import { data_animals,
         data_flowers,
         data_people,
         data_landscapes,
         data_sculptures } from '../ImageSets'

class Home extends Component {
  constructor(props){
    super(props);
    this.state = {
  		data_set: [
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
        data_landscapes[1],
        data_people[0],
        data_sculptures[0],
  		],
  		data_item: 0
    }
  }
  onClick=(e)=>{
  	this.setState({
  		data_item: e.target.dataset.index
  	})
  }
  componentDidMount(){
    document.title = "Wojtek Kosmowski Fine Art"
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


export default Home
