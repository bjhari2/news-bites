import "./App.css";
import Navbar from "./components/Navbar";
import News from "./components/News";
import "@radix-ui/themes/styles.css";
import { Theme } from "@radix-ui/themes";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoadingBar from "react-top-loading-bar";

import React, { Component } from "react";

export default class App extends Component {
  state = {
    progress: 10,
  };

  setProgress = (progress) => {
    this.setState({
      progress: progress,
    });
  };
  render() {
    return (
      <>
        <BrowserRouter>
          <Theme appearance="dark">
            <LoadingBar
              height={3}
              color="var(--accent-a10)"
              progress={this.state.progress}
              onLoaderFinished={() => this.setProgress(0)}
            />
            <Navbar />
            <main>
              <Routes>
                <Route
                  exact
                  path="/"
                  element={
                    <News
                      setProgress={this.setProgress}
                      country="in"
                      key="general"
                      category="general"
                      pageSize={10}
                    />
                  }
                />
                <Route
                  exact
                  path="/business"
                  element={
                    <News
                      setProgress={this.setProgress}
                      country="in"
                      key="business"
                      category="business"
                      pageSize={10}
                    />
                  }
                />
                <Route
                  exact
                  path="/entertainment"
                  element={
                    <News
                      setProgress={this.setProgress}
                      country="in"
                      key="entertainment"
                      category="entertainment"
                      pageSize={10}
                    />
                  }
                />
                <Route
                  exact
                  path="/general"
                  element={
                    <News
                      setProgress={this.setProgress}
                      country="in"
                      key="general"
                      category="general"
                      pageSize={10}
                    />
                  }
                />
                <Route
                  exact
                  path="/health"
                  element={
                    <News
                      setProgress={this.setProgress}
                      country="in"
                      key="health"
                      category="health"
                      pageSize={10}
                    />
                  }
                />
                <Route
                  exact
                  path="/science"
                  element={
                    <News
                      setProgress={this.setProgress}
                      country="in"
                      key="science"
                      category="science"
                      pageSize={10}
                    />
                  }
                />
                <Route
                  exact
                  path="/sports"
                  element={
                    <News
                      setProgress={this.setProgress}
                      country="in"
                      key="sports"
                      category="sports"
                      pageSize={10}
                    />
                  }
                />
                <Route
                  exact
                  path="/technology"
                  element={
                    <News
                      setProgress={this.setProgress}
                      country="in"
                      key="technology"
                      category="technology"
                      pageSize={10}
                    />
                  }
                />
              </Routes>
            </main>
          </Theme>
        </BrowserRouter>
      </>
    );
  }
}
