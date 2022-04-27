import {
  Box,
  Container,
  Heading,
  SimpleGrid,
  Icon,
  Text,
  Stack,
  HStack,
  VStack,
} from "@chakra-ui/react";
import { CheckIcon } from "@chakra-ui/icons";

// Replace test data with your own
const features = Array.apply(null, Array(8)).map(function (x, i) {
  return {
    id: i,
    title: "Lorem ipsum dolor sit amet",
    text: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam.",
  };
});

export default function Headline() {
  return (
    <Box p={4}>
      <Stack spacing={4} as={Container} maxW={"3xl"}>
        <Heading textAlign={"center"} fontSize={"3xl"}>
          The Artist: Raimundo Figueroa{" "}
        </Heading>
        <Text color={"gray.500"} fontSize={"xl"}>
          Raimundo Figueroa is an American painter born in San Juan, Puerto
          Rico. His formal academic education has been an integral part in the
          creation of his paintings and an influence in his artistic
          development. Through the balance of color, density, and virtuosity of
          his fluid lines, Figueroa explores the depths of the human mind and
          its relation to chaotic emotions. His works on paper have a great
          sense of freedom and are masterfully composed snapshots of his
          imagination and daily life. As his titles suggest, his subject matter
          is intensely personal and emotional even though the feelings expressed
          – love and loss, illusion and disillusion, the desire to understand
          solitude, death, God – are universal. In 1987, his painting “Stop the
          War” won him the Honorary Medal at the renowned Mexico Biennial and
          ever since, Raimundo Figueroa’s work has been shown in major galleries
          and institutions throughout the world and form part of many important
          international collections. Figueroa has maintained a studio in Puerto
          Rico since the 1980s, though his itinerant lifestyle has given him
          opportunities to work for extended periods in the United States,
          Europe, particularly the Netherlands, New York, Miami and St.
          Barthelemy. Each domicile has inspired a new series of paintings and
          collages.
        </Text>
      </Stack>
    </Box>
  );
}
