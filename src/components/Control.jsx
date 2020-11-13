import React from "react";

const Control = ({presupuesto, restante}) => {
    return(
    <>
    <div className="alert alert-primary">
    Presupuesto: $ {presupuesto}
    </div>
    <div className="alert">
    Restante $ {restante}
    </div>
    </>
    )

}
export default Control;