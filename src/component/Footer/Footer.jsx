import React from "react";

// <!--Footer Bootstrap card-->

const Footer = () => {
  
  return (
    <div className="footer card text-center mt-5">
        <div className="card-footer">
          Created with ❤️ by 
          <a
            data-mdb-ripple-init
            className="btn text-white m-1 h-25"
            style={{backgroundColor: "#33333"}}
            role="button"
          >
      </a>
    
          <a className="text-white" href="https://github.com/andsn1">Anderson Jesse</a> , 
          
          <a className="text-white" href="https://github.com/jjbstudent">Jermaine Bandoo</a> ,
      
          <a className="text-white" href="https://github.com/tinxtin">Thinh Vu</a> ,
          
          <a className="text-white" href="https://github.com/harsim3221">Harsimran Kaur and</a> ,
          
          <a className="text-white" href="https://github.com/solidmoneyti">Iyanu Taiwo</a> (2024)
      </div>
    </div>
  )
}



export default Footer;