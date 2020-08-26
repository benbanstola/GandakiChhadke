import React from 'react';
import SideNav from 'react-simple-sidenav';
//import classes from './sidenav.module.css';
import SidenavItems from './sidenavItems/sidenavItems';
const nav = (props) => {
    return ( 
        <div>
            <SideNav  showNav={props.showNav}
            onHideNav={props.onHideNav} navStyle={{background: '#3d3d3d'}}
             >
                <SidenavItems />

            </SideNav>
        </div>
     );
}
 
export default nav;