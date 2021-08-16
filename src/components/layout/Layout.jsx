import React from "react";
import Sidebar from "../sidebar/Sidebar";
import Routes from "../Routes";
import { BrowserRouter, Route } from "react-router-dom";

import './layout.css'
import Topnav from "../topnav/TopNav";

const Layout = () => {
  return (
    <BrowserRouter>
      <Route
        render={(...props) => 
          <div className="layout">
            <Sidebar {...props} />
            <div className="layout__content">
                <Topnav />
                <div className="layout__content-main">
                    <Routes />
                </div>
            </div>
          </div>
        }
      />
    </BrowserRouter>
  );
};

export default Layout;
