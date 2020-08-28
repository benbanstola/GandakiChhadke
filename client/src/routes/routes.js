import React from 'react';
import {Switch,Route,BrowserRouter} from 'react-router-dom';
import Home from '../containers/home/home';
import Layout from '../hoc/layout';
import Openvideo from '../components/openview/videos/openvideo';
import Videos from '../containers/videos/video';
import Scrolltop from '../hoc/scrolltotop';
import About from '../components/about/about';


const Routes=()=>{
    return(
        <div>
            <Layout>
            
            <Switch>
                <Scrolltop>
                <Route path="/" exact component={Home} />
                <Route path="/videos" exact component={Videos} />
                <Route path="/about" exact component={About} />
                <Route path="/videos/:id" exact component={Openvideo} />

                {/* <Route path="/register" exact component={Auth(Signup,false)} />
                <Route path="/renters" exact component={Auth(Createuser,true)} />
                <Route path="/main" exact component={Auth(Homecontainer,true)} />
                <Route path="/login" exact component={Auth(Login,false)} />
                <Route path="/user/logout" exact component={Auth(Logout,true)}/>
                <Route path="/user" exact component={Auth(Profile,true)} />
                <Route path="/users/:id" exact component={Auth(UserView,null)} /> */}
                </Scrolltop>
            </Switch>
          
            </Layout>
           
        </div>
    )
}
export default Routes;