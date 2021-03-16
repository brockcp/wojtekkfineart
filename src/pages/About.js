import React, {Component} from 'react'
import '../style.css'
class About extends Component{

  componentDidMount(){
    document.title = "Wojtek Kosmowski Fine Art | About"
  }
  render(){
    return (
     <div className="aboutbody">
       <h3 className="centered">Wojciech Kosmowski: A Brief Background
       </h3>
       <p className="left"><strong>Born</strong>:  Poland prior to WWII; lived through both the German and Russian occupations which taught me a great appreciation of life and survival skills.
       </p>
       <p className="left"><strong>Education</strong>:  Masters Degree Mechanical Engineering, Polytechnic Institute, Poznan, Poland
          Immigrated to California in 1961
       </p>
       <p className="left"><strong>Professional Career</strong>: Used my technical skills and distinguished myself by creating technologically advanced products that generated 39 patents and produced a base for starting 4 successful engineering companies which dealt in the international market exposing me to extensive travel and cultures worldwide.
       </p>
       <p className="left"><strong>Hobbies</strong>:  Photography, painting and sculpting. Now semi-retired and enjoy capturing the beauty of nature through a lens and expressing it on canvas via my vivid use of color with the enrichment of my experiences through travel and relationships.
          My childhood in Poland during the Second World War witnessed cruelty and misery brought upon Poland by the German occupation followed by Russian tyranny. Life in constant chaos, oppression, fear and tension developed in me survival instinct and hunger for solitude and beauty. I look for it in nature, observe it in the smallest details and try to capture it in sketches or sculptures. The poverty in which we lived stimulated my imagination and creativity.
          I take my inspiration from nature by hiking and admiring ever changing beauty and capture it on canvas, observing details which escape most people, and finding places which most dramatically portray nature. I also admire beauty and the infinite variety of human body forms where body language has more words than spoken, especially in human relations where expression such as happiness, sadness and terror are so vivid. I was born with a positive attitude and passion for life, trying to live it to the fullest and desire to share my experiences through art with others. My wish is to create something special in art that would stand the test of time and give joy for generations to come.
       </p>
      </div>
    )
  }
}

export default About
