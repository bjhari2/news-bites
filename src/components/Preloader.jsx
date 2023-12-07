import React from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { Flex } from "@radix-ui/themes";

export default function Preloader() {
  let arr = Array(9).fill(0);
  return (
    <div className="container">
      <div className="skeleton text-center my-3">
        <Skeleton width="60%" height="3.5em" />
      </div>
      <Flex
        className="skeleton-news-houses-wrapper"
        p="4"
        mt="4"
        direction="column"
      >
        <Skeleton width="30%" height="1.5em" />
        <Flex className="skeleton-news-houses" direction="row" my="4" gap="9">
          {arr.map((_, i) => {
            return (
              <Flex direction="column" gap="2" key={i}>
                <Skeleton circle width={70} height={70} />
                <Skeleton width="100%" height="0.85em" />
              </Flex>
            );
          })}
        </Flex>
        <Flex direction="column" style={{ margin: "20px 0 10px 0" }}>
          <Skeleton width="30%" height="2em" />
          <Flex direction="row" gap="4" my="4" wrap="wrap">
            <Skeleton width="120px" height="2em" />
            <Skeleton width="80px" height="2em" />
            <Skeleton width="100px" height="2em" />
            <Skeleton width="90px" height="2em" />
            <Skeleton width="120px" height="2em" />
            <Skeleton width="70px" height="2em" />
            <Skeleton width="120px" height="2em" />
          </Flex>
        </Flex>
        <Flex direction="column" my="4">
          <Flex
            className="d-flex flex-column flex-md-row"
            direction="row"
            gap="2"
            justify="center"
            align="center"
          >
            <Skeleton
              style={{
                display: "block",
                objectFit: "cover",
                width: 250,
                height: 140,
                borderRadius: "var(--radius-4)",
              }}
            />
            <Flex direction="column" p="4" width="100%">
              <Skeleton
                width="100%"
                height="1.5em"
                style={{ margin: "0 0 15px 0" }}
              />
              <Skeleton width="100%" height="0.8em" />
              <Skeleton width="60%" height="0.8em" />
              <Skeleton width="20%" height="0.5em" />
            </Flex>
          </Flex>
          <Flex
            className="d-flex flex-column flex-md-row"
            direction="row"
            gap="2"
            justify="center"
            align="center"
          >
            <Skeleton
              style={{
                display: "block",
                objectFit: "cover",
                width: 250,
                height: 140,
                borderRadius: "var(--radius-4)",
              }}
            />
            <Flex direction="column" p="4" width="100%">
              <Skeleton
                width="100%"
                height="1.5em"
                style={{ margin: "0 0 15px 0" }}
              />
              <Skeleton width="100%" height="0.8em" />
              <Skeleton width="60%" height="0.8em" />
              <Skeleton width="20%" height="0.5em" />
            </Flex>
          </Flex>
        </Flex>
      </Flex>
    </div>
  );
}
