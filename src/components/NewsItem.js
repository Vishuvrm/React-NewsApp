import React, { Component } from "react";
// import PropTypes from "prop-types";

export class NewsItem extends Component {
  render() {
    let { title, description, image_url, url, published_date, author, source } =
      this.props;
    let date_delta = new Date().getDate() - new Date(published_date).getDate();
    let min_delta, sec_delta, hour_delta;
    let display_time;
    
    if (date_delta === 0) {
      min_delta =
        new Date().getMinutes() - new Date(published_date).getMinutes();
      sec_delta =
        new Date().getSeconds() - new Date(published_date).getSeconds();
      hour_delta = new Date().getHours() - new Date(published_date).getHours();
    }

    if (date_delta){
      display_time = date_delta + (date_delta > 1?" days": " day") + " ago"
    }
    else if (hour_delta){
      display_time = hour_delta + (hour_delta > 1? " hours": " hour") + " ago"
    }
    else if(min_delta){
      display_time = min_delta + (min_delta > 1? " minutes": "minute") + " ago"
    }
    else if(sec_delta){
      display_time = sec_delta + (sec_delta > 1)?" seconds": " second" + " ago"
    }
    

    return (
      <div className="card mb-5 rounded-5">
        <img
          src={
            image_url != null
              ? image_url
              : "https://www.euractiv.com/wp-content/uploads/sites/2/2014/03/news-default.jpeg"
          }
          className="card-img-top rounded-4"
          alt="..."
        />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p>
            <strong style={{ color: "grey" }}>
              <i>{author} </i>|
              <i>
                {" "}
                <span className="badge bg-secondary">{display_time}</span>
              </i>
            </strong>
          </p>
          <p className="card-text">{description}</p>
          <a
            href={url}
            target="_blank"
            className="btn btn-light rounded-5 stretched-link form-control text-center"
          >
            <h5>{source.name}</h5>
          </a>
        </div>
      </div>
    );
  }
}

export default NewsItem;
