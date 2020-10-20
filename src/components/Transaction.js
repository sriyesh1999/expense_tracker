import React ,{useContext}from 'react'
import {GlobalContext} from '../context/GlobalState'
export const  Transaction=({t})=> {
    const {deleteTransaction}=useContext(GlobalContext)
    const sign =t.amount <0?'-':'+';
    return (
        <>
        <li className={t.amount<0?'minus':'plus'}>
    {t.text} <span>{sign}${Math.abs(t.amount)}</span><button className="delete-btn" onClick={()=>deleteTransaction(t.id)}>x</button>
        </li> 
        </>
    )
}

export default Transaction
