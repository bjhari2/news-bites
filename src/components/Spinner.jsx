import { Flex } from "@radix-ui/themes";
import React from "react";
import "../assets/css/spinner.css";

export default function Spinner() {
  return (
    <Flex my="8" justify="center" align="center" width="100%" height="100%">
      <div className="spinner">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>

      <style></style>
    </Flex>
  );
}
