import React from 'react';
import { Link } from 'react-router-dom';
import FontAwesome from 'react-fontawesome';
import classes from './sidenavItems.module.css';
//import { connect } from 'react-redux';

const SidenavItems = () => {

    const items = [
        {
            type:'navItem',
            icon:'home',
            text:'Home',
            link:'/',
            restricted:false
        },
        {
            type:'navItem',
            icon:'home',
            text:'Videos',
            link:'/videos',
            restricted:false
        },
        {
            type:'navItem',
            icon:'home',
            text:'News',
            link:'/news',
            restricted:false
        },
        {
            type:'navItem',
            icon:'user',
            text:'Login',
            link:'/login',
            restricted:false,
        },
       
       
        {
            type:'navItem',
            icon:'user',
            text:'Logout',
            link:'/user/logout',
            restricted:false
        },
        {
            type:'navItem',
            icon:'info',
            text:'About us',
            link:'/about',
            restricted:false
        }
    ]

    const element = (item,i) => (
        <div key={i} className={classes.navitems}>
            <Link to={item.link}>
                <FontAwesome name={item.icon} style={{marginRight:"10px"}}/>
              {item.text}
            </Link>
        </div>
    )

    const showItems = () => (
            items.map((item,i)=>{
                    return element(item,i)
            })
            )

    return (
        <div>
            {showItems()}
        </div>
    );
};



export default SidenavItems;