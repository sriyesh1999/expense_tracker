import React, { createContext,useReducer } from 'react'
import AppReducer from './AppReducer'
const intitialState = {
    transaction:
    [
//      { id: 1, text: 'Flower', amount: -20 },
//    { id: 2, text: 'Salary', amount: 300 },
//    { id: 3, text: 'Book', amount: -10 },
//    { id: 4, text: 'Camera', amount: 150 }
    ]
}

export  const GlobalContext=createContext(intitialState);
export  const GlobalProvider=({children})=>{
    const [state,dispatch] = useReducer(AppReducer,intitialState)
    function addTransaction(transaction){
        dispatch({
            type:'ADD TRANSACTION',
            payload:transaction
        })
    }
    function deleteTransaction(id){
        dispatch({
            type:'DELETE TRANSACTION',
            payload:id
    })    }
    return ( 
        <GlobalContext.Provider value={{transaction:state.transaction,deleteTransaction,addTransaction} }>  
         {children}
        </GlobalContext.Provider>
    );

}