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
          About the collection{" "}
        </Heading>
        <Text color={"gray.500"} fontSize={"xl"}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus
          rem pariatur incidunt in eligendi autem repellendus assumenda cum est!
          Est nam ea alias eveniet doloremque. Vel culpa fugiat laborum earum?
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro amet
          necessitatibus accusantium perspiciatis officia id alias fugit placeat
          illum, similique et ut impedit ducimus repudiandae in quidem
          quibusdam, explicabo debitis.
        </Text>
      </Stack>
    </Box>
  );
}
