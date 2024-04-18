import React from "react";
import dht11Image from "../images/dht11sensorimg.jpg";
import mq135Image from "../images/MQ135sensorimg.jpg";

function HomePage() {
  return (
    <div className="home-page">
      <h1>Alessandro Maccarrone</h1>
      <h1>EveriroSense </h1>
      <h2>Smart Environmental Monitoring System</h2>
      <div className="info-box-container">
        <div className="info-box">
          <img src={dht11Image} alt="DHT11" />
          <h3>DHT11 Info</h3>
          {"The DHT11 sensor is a digital temperature and humidity sensor renowned for its accuracy and simplicity. With a measurement range of 0°C to 50°C for temperature and 20% to 90% RH for humidity, it offers reliable data in various environments. Operating on just one data pin, it communicates digitally and is compatible with most microcontrollers. Its applications range from weather stations to HVAC systems, making it a staple in projects requiring precise temperature and humidity monitoring. Despite its modest cost, the DHT11 delivers consistent and dependable performance, cementing its status as a popular choice among DIY enthusiasts and professionals alike."}
        </div>
        <div className="info-box">
          <img src={mq135Image} alt="MS15" />
          <h3>MS15 Info</h3>
          {"The MQ135 sensor is a versatile air quality sensor designed to detect various gases, including ammonia, nitrogen oxides, and carbon dioxide. Operating on an analog output basis, it provides readings corresponding to gas concentrations, facilitating accurate air quality assessment. With its wide measurement range and sensitivity to multiple gases, the MQ135 is invaluable in pollution detection devices, gas leak detectors, and indoor air quality monitoring systems. Its affordability and ease of integration make it a preferred option for projects aimed at enhancing environmental safety and public health. Whether deployed in industrial settings or residential environments, the MQ135 sensor plays a pivotal role in ensuring air quality standards are upheld and potential hazards are mitigated effectively."}
        </div>
      </div>
      
    </div>
  );
}

export default HomePage;