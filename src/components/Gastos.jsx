import React from "react";
import PropTypes from "prop-types";

const Gastos = ({gasto}) =>(
<li className ="gastos">
    <p>{gasto.nombre} 
    <span className="gasto"> $ {gasto.cantidad} </span>
    </p>
</li>
);
Gastos.propTypes ={
    gasto: PropTypes.object.isRequired
}
export default Gastos;