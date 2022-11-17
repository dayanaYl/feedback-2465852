import { useState } from "react"

const FeedbackItem =() =>{
//Estados: presisten informacion a traves del ciclo de vida
//de un unico componente 

//estados iniciales 
const[rating, setRating ]= useState(2)
const[text, setText]= useState("Mejorar Curso, mejores recursos")
const sumarNota=()=>{
    //cambiar estado a rating 
    //parametro para el valor anterior 

    setRating((prev) =>{
        return prev + 1
    })
}
const restNota=()=>{
    //cambiar estado a rating 
    //parametro para el valor anterior 

    setRating((prev) =>{
        return prev - 1
    })
}

    return(
        <div className="card">
            <div className="num-display">
                { rating }
            </div>
            <div className="text-dispaly">
                { text }
            </div> 
            <button className="btn btn-primary" onClick={sumarNota }>
                Sumar nota
            </button>
            <br />
            <br />
            <button className="btn btn-primary"  onClick={restNota}>
                Restar Nota
            </button>
        </div>
    )
}

export default FeedbackItem