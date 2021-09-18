import React from "react";
import NavBar from '../components/Navbar/Navbar';
import ButtonNav from '../components/Navbar/BottomNav';
const Layout =({children})=>{
    return (
        <>
        <NavBar/>
        {children}
        <ButtonNav/>
        </>
    )
}

export default Layout;