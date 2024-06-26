"use client";
import Header from "@/components/header";
import { useAuth } from "@/context/authContext";
import { primaryColor } from "@/types/colors";
import {
  Box,
  Button,
  Center,
  CircularProgress,
  CircularProgressLabel,
  Flex,
  Heading,
  Image,
  Step,
  StepDescription,
  StepIcon,
  StepIndicator,
  StepNumber,
  StepSeparator,
  StepStatus,
  StepTitle,
  Stepper,
  Text,
  useSteps,
} from "@chakra-ui/react";
import { redirect } from "next/navigation";

export default function LightningRoulette() {
  const { isUserLoggedIn } = useAuth();
  const steps = [
    { title: "First", description: "Contact Info" },
    { title: "Second", description: "Date & Time" },
    { title: "Third", description: "Select Rooms" },
  ];

  const { activeStep } = useSteps({
    index: 1,
    count: steps.length,
  });

  if (!isUserLoggedIn) {
    return redirect("/entrar");
  }

  return (
    <Flex justify="center" direction="column" width="100vw">
      <Header />
      <Flex gap="40px" align="center" direction="column">
        {/* <Stepper
          index={activeStep}
          orientation="vertical"
          height="200px"
          gap="0"
          color={primaryColor}
        >
          {steps.map((step, index) => (
            <Step key={index}>
              <StepIndicator borderColor={primaryColor}>
                <StepStatus
                  complete={<StepIcon />}
                  incomplete={<StepNumber />}
                  active={<StepNumber />}
                />
              </StepIndicator>

              <Box flexShrink="0">
                <StepTitle>{step.title}</StepTitle>
                <StepDescription>{step.description}</StepDescription>
              </Box>

              <StepSeparator />
            </Step>
          ))}
        </Stepper> */}
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
        <Center>
          <iframe
            style={{
              minHeight: "80vh",
              minWidth: "80vw",
              marginBottom: "40px",
            }}
            src="https://live.leon.red/frontend/evo/r2/"
          />
        </Center>
      </Flex>
    </Flex>
  );
}
