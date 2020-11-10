import React, {useState} from "react";
import Presupuesto from "./Presupuesto";
import Form from "./Form";

const Home = () => {

   //definir el state
   const [presupuesto, setPresupuesto] = useState(0);
   const [restante, setRestante] = useState(0);
   const [mostrarCampo, setCampo] = useState(true);

    return(
        <>
        <div className="container">
     <header>
       <h1>Gasto semanal</h1>
       <div className="contenido-principal contenido">
         { mostrarCampo ? 
         (<Presupuesto
       setPresupuesto={setPresupuesto}
       setRestante={setRestante} 
       setCampo={setCampo}/>) 
       : 
       ( <Form/>) }
       
      
       </div>
      
     </header>
   </div>
        </>
    )
}
export default Home;