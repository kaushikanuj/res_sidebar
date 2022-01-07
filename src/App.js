import React, { useState } from 'react'
import './App.css';
// import { ProSidebar, Menu, MenuItem, SidebarHeader,SubMenu } from 'react-pro-sidebar';
import {
  ProSidebar,
  Menu,
  MenuItem,
  SidebarHeader,
  SidebarFooter,
  SidebarContent,
} from "react-pro-sidebar";
import 'react-pro-sidebar/dist/css/styles.css';
import {BsHouseFill} from "react-icons/bs";
import {BsPersonFill} from "react-icons/bs";
import {BsPinterest} from "react-icons/bs";
import {BsCalculator} from "react-icons/bs";
import {BsCalculatorFill} from "react-icons/bs";
import {BsFileEarmark} from "react-icons/bs";
import {BsStack} from "react-icons/bs";
import {BsTagFill} from "react-icons/bs";
import {Link} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import { FaList, FaRegHeart } from "react-icons/fa";
import { FiHome, FiLogOut, FiArrowLeftCircle, FiArrowRightCircle } from "react-icons/fi";
import { RiPencilLine } from "react-icons/ri";
import { BiCog } from "react-icons/bi";
import dateFormat from 'dateformat';
import ReactTable from "react-table-6";  
import "react-table-6/react-table.css" 

import "react-pro-sidebar/dist/css/styles.css";

function App() {
    const columns = [
        {
            Header: 'VCENTER NAME',
            accessor: 'vcenter',
            width: 254,
        },
        {
            Header: 'STATUS',
            accessor: 'status',
            width: 254,
        },
        {
            Header: 'LAST SUCCESSFUL UPDATE',
            accessor: 'lsupdate',
            width: 284,
        },
        {
            Header: 'LAST CONNECTION ATTEMPT',
            accessor: 'lsattempt',
            width: 294,
        },
    ]

const [menuCollapse, setMenuCollapse] = useState(false)
const menuIconClick = () => {
  menuCollapse ? setMenuCollapse(false) : setMenuCollapse(true);
};
  return (
  <div className='top'>    
  <div id="header">
<ProSidebar collapsed={menuCollapse}>
  <SidebarHeader>
  <div className="logotext">
      <p>{menuCollapse ? "RESERVATION" : "RESERVATION"}</p>
    </div>
    <div className="closemenu" onClick={menuIconClick}>
      {menuCollapse ? (
        <FiArrowRightCircle/>
      ) : (
        <FiArrowLeftCircle/>
      )}
    </div>
  </SidebarHeader>
  <SidebarContent>
    <Menu iconShape="square">
      <MenuItem active={true} icon={<FiHome />}>
         Status
      </MenuItem>
      <MenuItem icon={<FaList />}>Performance</MenuItem>
      <MenuItem icon={<FaRegHeart />}>Environment</MenuItem>
      <MenuItem icon={<RiPencilLine />}>Work Items</MenuItem>
      <MenuItem icon={<BiCog />}>VCenter</MenuItem>
      <MenuItem icon={<BiCog />}>Cluster</MenuItem>
      <MenuItem icon={<BiCog />}>Host</MenuItem>
      <MenuItem icon={<BiCog />}>Datastore</MenuItem>
      <MenuItem icon={<BiCog />}>Virtual Machines</MenuItem>
      <MenuItem icon={<BiCog />}>Tickets</MenuItem>
      <MenuItem icon={<BiCog />}>Create Request</MenuItem>
      <MenuItem icon={<BiCog />}>Datastore</MenuItem>
      <MenuItem icon={<BiCog />}>Tickets</MenuItem>
    </Menu>
  </SidebarContent>
</ProSidebar>
<div className='container'>
   <div className='row'>
     <div className='col-md-12'>
        <ReactTable
            columns={columns}
            pageSize={10}
            showPageSizeOptions={false}
            showPageJump={false}
        />
     </div>
   </div>
 </div>
</div>
</div>
  );
}

export default App;
