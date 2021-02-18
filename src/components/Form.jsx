import React, { useState } from "react";
import PropTypes from "prop-types";
import Error from "./Error";
import shortid from "shortid";


const Form = ({setGasto, guardarCrearGasto }) => {

    const [nombre, setNombre] = useState("");
    const [cantidad, setCantidad] = useState(0);
    const [error, setError] = useState(false);

   //cuando el user agrega un gasto
    const agregarGasto = e =>{
        e.preventDefault();
    
    //validar si la cantidad es -1, si es campo vacio o nan y si es string vacio
    if(cantidad < 1 || isNaN( cantidad )  || nombre.trim() === " "){
        setError(true);
        return;
    }
    setError(false);

    //construir el gasto
 const gasto = {
     nombre,
     cantidad,
     id: shortid.generate()
 }

    //pasar el gasto al listado
    setGasto(gasto);
    guardarCrearGasto(true);
 
    //resetear el form 
     setNombre("");
     setCantidad(0);
}

    return(
        <>
        <form onSubmit={agregarGasto}>
        
                   <h2 className="pres-title">Agrega tus gastos aquí</h2>
                   { error ? 
                   <Error mensaje="Ambos campos son obligatorios o el presupuesto es incorrecto"/>
                   : null }
                   <div className="campo">
                       <label>Nombre:</label>
                       <input 
                       type="text"
                       className="u-full-width"
                       placeholder="Ej. Transporte"
                       value={nombre}
                       onChange={ e => setNombre(e.target.value)}
                       />
                   </div>
                   <div className="campo">
                       <label>Valor:</label>
                       <input 
                       type="number"
                       className="u-full-width"
                       placeholder="Ej $3060"
                       value={cantidad}
                       onChange={ e => setCantidad(parseInt(e.target.value, 10))}
                       />
                   </div>
                   <input 
                   type="submit"
                   className="button"
                   value="Agregar"/>
              
          
           </form>
        </>
    )
}
Form.propTypes ={
    guardarCrearGasto: PropTypes.func.isRequired,
    setGasto: PropTypes.func.isRequired

}
export default Form;