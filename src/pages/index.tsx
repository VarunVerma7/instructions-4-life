import {
  Stack,
  Flex,
  Button,
  Text,
  VStack,
  HStack,
  useBreakpointValue,
  Divider,
} from "@chakra-ui/react";
import WithSubnavigation from "../components/Navbar";
import AboutCollection from "../components/AboutCollection";
import Carousel from "../components/Carousel";
import Features from "../components/Features";
import ArticleList from "../components/Info";
import NFT from "../components/NFT";
import AboutRaimundo from "../components/AboutRaimundo";
import Tutorial from "../components/Tutorial";

const data = {
  isNew: true,
  imageURL: "collection/1.png",
  name: "HERMES",
  price: "2 ETH",
  rating: 4.2,
  numReviews: 34,
  description:
    "Oil pastels, graphite, ink with collage elements on paper 15 x 11 in",
};

const data1 = {
  isNew: true,
  imageURL: "collection/2.png",
  name: "MAKE IDEAS",
  price: 4.5,
  rating: 4.2,
  numReviews: 34,
  description:
    "Oil pastels, graphite, ink with collage elements on paper 15 x 11 in.",
};

const data2 = {
  isNew: true,
  imageURL: "collection/3.png",
  name: "BE CREATIVE",
  price: "2 ETH",
  rating: 4.2,
  numReviews: 34,
};

const data3 = {
  isNew: true,
  imageURL: "collection/4.png",
  name: "ALL IS INFINITY",
  price: "2 ETH",
  rating: 4.2,
  numReviews: 34,
};

const data4 = {
  isNew: true,
  imageURL: "collection/5.png",
  name: "Wayfarer Classic",
  price: "23 ETH",
  rating: 4.2,
  numReviews: 34,
};

export default function WithBackgroundImage() {
  return (
    <>
      <WithSubnavigation />
      <Flex
        w={"full"}
        h={"80vh"}
        backgroundImage={"./contemp.png"}
        backgroundSize={"cover"}
        backgroundPosition={"center center"}
      >
        <VStack
          w={"full"}
          justify={"center"}
          px={useBreakpointValue({ base: 4, md: 8 })}
          bgGradient={"linear(to-r, blackAlpha.600, transparent)"}
        >
          <Stack maxW={"2xl"} align={"flex-start"} spacing={6}>
            <Text
              color={"white"}
              fontWeight={900}
              lineHeight={1.2}
              fontSize={useBreakpointValue({ base: "3xl", md: "4xl" })}
            >
              Raimundo Figueroa presents:
            </Text>
            <Text
              color={"white"}
              textAlign={"center"}
              fontWeight={700}
              lineHeight={1.2}
              fontSize={useBreakpointValue({ base: "3xl", md: "4xl" })}
            >
              Instructions for Daily Life
            </Text>
            <Stack direction={"row"}></Stack>
          </Stack>
        </VStack>
      </Flex>
      <br />
      <br />
      <AboutRaimundo />
      <br />
      <Carousel />

      <br />
      <AboutCollection />
      <br />

      <Tutorial />
      {/* <Features /> */}

      <br />
      <Divider mt={12} mb={12} />

      {/* <ArticleList /> */}
      <HStack spacing={4}>
        <NFT data={data} />
        <NFT data={data1} />

        <NFT data={data2} />

        <NFT data={data3} />
      </HStack>
      {/* <HStack spacing={4}>
        <NFT />
        <NFT />

        <NFT />

        <NFT />
      </HStack> */}
    </>
  );
}
