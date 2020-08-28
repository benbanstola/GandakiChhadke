import React from 'react';
import Header from '../components/header';
const Layout=(props)=>{
    return(
    <div>
        <Header />
        <h5 style={{color:"#57606f", fontSize:"12px",textAlign:"center",margin:"0",padding:"2px",backgroundColor:"#2ed573"}}>Currently for mobile devices only! Desktop view on progress. </h5>
        
        {props.children}
    </div>
    )
}
export default Layout;