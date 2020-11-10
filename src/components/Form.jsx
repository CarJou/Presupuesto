import React, { useState } from "react";

const Form = () => {

    const [gasto, setGasto] = useState("");
    const [cantidad, setCantidad] = useState(0);
    const [error, setError] = useState(false);

   //cuando el user agrega un gasto
    const agregarGasto = e =>{
        e.preventDefault();
    }
    //validar si la cantidad es -1, si es campo vacio o nan y si el nombre es string vacio
    if(cantidad < 1 || isNaN(cantidad) || gasto.trim === ""){
        setError(true);
        return;
    }
    //construirlo

    //pasar el gasto al listado

    //reset 


    return(
        <>
        <form
        onSubmit={agregarGasto}/>
        
       <div className="row">
           <div className="one-half column">
               <form>
                   <h2>Agrega tus gastos aqui</h2>
                   <div className="campo">
                       <label>Nombre del gasto</label>
                       <input 
                       type="text"
                       className="u-full-width"
                       placeholder="Ej. Transporte"
                       value={gasto}
                       onChange={ e => setGasto(e.target.value)}
                       />
                   </div>
                   <div className="campo">
                       <label>Cantidad del gasto</label>
                       <input 
                       type="number"
                       className="u-full-width"
                       placeholder="Ej $3060"
                       value={cantidad}
                       onChange={ e => setCantidad(parseInt(e.target.value))}/>
                   </div>
                   <input 
                   type="submit"
                   className="button-primary u-full-width"/>
               </form>
           </div>
           <div className="one-half column">
               2
           </div>
       </div>
        </>
    )
}
export default Form;