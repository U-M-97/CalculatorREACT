import { getBottomNavigationActionUtilityClass } from '@mui/material'
import React from 'react'
import { ACTIONS }  from './App'

const reducer = (state, action) => {

    
  const evaluate = (state) => {
    const current = parseFloat(state.current)
    const previous = parseFloat(state.previous)
    if(isNaN(current) || isNaN(previous)){
        return ""
    }

    let result = ""
    switch(state.operation){
        case "+":
            result = current + previous
            break

        case "-":
            result = previous - current
            break

        case "x":
            result = current * previous
            break

        case "÷":
            result = previous / current
            break

        // case "%":
        //     result =     
    }

    return result.toString()
  }

  switch(action.type){
    case ACTIONS.ADD_DIGIT:
        
        console.log(state.current,state.previous,state.operation,action)
        if(state.current === "0" && action.digit === "0"){
            return state
        }

        if(action.digit == "." && state.current == null){
            return {
                ...state, current: "0."
            }
        }

        if(action.digit == "." && state.current.includes(".")){
            return state
        }

        return {
            ...state, current:`${state.current || ""}${action.digit}`,
        }

    case ACTIONS.CHOOSE_OPERATION:
    
        if(state.operation !=null && action.operation!=null){
            return {
                ...state, operation: action.operation
            }
        }

        if(state.current == null){
            return state
        }

        if(state.previous == null){
            return{
                ...state, operation: action.operation,
                previous: state.current,
                current: null
            }
        }

    case ACTIONS.CLEAR:
        return{
            
        }

    case ACTIONS.DELETE:

        if(state.current == null && state.operation != null && state.previous != null ){
            return{
                ...state, operation: null ,
                current: state.previous,
                previous: null
            }
        }

        if(state.current == null){
            return state
        }

        console.log(state)
        return{
            ...state, current:state.current.slice(0, -1)
        }

     case ACTIONS.EVALUATE:

        if(state.previous == null || state.operation == null || state.current == null){
            return state
        }


        return{
            ...state, current:evaluate(state),
            previous: null,
            operation: null
        }   
  }
  
}

export default reducer