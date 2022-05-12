// in ButtonBar.js
import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { clearData, fetchData, incrementId, decrementId, inputId } from './features/dataSlice'

function ButtonBar(props){
    const dispatch = useDispatch()
  const data = useSelector((state) => state.data)

    return (
        <div className="App">
          <div>
            <button onClick={() => dispatch(fetchData())}>Thunk!</button>
            <button onClick={() => dispatch(clearData())}>Clear</button>
            <button onClick={() => dispatch(incrementId())}>Next</button>
            <button onClick={() => dispatch(decrementId())}>Back</button>
          </div>
          <input value={ data.objectId } onChange={(e) => {
            dispatch(inputId(Number(e.target.value)))
          }} />
        </div>
      );

/*return (
    <div>
        <button value={-5} onClick={props.handleIterate}>Way Back</button>
        <button value={-1} onClick={props.handleIterate}>Back</button>
        <button value={1} onClick={props.handleIterate}>Next</button>
        <button value={5} onClick={props.handleIterate}>Big Next</button>
    </div>
)*/
}
 export default ButtonBar;