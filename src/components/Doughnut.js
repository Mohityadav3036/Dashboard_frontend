import React, { useState, useEffect } from 'react';
import axios from 'axios';
import DoughnutChart from './DoughnutChart';
// import './Doughtnut.css'; // Import CSS for styling
function Doughnut() {
  
    const [entries, setEntries] = useState([]);

    useEffect(() => {
        // Fetch data from the API
        axios.get(`${process.env.REACT_APP_BASE_URL}/getdata/get`)
            .then(response => {
                setEntries(response.data);
            })
            .catch(error => {
                console.error('There was an error fetching the data!', error);
            });
    }, []);
    
    const topEntries = [...entries]
    // .sort((a, b) => b.intensity - a.intensity)
    .slice(0, 20);


    return (
        <div className=' bg-sky-50 mt-[-20px] '>
            <div className="w-[70%] h-[700px] ml-[25%]">
                <DoughnutChart data={topEntries} />
            </div>
        </div>
    );
}

export default Doughnut
