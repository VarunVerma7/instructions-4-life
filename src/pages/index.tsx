import {
  Stack,
  Flex,
  Button,
  Text,
  VStack,
  HStack,
  useBreakpointValue,
} from "@chakra-ui/react";
import WithSubnavigation from "../components/Navbar";
import Headline from "../components/Headline";
import Carousel from "../components/Carousel";
import Features from "../components/Features";
import ArticleList from "../components/Info";
import NFT from "../components/NFT";
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
              fontWeight={700}
              lineHeight={1.2}
              fontSize={useBreakpointValue({ base: "3xl", md: "4xl" })}
            >
              Raimundo Figueroa presents:
            </Text>
            <Text
              color={"white"}
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
      <Headline />
      <br />
      <br />
      <Features />
      <br />
      <br />
      <Carousel />
      <ArticleList />
      <HStack spacing={4}>
        <NFT />
        <NFT />

        <NFT />

        <NFT />
      </HStack>
      <HStack spacing={4}>
        <NFT />
        <NFT />

        <NFT />

        <NFT />
      </HStack>
    </>
  );
}
