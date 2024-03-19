import React from "react";

// <!--Footer Bootstrap card-->

const Footer = () => {
    return (
    <div className="footer card text-center mt-5">
    <div className="card-footer">
       Created with ❤️ by 
       {/* <!-- Github Icon--> */}
       <a
         data-mdb-ripple-init
         className="btn text-white btn-floating m-1 h-25"
         style="background-color: #333333"
         role="button"
         ><i className="fab fa-github"></i
       ></a>
   
       {/* <!-- Links to participants GitHub pages--> */}
       <a className="text-white" href="https://github.com/">Anderson Jesse</a>, 
       
       <a className="text-white" href="https://github.com/">Jermaine Bandoo</a>,
   
       <a className="text-white" href="https://github.com/">Thinh Vu</a>, 
      
       <a className="text-white" href="https://github.com/harsim3221">Harsimran Kaur</a>, and 
       
       <a className="text-white" href="https://github.com/">Iyanu Taiwo</a> (2024)
     </div>
   </div>
   );
};

export default Footer;