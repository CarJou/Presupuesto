import React from "react";
import Gastos from "./Gastos";
import PropTypes from "prop-types";

const Listado = ({gastos, deleteGasto, gasto}) =>(

<div className="gastos-realizados">
{gastos.map(gasto=>(
    <Gastos 
         key = {gasto.id}
         gasto={gasto} 
         deleteGasto={deleteGasto}
    />
) )
}
</div>
    );
    Listado.propTypes ={
        gastos: PropTypes.array.isRequired
    }

export default Listado;