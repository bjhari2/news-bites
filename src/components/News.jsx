import React, { useEffect, useState } from "react";
import NewsItem from "./NewsItem";
import { Button } from "@radix-ui/themes";
import Spinner from "./Spinner";
import "../assets/css/news.css";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";

export function News(props) {
  const [articles, setArticles] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const [totalResults, setTotalResults] = useState(0);

  useEffect(() => {
    updateNews();
  }, []);

  const updateNews = async () => {
    let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=522810ad6a424cfba0ab5dc4a062f984&pageSize=${props.pageSize}&page=${page}`;
    props.setProgress(10);
    setLoading(true);
    let data = await fetch(url);
    props.setProgress(50);
    let parsedData = await data.json();
    props.setProgress(80);
    setArticles(parsedData.articles);
    setTotalResults(parsedData.totalResults);
    setLoading(false);
    props.setProgress(100);
  };

  const fetchMoreData = async () => {
    setPage(page + 1);
    let url = `https://newsapi.org/v2/top-headlines?country=${
      props.country
    }&category=${
      props.category
    }&apiKey=522810ad6a424cfba0ab5dc4a062f984&pageSize=${props.pageSize}&page=${
      page + 1
    }`;
    let data = await fetch(url);
    let parsedData = await data.json();
    setArticles(articles.concat(parsedData.articles));
    setTotalResults(parsedData.totalResults);
  };

  return (
    <div className="container my-3">
      <h1>
        NewsBites - Top{" "}
        {props.category.charAt(0).toUpperCase() + props.category.slice(1) + " "}
        Headlines
      </h1>
      <div className="news-container">
        {loading && <Spinner />}
        <InfiniteScroll
          dataLength={articles.length}
          next={fetchMoreData}
          hasMore={articles.length !== totalResults}
          loader={<Spinner />}
        >
          {articles.map((elements) => {
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

News.defaultProps = {
  country: "in",
  category: "general",
  pageSize: 8,
};

News.propTypes = {
  country: PropTypes.string,
  category: PropTypes.string,
  pageSize: PropTypes.number,
};

export default News;
