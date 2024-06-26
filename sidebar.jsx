import React from "react";
import '../App.css';
import {SidebarData, sidebarData} from './sidebarData';

function Sidebar() {
    return ( <aside>
        <div className= "Sidebar" > 
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
        </aside>
    );
}

export default Sidebar;