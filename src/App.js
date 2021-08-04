import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
  } from "react-router-dom";  

import 'bootstrap/dist/css/bootstrap.css';
import './index.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'flickity/dist/flickity.min.css';



import AboutusPage from './pages/aboutus.js';
import HomePage from './pages/home.js';
import ContactusPage from './pages/contactus.js';
import ProductionHousePage from './pages/productionhouse.js';
import ProjectsPage from './pages/projects.js';
import ServicesPage from './pages/services.js';
import WallPapersPage from './pages/wallpapers.js';
import ServicePage from "./pages/servicepage.js";
import ErrorPage from './pages/404.js';


import Footer from './components/footer.js';
import 'bootstrap/dist/js/bootstrap.js';
//import './js/scripts.js';






class App extends Component{
    constructor(props){
      super(props);
      this._data_ = require('./shared/navigation.json');
      this._menuitemslinks_ = this._data_.urllist;

      this._menuitems_ = this._data_.headerlist;
      this._menuitemsname_ = this._menuitems_.map((item) => item.name);


      this.components_list=[
        <HomePage urllist={this._menuitemslinks_} headerlist={this._menuitemsname_} />
        ,<AboutusPage urllist={this._menuitemslinks_} headerlist={this._menuitemsname_}/>
        ,<ProjectsPage urllist={this._menuitemslinks_} headerlist={this._menuitemsname_}/>
        ,<ServicesPage urllist={this._menuitemslinks_} headerlist={this._menuitemsname_}/>
        ,<WallPapersPage urllist={this._menuitemslinks_} headerlist={this._menuitemsname_}/>
        ,<ProductionHousePage urllist={this._menuitemslinks_} headerlist={this._menuitemsname_}/>
        ,<ContactusPage urllist={this._menuitemslinks_} headerlist={this._menuitemsname_}/>
    ];
      
    }
  
    render(){
      const routecomp = this._menuitemslinks_.map((item,i) => <Route exact path={item} key={item + i.toString()}> {this.components_list[i]} </Route>);
      const Pushroutecomp = this._menuitems_.map( (item,i) => {
        if(item.children.length > 0){
            return item.children.map((itemchild) => <Route key={item + i.toString()} path={this._menuitemslinks_[i] + "/" + itemchild }> <ServicePage servicename={itemchild} page={"Services"}/> </Route>); 
        }
        return;
    });
      const er = <Route key={"999"}> <ErrorPage /></Route>;
      routecomp.push(Pushroutecomp);
      routecomp.push(er);

      return(
        <>
        <Router>
        <Switch>
            {routecomp}
        </Switch>
        </Router>
        <Footer />
        </>

      );
    }
  }

  export default App;