import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/layout/navbar";
import Landing from "./components/layout/landing";
import Lyrics from "./components/tracks/lyrics";
import { Provider} from "./context";
class App extends Component {

  render() {
    return (
      <Provider>
        <Router>
          <React.Fragment>
            <Navbar />
            <div className="container">
              <Switch>
                <Route exact path="/" component={Landing} />
                <Route exact path="/lyrics/track/:id" component={Lyrics} />
              </Switch>
            </div>
          </React.Fragment>
        </Router>
      </Provider>
    );
  }
}

export default App;
