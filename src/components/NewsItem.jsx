import React from "react";
import { Box, Text, Heading, Flex, Link, Button } from "@radix-ui/themes";

export default function NewsItem(props) {
  let { title, description, urlToImage, url, author, date } = props;

  return (
    <>
      <Box
        size="4"
        my="4"
        style={{
          backgroundColor: "var(--gray-a2)",
          borderRadius: "var(--radius-4)",
        }}
      >
        <Flex className="d-flex flex-column flex-md-row" p="4" align="center">
          <Box>
            <img
              src={urlToImage}
              alt="Image corresponding to the news"
              style={{
                display: "block",
                objectFit: "cover",
                width: 250,
                height: 140,
                backgroundColor: "var(--gray-5)",
                borderRadius: "var(--radius-4)",
              }}
            />
          </Box>
          <Flex direction="column" p="4">
            <Heading as="h2" size="5">
              {title}
            </Heading>
            <Text as="p" size="3" my="2">
              {description}
            </Text>
            <Text className="text-muted" as="p" size="1" mb="2">
              By {author ? author : "Unknown"} on{" "}
              {new Date(date).toLocaleString("en-IN", { timeZone: "IST" })}
            </Text>
            <Link href={url} target="_blank">
              <Button radius="large">Read more</Button>
            </Link>
          </Flex>
        </Flex>
      </Box>
    </>
  );
}
