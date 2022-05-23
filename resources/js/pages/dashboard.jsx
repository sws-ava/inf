import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';



function Dashboard() {

    const [referals, setReferals] = useState([])




    useEffect(() => {



        const fetchReferals = async () => {
            const response = await axios(
                '/api/showReferals',
            );
			setReferals(response.data)
        };
        fetchReferals();



    }, []);



    let referalsArr = referals.map((referal, index) =>
        {
            return <li key={index} >{referal.referal}</li>
        }
    );




  return (
    <div>
      Dashboard

    <div
        onClick={() => showReferals()}
    >Show referals</div>

    <ul>{referalsArr}</ul>

    </div>
  );
}


export default Dashboard;
