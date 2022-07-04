import "./App.css";

import React, { Component } from "react";
import NavBar from "./components/navbar";
import News from "./components/News";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import About from "./components/About";

export default class App extends Component {
  render() {
    return (
      <>
        <div>
          <Router>
            <NavBar />
            <div className="float">
              <Routes>
                <Route path="" element={<News />} key="home"/>
                <Route path="/about" element={<About/>}/>
                <Route
                  path="/business"
                  element={<News category="business" key="business"/>}
                />
                <Route
                  path="/entertainment"
                  element={<News category="entertainment" key="entertainment"/>}
                />
                <Route
                  path="/health"
                  element={<News category="health" key="health"/>}
                />
                <Route
                  path="/sports"
                  element={<News category="sports" key="sports"/>}
                />
                <Route
                  path="/science"
                  element={<News category="science" key="science"/>}
                />
                <Route
                  path="/technology"
                  element={<News category="technology" key="technology"/>}
                />
                <Route path="/general" element={<News category="general" key="general"/>} />
              </Routes>
            </div>
          </Router>
        </div>
      </>
    );
  }
}
