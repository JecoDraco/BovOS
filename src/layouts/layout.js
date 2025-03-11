import React from 'react';
import {Menu} from "../components/inicio"
import {Footer} from "../page/Footer/Footer";

export  function Layout({children}) {
  return (
    <div>
      <div className="menu">
        <Menu/>
      </div>
      <div className="body">{children}</div>
      <div className="footer">
        <Footer/>
      </div>
    </div>
  );
}
