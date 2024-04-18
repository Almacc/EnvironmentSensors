import React from "react";
import HomeIcon from '@mui/icons-material/Home';
import {SidebarData, sidebarData} from './sidebarData';


const Sidebar1 = () => {
    return( 
        <div className="w-64 bg-gray-800 fixed h-full">
            <div>
                <h1 className="text-2x text-white font-bold">Admin Dashboard </h1>
            </div>
            <hr />
            <ul className="SidebarList">
            {SidebarData.map((val,key) => {
                return (
                    <li className="row"
                    id= {window.location.pathname == val.link ? "active" : ""}
                     key = {key} onClick={()=>
                      window.location.pathname = val.link}>
                        {" "}
                         <div id = "icon">{val.icon}</div>{" "}
                         <div id = "title">{val.title}</div>
                        
                    </li>
                         );
                         
            })}
            </ul>


        </div>
    )


}