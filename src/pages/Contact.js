import React from 'react'

function Contact(){
    document.title = "Wojtek Kosmowski Fine Art | Contact"
    return (
       <div className="mh-600 col-sm-12 col-md-10 offset-md-1 col-lg-8 offset-lg-2 text-center">
         <p className="">Whether you are interested in purchasing a piece of art or learning more about
           my works, please feel free to send me an email.
         </p>
         <a href="mailto:info@wojtekkfineart.com"
            className="button"
            target="_blank"
            rel="noopener noreferrer">
          email
        </a>
       </div>
    )
}
export default Contact
