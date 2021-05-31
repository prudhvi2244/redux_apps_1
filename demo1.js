const redux=require('redux')
const reduxLogger=require('redux-logger')
const applyMiddeware=redux.applyMiddleware
const creatoreStore=redux.createStore
const logger=reduxLogger.createLogger()


const BUY_PIZZA='BUY_PIZZA'
const BUY_CAKE='BUY_CAKE'
const BUY_ICECREAM='BUY_ICECREAM'

// Action Creator
function buyIcecream()
{
    return{
        type:BUY_ICECREAM
    }
}



// Action Creator
function buyCake()
{
    return{
        type:BUY_CAKE
    }
}

// Action Creator
function buyPizza()
{
    return{
        type:BUY_PIZZA
    }
}

const initialState={
    noOfPizzas:20,
    noOfCakes:85,
    noOfIcecreams:10
}

//Reducer
const reducer=(state=initialState,action)=>
{
    switch(action.type)
    {
        case BUY_PIZZA:
            {
                return {
                    ...state,
                    noOfPizzas:state.noOfPizzas-1
                }
            }
        case BUY_CAKE:
            {
                return{
                    ...state,
                    noOfCakes:state.noOfCakes-1
                }
            }
            case BUY_ICECREAM:
            {
                return{
                    ...state,
                    noOfIcecreams:state.noOfIcecreams-1
                }
            }
        default:
            {
                return state
            }
    }
}

let store=creatoreStore(reducer,applyMiddeware(logger))
console.log('Initial State :',store.getState())
//store.subscribe(()=>console.log('Updated State :',store.getState()))
store.subscribe(()=>{})
store.dispatch(buyPizza())
store.dispatch(buyCake())
store.dispatch(buyIcecream())
