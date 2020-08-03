import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Selected from './routes/selected'
import Done from './routes/done'
import "./btn-sort-group.css";
export default function BtnSort() {
  return (
    <Router>
      <div className="btn-group">
        <Link to="/selected" className="link selected">&#9733;</Link>
        <Link to="/done" className="link done">Done</Link>

        <Switch>
        
          <Route path="/selected" component={Selected} />
           
          <Route path="/done" component={Done} />
          
        </Switch>
      </div>
    </Router>
  );
}
