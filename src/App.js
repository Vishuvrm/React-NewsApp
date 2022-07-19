import "./App.css";

import React, { Component } from "react";
import NavBar from "./components/navbar";
import News from "./components/News";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import About from "./components/About";
import LoadingBar from "react-top-loading-bar";
import eventbus from "./components/eventBus";

export default class App extends Component {

  state = {progress: 0}

  setProgress = (progress)=>{
    this.setState({progress: progress})
  }

  // componentDidMount(){
  //   eventbus.on("getQuery", (data)=>{
  //     console.log("Event bus dispached!")
  //     this.setState({search: data.query, articles: []});
  //     search = data.query;
  //     console.log("Query added to event listener! =>", search);
  //     eventbus.remove()
  //   })
  // }

  render() {
    return (
      <>
        <div>
          <Router>
            <LoadingBar
              color='#f11946'
              progress={this.state.progress}
              onLoaderFinished={() => this.setProgress(0)}
            />
            <NavBar />
            <div className="float">
              <Routes>
                <Route path="" element={<News progress={this.setProgress}/>} key="home"/>
                <Route path="/about" element={<About/>}/>
                <Route
                  path="/business"
                  element={<News category="business" key="business" progress={this.setProgress}/>}
                />
                <Route
                  path="/entertainment"
                  element={<News category="entertainment" key="entertainment" progress={this.setProgress}/>}
                />
                <Route
                  path="/health"
                  element={<News category="health" key="health" progress={this.setProgress}/>}
                />
                <Route
                  path="/sports"
                  element={<News category="sports" key="sports" progress={this.setProgress}/>}
                />
                <Route
                  path="/science"
                  element={<News category="science" key="science" progress={this.setProgress}/>}
                />
                <Route
                  path="/technology"
                  element={<News category="technology" key="technology" progress={this.setProgress}/>}
                />
                <Route path="/general" element={<News category="general" key="general" progress={this.setProgress}/>} />
              </Routes>
            </div>
          </Router>
        </div>
      </>
    );
  }
}
