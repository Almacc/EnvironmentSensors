import React from "react";
import {Chart as ChartJS} from "chart.js/auto";
import {Bar, Doughnut, Line} from "react-chartjs-2";
//import "./App.css";

function Charts() {
    return ( 
        <div className = "Charts">
            <div className="Temperature">
            <Line
              data = {{
                labels: ["A", "B", "C"],
                datasets: [
                    {
                        label: "Temperature",
                        data:[200,300,400],
                    }, 
                   
                ],
        }}/>
            </div>

            <div className="Humidity">Chart 2
            <Line
              data = {{
                labels: ["A", "B", "C"],
                datasets: [
                    
                    {
                        label: "Humidity",
                        data:[20,40,250],
                    }, 
                    
                ],
        }}/>

            
            
            </div>
            <div className="Linear">Chart 3
            
            
            </div>
        </div>
    );
}

export default Charts;