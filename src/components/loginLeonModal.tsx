import { useLeonConfigContext } from "@/context/leonConfigContext";
import {
  Button,
  Flex,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import ModalButtonGroup from "./modalButtonGroup";

export default function LoginLeonModal() {
  const [isOpen, setIsOpen] = useState(true);
  const { completedFirstStep, completedSecondStep, completedThirdStep } =
    useLeonConfigContext();

  useEffect(() => {
    if (localStorage.getItem("hasDoneLeonSetup")) {
      const jsonLeonConfig = JSON.parse(
        localStorage.getItem("hasDoneLeonSetup") as string
      );
      const timeDifference = Date.now() - jsonLeonConfig.dateSaved;
      const hoursDifference = timeDifference / (1000 * 60 * 60);
      if (!localStorage.getItem("hasDoneLeonSetup") || hoursDifference > 2) {
        localStorage.setItem(
          "hasDoneLeonSetup",
          JSON.stringify({ value: false, dateSaved: null })
        );
      }
    }

    if (!localStorage.getItem("hasDoneLeonSetup")) {
      localStorage.setItem(
        "hasDoneLeonSetup",
        JSON.stringify({ value: false, dateSaved: null })
      );
    }
  }, []);

  function finishConfig() {
    setIsOpen(false);
    const dateSaved = Date.now();
    const item = {
      value: true,
      dateSaved,
    };
    localStorage.setItem("hasDoneLeonSetup", JSON.stringify(item));
  }

  return (
    <>
      <Modal size="xl" isOpen={isOpen} onClose={() => setIsOpen(!isOpen)}>
        <ModalOverlay backdropFilter="blur(10px) hue-rotate(90deg)" />
        <ModalContent background="linear-gradient(120deg, #000 0%, #120E09 20%, #120E09 70%, #000 100%)">
          <ModalHeader>Como receber os sinais corretamente!</ModalHeader>
          <ModalBody>
            <Flex gap="12px" direction="column">
              <Text>
                Para acessar o jogo corretamente, siga COM ATENÇÃO os passos
                abaixo.
              </Text>
              <Text>
                Para cada item, você deve completar o passo anterior para
                prosseguir. Caso tenha dúvidas, entre em contato com nosso
                suporte.
              </Text>
              <Text style={{ marginTop: "24px" }}>
                1 - Logue na casa de apostas Leon, ou crie uma conta clicando no
                botão abaixo.
              </Text>
              <ModalButtonGroup
                leftButtonTitle="Clique para logar"
                rightButtonTitle="Já loguei na casa"
                rightButtonLoadingText="Aguardando"
                dispatchAction="SET_COMPLETED_FIRST_STEP"
                isStepAble={true}
                leftButtonDestiny="https://bit.ly/CorretoraConfiavelPortugal"
              />
              <Text style={{ marginTop: "24px" }}>
                2 - Abra o jogo lighting roulette e espere carrega-lo
                totalmente.
              </Text>
              <ModalButtonGroup
                leftButtonTitle="Abrir o jogo"
                rightButtonTitle="Já abri o jogo"
                rightButtonLoadingText="Aguardando"
                dispatchAction="SET_COMPLETED_SECOND_STEP"
                isStepAble={completedFirstStep}
                leftButtonDestiny="https://leon84.casino/live-casino/evolution/play/lightning-roulette"
              />
              <Text style={{ marginTop: "24px" }}>
                3 - Certifique-se de que seguiu todos os passos. E feche as
                abas/janelas com a tela do jogo aberta.
              </Text>
              <ModalButtonGroup
                leftButtonTitle="Já fechei tudo"
                rightButtonTitle="Completar"
                rightButtonLoadingText="Aguardando"
                dispatchAction="SET_COMPLETED_THIRD_STEP"
                isStepAble={completedSecondStep}
                isLastStep
              />
            </Flex>
          </ModalBody>
          <ModalFooter style={{ marginTop: "20px" }}>
            <Flex width="100%" justify="center">
              <Button
                isLoading={
                  !completedFirstStep ||
                  !completedSecondStep ||
                  !completedThirdStep
                }
                loadingText="Aguardando"
                colorScheme="blue"
                mr={3}
                onClick={finishConfig}
              >
                Começar a ganhar dinheiro!
              </Button>
            </Flex>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
