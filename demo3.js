const redux = require("redux");
const reduxLogger = require("redux-logger");
const thunkMiddleware=require('redux-thunk').default
const axios=require('axios')

const applyMiddeware = redux.applyMiddleware;
const creatoreStore = redux.createStore;
const logger = reduxLogger.createLogger();

const FETCH_PRODUCT_REQUEST='FETCH_PRODUCT_REQUEST'
const FETCH_PRODUCT_SUCCESS='FETCH_PRODUCT_SUCCESS'
const FETCH_PRODUCT_FAILURE='FETCH_PRODUCT_FAILURE'

//Action Creator
function fetchProductRequest()
{
    return{
        type:FETCH_PRODUCT_REQUEST
    }
}

//Action Creator
function fetchProductSuccess(products)
{
    return{
        type:FETCH_PRODUCT_SUCCESS,
        payload:products
    }
}

//Action Creator
function fetchProductFailure(error)
{
    return{
        type:FETCH_PRODUCT_FAILURE,
        payload:error
    }
}

//Reducer
const productReducer=(state=initialState,action)=>
{
    switch(action.type)
    {
        case FETCH_PRODUCT_REQUEST:
            {
                return {
                    ...state,
                    loading:true
                }
            }
        case FETCH_PRODUCT_SUCCESS:
            {
                return{
                    ...state,
                    loading:false,
                    products:action.payload,
                    error:''
                }
            }
            case FETCH_PRODUCT_FAILURE:
                {
                    return{
                        ...state,
                        loading:false,
                        products:[],
                        error:action.payload
                    }
                }    
            default:
                {
                    return state
                }
    }
}


fetchProducts=()=>
{
    return function(dispatch)
    {
        dispatch(fetchProductRequest())
        const URL='http://localhost:8080/product/allProducts1'
        axios.get(URL).then(response=>{
            let products=response.data
            dispatch(fetchProductSuccess(products))
        }).catch(error=>{
            dispatch(fetchProductFailure(error.message))
        })
    }
}

const initialState={
    loading:false,
    products:[],
    error:''
}

let store=creatoreStore(productReducer,applyMiddeware(logger,thunkMiddleware))

store.dispatch(fetchProducts())
