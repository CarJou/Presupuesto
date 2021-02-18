import React, {useState, useEffect} from "react";
import Presupuesto from "./Presupuesto";
import Form from "./Form";
import Listado from "./Listado";
import Control from "./Control";
import "../css/presupuesto.css";

const Home = () => {

   //definir el state
   const [presupuesto, setPresupuesto] = useState(0);
   const [restante, setRestante] = useState(0);
   const [mostrarCampo, setCampo] = useState(true);
   //agregar un listado de los gastos
   //const [gastos, setGastos] = useState([]);
   const [ gastos, GuardarGastos] = useState([]);
   const [gasto, setGasto] = useState({});
   const [crearGasto, guardarCrearGasto] = useState(false);
   //useEffect actualiza el restante
  useEffect( () => {
    if(crearGasto){
      //agrega el nuevo presupuesto
      GuardarGastos([
        ...gastos, 
        gasto
      ]);
      //resta del presupuesto actual
      const presupuestoRestante= restante - gasto.cantidad;
      setRestante(presupuestoRestante);
      //reset a false
      guardarCrearGasto(false);
    }
  }, [gasto, crearGasto, restante, gastos]);

   
    return(
        <>
        <div className="container">
     <header>
       
       <div className="contenido-principal contenido">
         <h1 className="title">Mis gastos</h1>
         { mostrarCampo ? 
         
         <Presupuesto
       setPresupuesto={setPresupuesto}
       setRestante={setRestante} 
       setCampo={setCampo}/> 
       : 
       <>
       <div className="row">
         <div className="one-half column">
        <Form
        guardarCrearGasto = {guardarCrearGasto}
        setGasto={setGasto}
        />  
        </div>
       
       
        <div className="one-half column">
        <Listado 
        gastos={gastos}/>

        <Control 
        presupuesto={presupuesto}
        restante={restante} />

        </div>
        </div>
        </>
       }
       
       
      
       </div>
      
     </header>
   </div>
        </>
    )
}
export default Home;