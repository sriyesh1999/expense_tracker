import React ,{useContext}from 'react'
import {GlobalContext} from '../context/GlobalState'

export const IncomeExpenses=()=> {
    const {transaction}=useContext(GlobalContext)
    const add=[]
    const exp=[]
    for(let i of transaction)
    {
      
      if(i.amount>0){
        add.push(i.amount)
      }
      else{
        exp.push(i.amount)
      }
    }
    const a= add.reduce((acc,i)=>acc+i,0).toFixed(2)
    const e= exp.reduce((acc,i)=>acc+i,0).toFixed(2)
    return (
        <>
        <div className="inc-exp-container">
        <div>
          <h4>Income</h4>
    <p  className="money plus">+${Math.abs(a)}</p>
        </div>
        <div>
          <h4>Expense</h4>
          <p  className="money minus">-${Math.abs(e)}</p>
        </div>
      </div>
            
        </>
    )
}

export default IncomeExpenses
