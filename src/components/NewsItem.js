import React, { Component } from "react";
// import PropTypes from "prop-types";

export class NewsItem extends Component {
  // static propTypes = {
  //   prop: PropTypes,
  // };

  render() {
    let { title, description, image_url, url, published_date, author, source } = this.props;
    let timedelta = new Date().getDate() - new Date(published_date).getDate();
    return (
      <div className="card mb-5 rounded-5" style={{ width: "25rem" }}>
        <img src={image_url != null? image_url: "https://www.euractiv.com/wp-content/uploads/sites/2/2014/03/news-default.jpeg"} className="card-img-top rounded-4" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p>
            <strong style={{ color: "grey" }}>
              <i>{author} </i>|
              <i>
                {" "}
                {`${
                  timedelta === 0
                    ? "Today"
                    : timedelta === 1
                    ? timedelta + " day ago"
                    : timedelta + " days ago"
                }`}
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
