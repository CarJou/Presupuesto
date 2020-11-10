import React, { useState } from "react";
import Error from "./Error";

const Presupuesto = ({setPresupuesto, setRestante, setCampo}) => {
    const [cantidad, setCantidad] = useState(0);
    const [error, setError] = useState(false);
    //function para leer el presupuesto
    //parseInt para convertir de string a number:)
    const definirPresupuesto = e => {
        setCantidad( parseInt(e.target.value, 10))
    }
    //definir presupuesto
    const addPresupuesto = e =>{
        e.preventDefault();
        //validar
        if(cantidad < 1 || isNaN(cantidad) ){
            setError(true);
            return;
        } 
        //si se pasa la validacion
        setError(false);
        //props desde Home :)
       setPresupuesto(cantidad);
       setRestante(cantidad);
       setCampo(false);
    }
    return(
        <>
        <h2>Coloca tu presupuesto</h2>
       { error ? <Error mensaje="Ups! El presupuesto no es correcto"/>  : null}
        <form
        onSubmit={addPresupuesto}>
            <input 
            type="number"
            className="u-full-width"
            placeholder="Coloca tu presupuesto"
            onChange={definirPresupuesto}/>

            <input 
            type="submit"
            className="button-primary u-full-width"
            value="Definir presupuesto"
            />
        </form>
        </>
    )
}
export default Presupuesto;