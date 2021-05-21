/* App frame (i.e., static part) courtesy of 
 * https://www.kirupa.com/react/creating_single_page_app_react_using_react_route * r.htm */

import React, { Component } from "react";

class Main extends Component {
  render() {
    return (
        <div>
          <h1>Daniel</h1>
          <ul className="header">
            <li><a href="/">Projects</a></li>
            <li><a href="/research">Research</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
          <div className="content">
            
          </div>
        </div>
    );
  }
}

export default Main;
