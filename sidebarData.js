import React from "react";
import HomeIcon from '@mui/icons-material/Home';
import CloudQueueIcon from '@mui/icons-material/CloudQueue';
import DeviceThermostatIcon from '@mui/icons-material/DeviceThermostat';
import QueryStatsIcon from '@mui/icons-material/QueryStats';

export const SidebarData = [
   {
    title:"Home",
    icon: <HomeIcon/>,
    link: "/home"

   },
   {
    title:"MQ-135 Sensor Data",
    icon: <CloudQueueIcon/>,
    link: "/data2"

   },
   {
    title:"DHT-11 Sensor Data",
    icon: <DeviceThermostatIcon/>,
    link: "/data"

    
   },
   {
    title:"Analytics",
    icon: <QueryStatsIcon/>,
    link: "/chartsline"

   }


   
   

]
 


