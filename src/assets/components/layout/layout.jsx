import { useState } from "react";
import { Outlet } from 'react-router-dom'
import Nav from '/src/assets/components/nav/Nav.jsx'

export default function Layout(){
    return(
        <>
        <div >
        <Nav />
        </div>
      
         
         <div className="">   <Outlet /> </div> 
        
       
        
        </>
    )
}