import React from "react";
import PropTypes from "prop-types";
import {revisarPresupuesto} from "../Helper";

const Control = ({presupuesto, restante}) => {
    return(
    <>
    <div className="alert alert-primary">
    Presupuesto: ${presupuesto}
    </div>
    <div className={revisarPresupuesto(presupuesto, restante)}>
    Restante -${restante}
    </div>
    </>
    )

}
Control.propTypes ={
    presupuesto: PropTypes.number.isRequired,
    restante: PropTypes.number.isRequired

}

export default Control;