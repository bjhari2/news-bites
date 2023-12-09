import React from "react";
import "../assets/css/newshouses.css";
import { Separator, Flex, ScrollArea, Text } from "@radix-ui/themes";

export default function NewsHouses() {
  const newshouses = [
    {
      name: "Times of India",
      homepage: "https://timesofindia.indiatimes.com/",
      logo_url: "/img/toi.webp",
    },
    {
      name: "NDTV",
      homepage: "https://www.ndtv.com/",
      logo_url: "/img/ndtv.webp",
    },
    {
      name: "India Today",
      homepage: "https://www.indiatoday.in/",
      logo_url: "/img/indiatoday.webp",
    },
    {
      name: "CNN-News18",
      homepage: "https://www.news18.com/",
      logo_url: "/img/cnn18.webp",
    },
    {
      name: "The Hindu",
      homepage: "https://www.thehindu.com/",
      logo_url: "/img/thehindu.webp",
    },
    {
      name: "India TV",
      homepage: "https://www.indiatvnews.com/",
      logo_url: "/img/indiatv.webp",
    },
    {
      name: "Hindustan Times",
      homepage: "https://www.hindustantimes.com/",
      logo_url: "/img/ht.webp",
    },
    {
      name: "ABP News",
      homepage: "https://www.abplive.com/",
      logo_url: "/img/abp.webp",
    },
    {
      name: "BBC News",
      homepage: "https://www.bbc.com/news",
      logo_url: "/img/bbc.webp",
    },
    {
      name: "CNN",
      homepage: "https://edition.cnn.com/",
      logo_url: "/img/cnn.webp",
    },
    {
      name: "The New York Times",
      homepage: "https://www.nytimes.com/",
      logo_url: "/img/nyt.webp",
    },
    {
      name: "Al Jazeera",
      homepage: "https://www.aljazeera.com/",
      logo_url: "/img/alzazeera.webp",
    },
  ];
  return (
    <>
      <Flex
        className="news-houses-wrapper"
        px="4"
        py="2"
        mt="4"
        direction="column"
      >
        <Text as="h2" ml="4">
          Quick reads
        </Text>
        <Separator my="1" size="4" />
        <ScrollArea size="1" type="hover" scrollbars="horizontal">
          <Flex direction="row" my="4" gap="4">
            {newshouses.map((house, i) => {
              return (
                <div className="news-houses" key={i}>
                  <a href={house.homepage} target="_blank">
                    <div className="circle">
                      <img src={house.logo_url} alt="" />
                    </div>
                    <Text size="1">{house.name}</Text>
                  </a>
                </div>
              );
            })}
          </Flex>
        </ScrollArea>
      </Flex>
    </>
  );
}
