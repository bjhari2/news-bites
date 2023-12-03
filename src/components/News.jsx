import React, { Component } from "react";
import NewsItem from "./NewsItem";
import { Button } from "@radix-ui/themes";
import Spinner from "./Spinner";
import "../assets/css/news.css";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";

export class News extends Component {
  static defaultProps = {
    country: "in",
    category: "general",
    pageSize: 8,
  };

  static propTypes = {
    country: PropTypes.string,
    category: PropTypes.string,
    pageSize: PropTypes.number,
  };

  constructor(props) {
    super(props);
    this.state = {
      articles: [],
      page: 1,
      loading: true,
      totalResults: 0,
    };
    let newsCategory = this.props.category;
    document.title =
      newsCategory.charAt(0).toUpperCase() +
      newsCategory.slice(1) +
      " - NewsBites";
  }

  async componentDidMount() {
    this.updateNews();
  }

  updateNews = async () => {
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=522810ad6a424cfba0ab5dc4a062f984&pageSize=${this.props.pageSize}&page=${this.state.page}`;
    this.props.setProgress(10);
    this.setState({ loading: true });
    let data = await fetch(url);
    this.props.setProgress(50);
    let parsedData = await data.json();
    this.props.setProgress(80);
    this.setState({
      articles: parsedData.articles,
      totalResults: parsedData.totalResults,
      loading: false,
    });
    this.props.setProgress(100);
  };

  fetchMoreData = async () => {
    this.setState({ page: this.state.page + 1 });
    let url = `https://newsapi.org/v2/top-headlines?country=${
      this.props.country
    }&category=${
      this.props.category
    }&apiKey=522810ad6a424cfba0ab5dc4a062f984&pageSize=${
      this.props.pageSize
    }&page=${this.state.page + 1}`;
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({
      articles: this.state.articles.concat(parsedData.articles),
      totalResults: parsedData.totalResults,
    });
  };

  render() {
    return (
      <div className="container my-3">
        <h1>
          NewsBites - Top{" "}
          {this.props.category.charAt(0).toUpperCase() +
            this.props.category.slice(1) +
            " "}
          Headlines
        </h1>
        <div className="news-container">
          {this.state.loading && <Spinner />}
          <InfiniteScroll
            dataLength={this.state.articles.length}
            next={this.fetchMoreData}
            hasMore={this.state.articles.length !== this.state.totalResults}
            loader={<Spinner />}
          >
            {this.state.articles.map((elements) => {
              return (
                <div key={elements.url}>
                  <NewsItem
                    title={elements.title}
                    description={elements.description}
                    urlToImage={elements.urlToImage}
                    url={elements.url}
                    author={elements.author}
                    date={elements.publishedAt}
                  />
                </div>
              );
            })}
          </InfiniteScroll>
          <Button radius="full" id="go-to-top">
            <a href="#top">Back to top &uarr;</a>
          </Button>
        </div>
      </div>
    );
  }
}

export default News;
