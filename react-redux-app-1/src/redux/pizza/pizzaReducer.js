import { BUY_PIZZA } from "./pizzaTypes"

export const initialState={
    noOfPizzas:40
}
export const pizzaReducer=(state=initialState,action)=>
{
    switch(action.type)
    {
        case BUY_PIZZA:
            {
                return{
                    ...state,
                    noOfPizzas:state.noOfPizzas-1
                }
            }
        default:
            {
                return state
            }
    }
}