import { primaryColor } from "@/types/colors";
import {
  Flex,
  CircularProgress,
  CircularProgressLabel,
  Button,
  Image,
  Text,
} from "@chakra-ui/react";

export default function GameSignal() {
  return (
    <Flex gap="12px" direction="column" align="center" justify="center">
      <Flex gap="8px" align="center">
        <Image
          src="roulette-icon.png"
          alt="Icone de roleta"
          width="20px"
          height="20px"
        />
        <Text>
          <b>Lightning Roulette</b>
        </Text>
      </Flex>
      <Text>Assertividade</Text>
      <CircularProgress
        size="60px"
        fill="transparent"
        max={70}
        value={40}
        color={primaryColor}
      >
        <CircularProgressLabel>70%</CircularProgressLabel>
      </CircularProgress>
      <Button color={primaryColor} variant="outline">
        Gerar sinal
      </Button>
    </Flex>
  );
}
