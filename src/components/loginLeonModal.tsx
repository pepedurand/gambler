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
import Link from "next/link";
import { redirect } from "next/navigation";
import { useState } from "react";

export default function LoginLeonModal() {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <>
      <Modal size="xl" isOpen={isOpen} onClose={() => setIsOpen(!isOpen)}>
        <ModalOverlay backdropFilter="blur(10px) hue-rotate(90deg)" />
        <ModalContent>
          <ModalHeader>Verifique seu login</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Flex gap="12px" direction="column">
              <Text>
                Para acessar os jogos corretamente, é necessário estar logado na
                casa, caso não esteja você não conseguirá visualizar os jogos
                corretamente.
              </Text>
              <Text>
                Caso ainda não tenha se castratado, cadastre-se pelo botão
                abaixo para garantir seu bônus.
              </Text>
            </Flex>
          </ModalBody>
          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={() => setIsOpen(false)}>
              Já estou logado na casa
            </Button>
            <Button variant="outline" colorScheme="red">
              <Link
                target="_blank"
                href="https://bit.ly/CorretoraConfiavelPortugal"
              >
                Logar/Cadastrar na Leon
              </Link>
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
