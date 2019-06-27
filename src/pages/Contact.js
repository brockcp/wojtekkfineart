import React, {Component} from 'react'

class Contact extends Component{

  componentDidMount(){
    document.title = "Wojtek Kosmowski Fine Art | Animals"
  }
  render(){
    return (
     <div className="contactbody">
       <h3>Whether you are interested in purchasing a piece of art or learning more about
       my works, please feel free to send me an email.
       </h3>
       <a href="mailto:wkosmowski@cox.net" className="button">email</a>
     </div>
    )
  }
}

export default Contact
