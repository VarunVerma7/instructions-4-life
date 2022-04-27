import {
  Container,
  SimpleGrid,
  Image,
  Flex,
  Heading,
  Text,
  Stack,
  StackDivider,
  Icon,
  useColorModeValue,
} from "@chakra-ui/react";
import {
  IoAnalyticsSharp,
  IoLogoBitcoin,
  IoSearchSharp,
} from "react-icons/io5";
import { ReactElement } from "react";

interface FeatureProps {
  text: string;
  iconBg: string;
  icon?: ReactElement;
}

const Feature = ({ text, icon, iconBg }: FeatureProps) => {
  return (
    <Stack direction={"row"} align={"center"}>
      <Flex
        w={8}
        h={8}
        align={"center"}
        justify={"center"}
        rounded={"full"}
        bg={iconBg}
      >
        {icon}
      </Flex>
      <Text fontWeight={600}>{text}</Text>
    </Stack>
  );
};

export default function AboutRaimundo() {
  return (
    <Container maxW={"5xl"} py={12}>
      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
        <Stack spacing={4}>
          <Text
            textTransform={"uppercase"}
            color={"blue.400"}
            fontWeight={600}
            fontSize={"sm"}
            bg={useColorModeValue("blue.50", "blue.900")}
            p={2}
            alignSelf={"flex-start"}
            rounded={"md"}
          >
            The Artist
          </Text>
          <Heading>Raimundo Faiguerdo</Heading>
          <Text color={"gray.500"} fontSize={"lg"}>
            Raimundo Figueroa is an American painter born in San Juan, Puerto
            Rico. His formal academic education has been an integral part in the
            creation of his paintings and an influence in his artistic
            development. Through the balance of color, density, and virtuosity
            of his fluid lines, Figueroa explores the depths of the human mind
            and its relation to chaotic emotions. His works on paper have a
            great sense of freedom and are masterfully composed snapshots of his
            imagination and daily life. As his titles suggest, his subject
            matter is intensely personal and emotional even though the feelings
            expressed – love and loss, illusion and disillusion, the desire to
            understand solitude, death, God – are universal. In 1987, his
            painting “Stop the War” won him the Honorary Medal at the renowned
            Mexico Biennial and ever since, Raimundo Figueroa’s work has been
            shown in major galleries and institutions throughout the world and
            form part of many important international collections. Figueroa has
            maintained a studio in Puerto Rico since the 1980s, though his
            itinerant lifestyle has given him opportunities to work for extended
            periods in the United States, Europe, particularly the Netherlands,
            New York, Miami and St. Barthelemy. Each domicile has inspired a new
            series of paintings and collages.
          </Text>
          <Stack
            spacing={4}
            divider={
              <StackDivider
                borderColor={useColorModeValue("gray.100", "gray.700")}
              />
            }
          ></Stack>
        </Stack>
        <Flex>
          <Image
            rounded={"md"}
            alt={"feature image"}
            src={"about-rai.png"}
            objectFit={"cover"}
          />
        </Flex>
      </SimpleGrid>
    </Container>
  );
}
