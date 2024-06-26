import { useLeonConfigContext } from "@/context/leonConfigContext";
import {
  Button,
  Flex,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import ModalButtonGroup from "./modalButtonGroup";
import exp from "constants";

export default function LoginLeonModal() {
  const [isOpen, setIsOpen] = useState(true);
  const { completedFirstStep, completedSecondStep, completedThirdStep } =
    useLeonConfigContext();

  useEffect(() => {
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
        <ModalContent>
          <ModalHeader>Como receber os sinais corretamente!</ModalHeader>
          <ModalCloseButton />
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
                rightButtonLoadingText="Aguardando login"
                dispatchAction="SET_COMPLETED_FIRST_STEP"
                isStepAble={true}
                leftButtonDestiny="https://bit.ly/CorretoraConfiavelPortugal"
              />
              <Text style={{ marginTop: "24px" }}>
                2 - Abra o jogo lighting roulette e espere carrega-lo
                totalmente.
              </Text>
              <ModalButtonGroup
                leftButtonTitle="Clique para abrir o jogo"
                rightButtonTitle="Já abri o jogo"
                rightButtonLoadingText="Aguardando o jogo"
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
                rightButtonTitle="Completar configuração"
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
                loadingText="Complete os passos para ganhar dinheiro"
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
