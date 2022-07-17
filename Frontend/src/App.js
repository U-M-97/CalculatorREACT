import "./App.css"
import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import { useState , useReducer } from 'react';
import reducer from "./reducer";

export const ACTIONS = {
  ADD_DIGIT: "addDigit",
  CHOOSE_OPERATION: "chooseOperation",
  CLEAR: "clear",
  DELETE: "delete",
  EVALUATE: "evaluate"
}

const App = () => {
  
  let [toggle, setToggle] = useState(true)

  const handleLightTheme = () => {
    setToggle(false)
  }

  const handleDarkTheme = () => {
    setToggle(true)
  }

  const [{current, previous, operation}, dispatch ] = useReducer(reducer, ACTIONS)
  // console.log(state)


  return (
    <div className='calculator'>
      <div className={ toggle ? "containerDark" : "containerLight" }>
        <div className="themeMode">
          <div className={ toggle ? 'themeModeContainerDark' : 'themeModeContainerLight' }>
            <LightModeOutlinedIcon className={ toggle ? 'lightThemeIconDark' : 'lightThemeIconLight' }  onClick={handleLightTheme}/>
            <DarkModeOutlinedIcon className={ toggle ? 'darkThemeIconDark' : 'darkThemeIconLight' } onClick={handleDarkTheme}/>
          </div>
        </div>

        <div className={ toggle ? "outputContainerDark" : "outputContainerLight" }>
          <div className={ toggle ? 'previousOperandDark' : 'previousOperandLight'}>
          {previous} {operation}
          </div>
          <div className={ toggle ? 'currentOperandDark' : 'currentOperandLight'}>
           {current} 
          </div>
        </div>

        <div className={ toggle ? 'numbersContainerDark' : 'numbersContainerLight'}>
          <div className={ toggle ? 'buttonsContainerDark' : 'buttonsContainerLight'}>
            <button className='buttonGreenAC' onClick={() => dispatch({type: ACTIONS.CLEAR})}>AC</button>
            <button className='buttonGreen' onClick={() => dispatch({type: ACTIONS.DELETE })}>DEL</button>
            <button className='buttonOrange' onClick={() => dispatch({type: ACTIONS.CHOOSE_OPERATION, operation:"÷"})}>÷</button>
            <button onClick={() => dispatch({type: ACTIONS.ADD_DIGIT, digit: "7"})}>7</button>
            <button onClick={() => dispatch({type: ACTIONS.ADD_DIGIT, digit: "8"})}>8</button>
            <button onClick={() => dispatch({type: ACTIONS.ADD_DIGIT, digit: "9"})}>9</button>
            <button className='buttonOrange' onClick={() => dispatch({type: ACTIONS.CHOOSE_OPERATION, operation:"x"})}>x</button>
            <button onClick={() => dispatch({type: ACTIONS.ADD_DIGIT, digit: "4"})}>4</button>
            <button onClick={() => dispatch({type: ACTIONS.ADD_DIGIT, digit: "5"})}>5</button>
            <button onClick={() => dispatch({type: ACTIONS.ADD_DIGIT, digit: "6"})}>6</button>
            <button className='buttonOrange' onClick={() => dispatch({type: ACTIONS.CHOOSE_OPERATION, operation:"+"})}>+</button>
            <button onClick={() => dispatch({type: ACTIONS.ADD_DIGIT, digit: "1"})}>1</button>
            <button onClick={() => dispatch({type: ACTIONS.ADD_DIGIT, digit: "2"})}>2</button>
            <button onClick={() => dispatch({type: ACTIONS.ADD_DIGIT, digit: "3"})}>3</button>
            <button className='buttonOrange' onClick={() => dispatch({type: ACTIONS.CHOOSE_OPERATION, operation:"-"})}>-</button>
            <button className='buttonGreen' onClick={() => dispatch({type: ACTIONS.CHOOSE_OPERATION, operation:"%"})}>%</button>
            <button onClick={() => dispatch({type: ACTIONS.ADD_DIGIT, digit: "0"})}>0</button>
            <button onClick={() => dispatch({ type: ACTIONS.ADD_DIGIT, digit: "."})}>.</button>
            <button className='buttonOrange' onClick={() => dispatch({type:ACTIONS.EVALUATE})}>=</button>
          </div>
        </div>

      </div>
    </div>
  )
}

export default App;