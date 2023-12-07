import { Flex, Text } from "@radix-ui/themes";
import React from "react";
import "../assets/css/topnews.css";
import { NavLink } from "react-router-dom";

export default function TopNews() {
  return (
    <Flex mb="4" mt="1" direction="column">
      <Text as="h2" my="2">
        Top news
      </Text>
      <Flex direction="row" gap="4" mt="2" wrap="wrap">
        <NavLink className="categories" to="/">
          General
        </NavLink>
        <NavLink className="categories" to="/business">
          Business
        </NavLink>
        <NavLink className="categories" to="/entertainment">
          Entertainment
        </NavLink>
        <NavLink className="categories" to="/health">
          Health
        </NavLink>
        <NavLink className="categories" to="/science">
          Science
        </NavLink>
        <NavLink className="categories" to="/sports">
          Sports
        </NavLink>
        <NavLink className="categories" to="/technology">
          Technology
        </NavLink>
      </Flex>
    </Flex>
  );
}
