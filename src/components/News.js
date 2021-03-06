// 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

import React, { Component } from "react";
// import PropTypes from 'prop-types'
import NewsItem from "./NewsItem";
import "../index.css";
import InfiniteScroll from "react-infinite-scroll-component";
import Spinner from "./spinner";
import PropTypes from 'prop-types';
import NavBar from "./navbar"; // Child component
import eventbus from "./eventBus";


export default class news extends Component {

  static defaultProps = {
    country: "",
    category: "general",
  };
  
  static propTypes = {
    country: PropTypes.string,
    category: PropTypes.string,
    search: PropTypes.string,
  };


  constructor() {
    super();
    this.state = {
      articles: [],
      loading: false,
      page: 2,
      search: ""
    };
    this.api = ["443ecc6665604e4ebe1280554cf377cc", "d49af7ed4fa846c7a2dd6ef4c6906f42"]

  }



  async fetchNext() {
    this.setState({ loading: true });
    let url = this.url + `&page=${this.state.page}`;
    let data = await fetch(url);
    let parsed_data = await data.json();

    this.setState({
      articles: this.state.articles.concat(parsed_data.articles),
      loading: false,
      page: this.state.page + 1,
    });
  }

  async componentDidUpdate(){
    if (this.state.search !== ""){
      console.log("cdu:", this.state);
      console.log("performing search")
      
    }
  }

  async componentDidMount() {
    this.props.progress(0)
    let code_response = await fetch('https://ipapi.co/json/');
    this.props.progress(20);
    let code_data = await code_response.json();
    this.props.progress(40);
    let country_code = code_data.country.toLowerCase();
    let page_size = 6;
    
    let search = "";
    eventbus.on("getQuery", async (data)=>{
      console.log("Event bus dispached!", )
      this.setState({search: data.query, articles: []});
      search = data.query;
      console.log("Query added to event listener! =>", search);
      console.log(this.state);
      eventbus.remove("getQuery");
      // this.componentDidMount();
      this.url = `https://newsapi.org/v2/everything?q=${data.query}&sortBy=${"relevancy"}&apiKey=${this.api[1]}` + `&pageSize=${page_size}`
      let url = this.url + `&page=${1}`;

      this.setState({ loading: true });
      let query_data = await fetch(url);
      this.props.progress(80);
      let parsed_data = await query_data.json();
      this.props.progress(90);
      let status = parsed_data.status
      
      this.setState({ articles: parsed_data.articles, loading: false});
      this.props.progress(100);
    })

    
    if (this.state.search === ""){
      this.url = `https://newsapi.org/v2/top-headlines?country=${this.props.country !== ""?this.props.country:country_code !== ""?country_code:"us"}&category=${this.props.category}&apiKey=${this.api[1]}` + `&pageSize=${page_size}`;
    }
    else{
      this.url = `https://newsapi.org/v2/everything?q=${this.state.search}&sortBy=${"relevancy"}&apiKey=${this.api[1]}` + `&pageSize=${page_size}`
    }
    let url = this.url + `&page=${1}`;

    this.setState({ loading: true });
    let data = await fetch(url);
    this.props.progress(80);
    let parsed_data = await data.json();
    this.props.progress(90);
    let status = parsed_data.status
    
    this.setState({ articles: parsed_data.articles, loading: false});
    this.props.progress(100);
    console.log("Componentdidmount")
  }

  componentWillUnmount(){
    eventbus.remove("getQuery");
    console.log("Component unmounted!")
  }

  render() {
    return (
      <div className="container my-3">
        <h1 className="mb-5 text-center">{this.props.category !== "general"? this.props.category.charAt(0).toUpperCase() + this.props.category.slice(1) + ": ": ""}Top Headlines</h1>
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
          {this.state.loading && <Spinner/>}
        </div>
      </div>
    );
  }
  
}
