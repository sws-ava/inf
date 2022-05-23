import React from 'react';
import { useDispatch, useSelector } from 'react-redux';



function Dashboard() {
    const cash = useSelector(state =>state.cash)

  return (
    <div>
      Dashboard

    <div>Cash: {cash}  </div>



    </div>
  );
}


export default Dashboard;
