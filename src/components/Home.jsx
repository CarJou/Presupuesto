import React, {useState, useEffect} from "react";
import Presupuesto from "./Presupuesto";
import Form from "./Form";
import Listado from "./Listado";
import Control from "./Control";

const Home = () => {

   //definir el state
   const [presupuesto, setPresupuesto] = useState(0);
   const [restante, setRestante] = useState(0);
   const [mostrarCampo, setCampo] = useState(true);
   //agregar un listado de los gastos
   const [gastos, setGastos] = useState([]);
   const [ gasto, GuardarGasto] = useState({});
   const [crearGasto, setCrearGasto] = useState(false);

   //useEffect actualiza el restante
  useEffect( () => {
    if(crearGasto){
      //agrega el nuevo presupuesto
      GuardarGasto([
        ...gastos, 
        gasto
      ]);
      //resta del presupuesto actual
      const presupuestoRestante= restante - gasto.cantidad;
      setRestante(presupuestoRestante);
      //reset a false
      setCrearGasto(false);
    }
  }, [gasto]);


  
   
    return(
        <>
        <div className="container">
     <header>
       <h1>Gasto semanal</h1>
       <div className="contenido-principal contenido">
         { mostrarCampo ? 
         (
         <Presupuesto
       setPresupuesto={setPresupuesto}
       setRestante={setRestante} 
       setCampo={setCampo}/>) 
       : 
       <>
       <div className="row">
         <div className="one-half column">
        <Form
        GuardarGasto={GuardarGasto}
        setCrearGasto={setCrearGasto}
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