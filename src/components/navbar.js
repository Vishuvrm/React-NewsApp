import React, { Component } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import eventbus from "./eventBus";

export class NavBar extends Component {
  getQuery(event){
      event.preventDefault()
      let value = event.target[0].value
      eventbus.dispatch("getQuery", {query: value})
      console.log("Query dispached!")
  }

  render() {
    
    return (
      <div>
        <nav className="navbar navbar-expand-lg bg-light">
          <div className="container-fluid">
            <Link className="navbar-brand" to="">
              NewsMania
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link className="nav-link active" aria-current="page" to={"/"}>
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className="nav-link active"
                    aria-current="page"
                    to="/about"
                  >
                    About
                  </Link>
                </li>
                <div
                  className="vertical-line primary"
                  style={{
                          width: "4px",
                          backgroundColor: "black",
                          border: "1px inset",
                          height: "45px"
}}
                ></div>
                <li className="nav-item">
                  <Link className="nav-link" aria-current="page" to="/business">
                    Business
                  </Link>
                </li>{" "}
                <li className="nav-item">
                  <Link className="nav-link" aria-current="page" to="/entertainment">
                    Entertainment
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" aria-current="page" to="/health">
                    Health
                  </Link>
                </li>{" "}
                <li className="nav-item">
                  <Link className="nav-link" aria-current="page" to="/sports">
                    Sports
                  </Link>
                </li>{" "}
                <li className="nav-item">
                  <Link className="nav-link" aria-current="page" to="/science">
                    Science
                  </Link>
                </li>{" "}
                <li className="nav-item">
                  <Link className="nav-link" aria-current="page" to="/technology">
                    Technology
                  </Link>
                </li>{" "}
                <li className="nav-item">
                  <Link className="nav-link" aria-current="page" to="/general">
                    General
                  </Link>
                </li>{" "}
              </ul>
              <form className="d-flex" role="search" onSubmit={this.getQuery}>
                <input
                  className="form-control me-2"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                />
                <button className="btn btn-outline-success" type="submit">
                  Search
                </button>
              </form>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}

export default NavBar;
