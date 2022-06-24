import React, { Component } from "react";
// import PropTypes from 'prop-types'
import NewsItem from "./NewsItem";
import "../index.css";
import InfiniteScroll from "react-infinite-scroll-component";

export default class news extends Component {
  // static propTypes = {
  //   prop: PropTypes
  // }

  constructor() {
    super();
    this.state = {
      articles: [],
      loading: false,
      page: 1,
    };
    this.url = "https://newsapi.org/v2/top-headlines?country=in&category=politics&apiKey=443ecc6665604e4ebe1280554cf377cc&pagesize=6&page="
  }

  async fetchNext() {
    this.setState({ page: this.state.page + 1, loading: true });
    let url = this.url + `${this.state.page}`;
    let data = await fetch(url);
    let parsed_data = await data.json();

    this.setState({
      articles: this.state.articles.concat(parsed_data.articles),
      loading: false,
    });
  }
  async componentDidMount() {
    let url = this.url + `${this.state.page}`;
    this.setState({ loading: true });
    let data = await fetch(url);
    let parsed_data = await data.json();
    this.setState({ articles: parsed_data.articles, loading: false, page: 2 });
  }

  render() {
    return (
      <div className="container my-3">
        <h1 className="mb-5 text-center">Top Headlines</h1>
        <div className="row">
          <InfiniteScroll
            dataLength={this.state.articles.length}
            next={() => {
              this.fetchNext();
            }}
            hasMore={true}
            className="row"
          >
            {this.state.articles.map((element) => {
              // console.log("length of articles =", this.state.articles.length)
              let {
                url,
                title,
                description,
                urlToImage,
                author,
                publishedAt,
                source,
              } = element;
              return (
                <div key={url} className="col-md-4">
                  <NewsItem
                    url={url}
                    title={title}
                    description={description}
                    image_url={urlToImage}
                    published_date={publishedAt}
                    author={author}
                    source={source}
                  />
                </div>
              );
            })}
          </InfiniteScroll>
        </div>
      </div>
    );
  }
}
