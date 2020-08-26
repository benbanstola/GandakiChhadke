import React, { Component } from 'react';
import Fontawesome from 'react-fontawesome';
import {Link}  from 'react-router-dom';
import classes from './header.module.css';
import Nav from './sidenav/sidenav';
class  Header extends Component {
    state = { 
        showNav:false
     }
onHideNav=()=>{
   this.setState({
       showNav:false
   }) 
}

   render() {
        
        
        return ( 
             <header>
                 <div className={classes.openbar}>
                 <Fontawesome name="bars" size="2x" className={classes.awesome} onClick={()=>{this.setState({showNav:true})}}/>
                </div>
                <Nav 
                 showNav={this.state.showNav}
                 onHideNav={()=>this.onHideNav()} />
                <Link to= "/" className={classes.logo}> Gandaki Chhadke</Link>
                 
                
                
            </header>
             );
    }
}
 
export default Header;