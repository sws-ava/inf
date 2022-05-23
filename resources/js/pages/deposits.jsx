import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

function Deposits() {

    const dispatch = useDispatch()

    const cash = useSelector(state =>state.cash)

    const addCash = () => {
        dispatch({type:"ADD_CASH", payload: 5})
    }

  return (
    <div>
        <div>Deposits</div>

        <button
            onClick={() => addCash()}
        >Add cash</button>
    </div>

  );
}


export default Deposits;
