import React from 'react'
import { useSelector,useDispatch} from 'react-redux'
import { buyPizza } from '../redux/pizza/pizzaActions'

function PizzaContainer() {
    let nop=useSelector((state)=>state.noOfPizzas)
    let dispatch=useDispatch()
    return (
        <div>
            <h2 className='text-primary'>Welcome to Pizza Shop</h2>
            <hr/>
            <h3 className='text-danger'>Total Pizzas:{nop}</h3>
            <button onClick={()=>dispatch(buyPizza())} className='btn btn-success mt-2'>Buy Pizza</button>
        </div>
    )
}

export default PizzaContainer
