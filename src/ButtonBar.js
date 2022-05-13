// in ButtonBar.js
import React from 'react'
import {useEffect} from 'react'
import { useSelector, useDispatch, connect} from 'react-redux'
import { clearData, fetchData, incrementId, decrementId, inputId } from './features/dataSlice'

function ButtonBar(props){
  const dispatch = useDispatch()
  const data = useSelector((state) => state.data)

  const renderImg = () => {
    if(data.apiData) {
      return <img style={{'width': '100vw'}} src={data.apiData.primaryImage} alt={data.apiData.title} />
    } else {
      return <p>image here</p>
    }
  }
  useEffect(() => {
    dispatch(fetchData())
}, [props.objectId, dispatch])


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
          <div>        
        {data.objectId}
        {renderImg()}
      </div>
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
const mapStateToProps = (state) => ({
    objectId: state.data.objectId
  })

export default connect(mapStateToProps)(ButtonBar)