import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';



function Dashboard() {

    const [referals, setReferals] = useState([])




    useEffect(() => {

        // const fetchRegions = async () => {
        //     const result = await axios(
        //         Api.apiUrl+'getregions',
        //     );
		// 	setRegionsArr(result.data.data)
        // };
        // fetchRegions();

        const fetchReferals = async () => {
            const response = await axios(
                '/api/showReferals',
            );
			setReferals(response.data)
        };
        fetchReferals();



        // const fetchReferals =  async  = () => {
        //     const response = await axios.get('/api/showReferals')
        //     setReferals(response.data);
        // }fetchRegions()

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
