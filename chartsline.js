import React, { useState, useEffect } from "react";
import { Line, Bar } from "react-chartjs-2";
import "./chartstyle.css";

function ChartsLine() {
    const [temperatureData, setTemperatureData] = useState([]);
    const [humidityData, setHumidityData] = useState([]);
    const [dateLabels, setDateLabels] = useState([]);
    const [loading, setLoading] = useState(true);
    const [gasLevelData, setGasLevelData] = useState([]);
    const [gasDateLabels, setGasDateLabels] = useState([]);
    
    useEffect(() => {
        fetchData();
        fetchData2();
    }, []);

    const fetchData = async () => {
        try {
            const response = await fetch("http://localhost:8081/dh11/api.php");
            const data = await response.json();

            const temperatures = data.map(entry => entry.temperature);
            const humidities = data.map(entry => entry.humidity);
            const dates = data.map(entry => entry.datetime);

            setTemperatureData(temperatures);
            setHumidityData(humidities);
            setDateLabels(dates);
            setLoading(false);
        } catch (error) {
            console.error("Error fetching data:", error);
            setLoading(false);
        }
    };

    const fetchData2 = async () => {
        try {
            const response = await fetch("http://localhost:8081/dh11/api2.php");
            const data = await response.json();

            const gaslevel = data.map(entry => entry.gaslevel);
            const gasdates = data.map(entry => entry.datetime);

            setGasLevelData(gaslevel);
            setGasDateLabels(gasdates);
            setLoading(false);
        } catch (error) {
            console.error("Error fetching data:", error);
            setLoading(false);
        }
    };

    return (
        <div className="Charts">
            {!loading && (
                <>
                    <div className="Temperature">
                        <Line
                            data={{
                                labels: dateLabels,
                                datasets:[
                                    {
                                        label: "Temperature",
                                        data: temperatureData,
                                        borderColor: "#DA5D5C"
                                    }
                                ]
                            }}
                        />
                    </div>

                    <div className="Humidity">
                        <Line
                            data={{
                                labels: dateLabels,
                                datasets: [
                                    {
                                        label: "Humidity",
                                        data: humidityData,
                                        borderColor: "#595B97"
                                    },
                                ],
                            }}
                        />
                    </div>
                    <div className="GasLevels">
                        <Line
                            data={{
                                labels: gasDateLabels, 
                                datasets: [
                                    {
                                        label: "Gas Level",
                                        data: gasLevelData,
                                    },
                                ],
                            }}
                        />
                    </div>
                    <div className="Temperaturebar">
                        <Bar
                            data={{
                                labels: dateLabels, 
                                datasets: [
                                    {
                                        label: "Temperature",
                                        data: temperatureData,
                                        backgroundColor: "#DA5D5C"
                                    },
                                    {
                                        label: "Humidity",
                                        data: humidityData,
                                        backgroundColor: "#595B97"
                                    },
                                ],
                            }}
                        />
                    </div>
                    <div className="GasLavelbar">
                        <Bar
                            data={{
                                labels: dateLabels, 
                                datasets: [
                                    {
                                        label: "Gas Level",
                                        data: gasLevelData,
                                    },
                                ],
                            }}
                        />
                    </div>
                </>
            )
            }
            
            
           
        </div>
        
        
        
        
    );
    
}

export default ChartsLine;
