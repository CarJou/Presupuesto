import React from "react";
import Gastos from "./Gastos";
import PropTypes from "prop-types";

const Listado = ({gastos}) =>(

<div className="gastos-realizados">
    <h2>Listado</h2>
{gastos.map(gasto=>(
    <Gastos 
         key = {gasto.id}
         gasto={gasto} 
    />
) )
}
</div>
    );
    Listado.propTypes ={
        gastos: PropTypes.array.isRequired
    }

export default Listado;