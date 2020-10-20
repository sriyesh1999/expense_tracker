import React,{useContext} from 'react'
import {GlobalContext} from '../context/GlobalState'

export const Balance=()=> {
    const {transaction}=useContext(GlobalContext)
    const amounts=transaction.map(t=>t.amount)
    const total=amounts.reduce((acc,amount)=>acc+amount,0).toFixed(2);

    return (
        <>
        <h4>your balance</h4>
    <h1 >${total}</h1>
            
        </>
    )
}

export default Balance
