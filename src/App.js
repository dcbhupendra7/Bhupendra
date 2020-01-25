import React, {Component} from 'react';
import {BrowserRouter,NavLink,Route,Switch} from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import IkonBar from './components/NavBar/IkonBar';
import routes from './AppRoutes';
import Footer from './components/Footer/Footer';
import './App.css';

class App extends Component {
  // state:{
  //   login: false
  // }
  //   onLogin=id=>{
  //     if(id==true){
  //       this.setState{
  //         login:true
  //       }
  //     }
  //   }
  render(){
    

    return (
      <BrowserRouter>
          <NavBar/>
          <IkonBar/>
          <main>
          <Switch>
            {routes.map((route, key) => (
              <Route path={route.path} component={route.component} exact={route.exact} key={key}/>
            ))}
          </Switch>
          
          </main>
        <div className="footer">
          <Footer/>
        </div>
      </BrowserRouter>
    );
  }

}

export default App;
