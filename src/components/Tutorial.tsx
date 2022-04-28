import {
  Box,
  VStack,
  Button,
  Flex,
  Divider,
  chakra,
  Grid,
  GridItem,
  Container,
} from "@chakra-ui/react";
import {} from "@chakra-ui/react";

interface FeatureProps {
  heading: string;
  text: string;
}

const Feature = ({ heading, text }: FeatureProps) => {
  return (
    <GridItem>
      <chakra.h3 fontSize="xl" fontWeight="600">
        {heading}
      </chakra.h3>
      <chakra.p>{text}</chakra.p>
    </GridItem>
  );
};

export default function Tutorial() {
  return (
    <Box as={Container} maxW="7xl" mt={14} p={4}>
      <Grid
        templateColumns={{
          base: "repeat(1, 1fr)",
          sm: "repeat(2, 1fr)",
          md: "repeat(2, 1fr)",
        }}
        gap={4}
      >
        <GridItem colSpan={1}>
          <VStack alignItems="flex-start" spacing="20px">
            <chakra.h2 fontSize="3xl" fontWeight="700">
              How does the NFT work?
            </chakra.h2>
            <Button colorScheme="blue" size="md">
              Go to Collection
            </Button>
          </VStack>
        </GridItem>
        <GridItem>
          <Flex>
            <chakra.p>
              {" "}
              NFTs are tokens that we can use to represent ownership of unique
              items. They let us tokenise things like art, collectibles, even
              real estate. They can only have one official owner at a time and
              they're secured by the Ethereum blockchain – no one can modify the
              record of ownership or copy/paste a new NFT into existence. NFT
              stands for non-fungible token. Non-fungible is an economic term
              that you could use to describe things like your furniture, a song
              file, or your computer. These things are not interchangeable for
              other items because they have unique properties.
            </chakra.p>
          </Flex>
        </GridItem>
      </Grid>
      <br />
      <br />
      <br />

      <Grid
        templateColumns={{
          base: "repeat(1, 1fr)",
          sm: "repeat(2, 1fr)",
          md: "repeat(4, 1fr)",
        }}
        gap={{ base: "8", sm: "12", md: "16" }}
      >
        <Feature
          heading={"Step 1"}
          text={"Connect your Metamask Wallet containing Ether"}
        />
        <Feature heading={"Step 2"} text={"Approve the Contract"} />
        <Feature heading={"Step 3"} text={"Purchase the asset"} />
        <Feature
          heading={"Step 4"}
          text={"View the Asset in Metamask or any NFT viewer"}
        />
      </Grid>
    </Box>
  );
}
