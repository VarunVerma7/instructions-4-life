import React from "react";
import {
  Box,
  IconButton,
  useBreakpointValue,
  Stack,
  Heading,
  Text,
  Container,
} from "@chakra-ui/react";
// Here we have used react-icons package for the icons
import { BiLeftArrowAlt, BiRightArrowAlt } from "react-icons/bi";
// And react-slick as our Carousel Lib

// Settings for the slider
const settings = {
  dots: true,
  arrows: false,
  fade: true,
  infinite: true,
  autoplay: true,
  speed: 500,
  autoplaySpeed: 5000,
  slidesToShow: 1,
  slidesToScroll: 1,
};

export default function Carousel() {
  // As we have used custom buttons, we need a reference variable to
  // change the state

  // These are the breakpoints which changes the position of the
  // buttons as the screen size changes
  const top = useBreakpointValue({ base: "90%", md: "50%" });
  const side = useBreakpointValue({ base: "30%", md: "40px" });

  // This list contains all the data for carousels
  // This can be static or loaded from a server
  const cards = [
    {
      title: "IEProjects",
      text: "IEProjects is dedicated to taking traditionally renowned artists to the digital and modern era through blockchain technology.",
      image: "rai-1.png",
    },
  ];

  return (
    <Box
      position={"relative"}
      height={"600px"}
      width={"full"}
      overflow={"hidden"}
    >
      {/* CSS files for react-slick */}
      <link
        rel="stylesheet"
        type="text/css"
        charSet="UTF-8"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
      />
      <link
        rel="stylesheet"
        type="text/css"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
      />
      {/* Left Icon */}
      <IconButton
        aria-label="left-arrow"
        variant="ghost"
        position="absolute"
        left={side}
        top={top}
        transform={"translate(0%, -50%)"}
        zIndex={2}
      >
        <BiLeftArrowAlt size="40px" />
      </IconButton>
      {/* Right Icon */}
      <IconButton
        aria-label="right-arrow"
        variant="ghost"
        position="absolute"
        right={side}
        top={top}
        transform={"translate(0%, -50%)"}
        zIndex={2}
      >
        <BiRightArrowAlt size="40px" />
      </IconButton>
      {/* Slider */}
      {cards.map((card, index) => (
        <Box
          key={index}
          height={"6xl"}
          position="relative"
          backgroundPosition="center"
          backgroundRepeat="no-repeat"
          backgroundSize="cover"
          backgroundImage={`url(${card.image})`}
        >
          {/* This is the block you need to change, to customize the caption */}
          <Container size="container.lg" height="600px" position="relative">
            <Stack
              spacing={6}
              w={"full"}
              maxW={"lg"}
              position="absolute"
              top="50%"
              transform="translate(0, -50%)"
            >
              <Heading
                color="White"
                fontSize={{ base: "3xl", md: "4xl", lg: "5xl" }}
              >
                {card.title}
              </Heading>
              <Text fontSize={{ base: "md", lg: "lg" }} color="White">
                {card.text}
              </Text>
            </Stack>
          </Container>
        </Box>
      ))}
    </Box>
  );
}
