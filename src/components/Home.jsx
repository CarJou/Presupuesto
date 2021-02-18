import React from "react";
import chanchi from "../images/chanchi.webp";
import "../css/home.css";

const Home = ({history}) => { 
    function handleOnClick() {
        history.push("/transaction");
      }
   return(    
 <>
 <div className="content-center">
 <div className="container-img">
    <img src={chanchi} className="img-home" alt="imagen home"></img>
 </div>

 
     <div className="container-text">
 <h1 className="text">Controlá</h1>
 <h2 className="text">tu dinero!</h2>
 <button onClick={handleOnClick} className="button">
     Ingresar
     </button>
     </div>
    
 </div>
 
    
 </>
 )
};

export default Home;