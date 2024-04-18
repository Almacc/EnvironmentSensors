import React, { useState, useEffect } from "react";
import "./data.css";

const Data = () => {
    const [items, setItems] = useState([]);
    const [startDate, setStartDate] = useState(null);
    const [endDate, setEndDate] = useState(null);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = () => {
        fetch("http://localhost:8081/dh11/api.php")
            .then(res => res.json())
            .then(
                (result) => {
                    console.log(result);
                    setItems(result);
                },
                (error) => {
                    console.error('Error fetching data:', error);
                }
            );
    };

    const filterByDateRange = () => {
        if (!startDate || !endDate) {
            return;
        }

        const filteredItems = items.filter(data => {
            const date = new Date(data.datetime);
            return date >= new Date(startDate.setHours(0, 0, 0, 0)) && date <= new Date(endDate.setHours(23, 59, 59, 999));
        });

        setItems(filteredItems);
    };

    const resetFilter = () => {
        setStartDate(null);
        setEndDate(null);
        fetchData();
    };

    return (
        <div className="container mt-4">
            <div className="container mt-4 d-flex justify-content-center align-items-center flex-column">
                <h1 className="text-uppercase"style={{ fontFamily: 'Roboto, sans-serif', fontSize: '2.5em', marginBottom: '0' }}>Table View - DHT11 Sensor</h1>
                <div className="filter-controls">
                    <label>Start Date:</label>
                    <input type="date" value={startDate ? startDate.toISOString().split('T')[0] : ''} onChange={e => setStartDate(new Date(e.target.value))} />
                    <label>End Date:</label>
                    <input type="date" value={endDate ? endDate.toISOString().split('T')[0] : ''} onChange={e => setEndDate(new Date(e.target.value))} />
                    <button className="filter-button" onClick={filterByDateRange}>Filter</button>
                    <button className="filter-button" onClick={resetFilter}>Reset</button>
                </div>
            </div>
            <div className="table-container">
                <table className="table table-bordered custom-table">
                    <thead className="custom-thead">
                        <tr className="labelColor">
                            <th className="labelColor">ID</th>
                            <th className="labelColor">Temperature</th>
                            <th className="labelColor">Humidity</th>
                            <th className="labelColor">Date/Time</th>
                        </tr>
                    </thead>
                    <tbody>
                        {items.map(data => (
                            <tr className='fontContent' key={data.id}>
                                <td className='fontContent'>{data.id}</td>
                                <td className='fontContent'>{data.temperature}</td>
                                <td className='fontContent'>{data.humidity}</td>
                                <td className='fontContent'>{data.datetime}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default Data;