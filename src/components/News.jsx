import React, { useEffect, useState } from "react";
import NewsItem from "./NewsItem";
import { Button } from "@radix-ui/themes";
import Spinner from "./Spinner";
import "../assets/css/news.css";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";
import NewsHouses from "./NewsHouses";
import TopNews from "./TopNews";
import Preloader from "./Preloader";

export function News(props) {
  const [articles, setArticles] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const [totalResults, setTotalResults] = useState(0);

  useEffect(() => {
    updateNews();
  }, []);

  const updateNews = async () => {
    let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&pageSize=${props.pageSize}&page=${page}`;
    props.setProgress(10);
    setLoading(true);
    let data = await fetch("https://newsbites-backend.cyclic.app/home", {
      method: "post",
      body: url,
      headers: {
        Authorization: import.meta.env.VITE_NEWS_API,
      },
    });
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
    }&category=${props.category}&pageSize=${props.pageSize}&page=${page + 1}`;
    let data = await fetch("https://newsbites-backend.cyclic.app/home", {
      method: "post",
      body: url,
      headers: {
        Authorization: bimport.meta.env.VITE_NEWS_API,
      },
    });
    let parsedData = await data.json();
    setArticles(articles.concat(parsedData.articles));
    setTotalResults(parsedData.totalResults);
  };

  return !loading ? (
    <div className="container my-3">
      <h1>
        News<span className="name-color">Bites</span> - Get your daily dose of
        news here!
      </h1>
      <NewsHouses />
      <TopNews />
      <div className="news-container">
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
  ) : (
    <Preloader />
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
