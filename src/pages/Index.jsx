import React, { useState } from "react";
import { Box, Button, Center, Container, Text, useDisclosure, Modal, ModalOverlay, ModalContent, ModalHeader, ModalFooter, ModalBody, ModalCloseButton, VStack } from "@chakra-ui/react";
import { FaGift } from "react-icons/fa";

const Index = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [isRevealed, setIsRevealed] = useState(false);
  const [voucherCode, setVoucherCode] = useState("");

  // Simulate an API call to get a voucher code
  const fetchVoucherCode = async () => {
    // This is where you would make the actual API call.
    // For the sake of this example, I'm using a hardcoded value.
    const apiResponse = "TEAM-MARC-2023";

    setVoucherCode(apiResponse);
    onOpen();
  };

  const handleScratch = () => {
    setIsRevealed(true);
  };

  return (
    <Container centerContent>
      <Center height="100vh" flexDirection="column">
        <VStack spacing={5}>
          <Text fontSize="2xl" fontWeight="bold">
            Team Marc Voucher
          </Text>
          <Button leftIcon={<FaGift />} colorScheme="teal" onClick={fetchVoucherCode}>
            Reveal Your Voucher
          </Button>
        </VStack>

        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Scratch to reveal your voucher code</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <Center
                height="200px"
                position="relative"
                width="100%"
                bg="gray.200"
                _before={{
                  content: `"${isRevealed ? "" : "Scratch here to reveal"}"`,
                  position: "absolute",
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                  fontSize: "lg",
                  fontWeight: "bold",
                  color: "gray.500",
                  ...(isRevealed && { display: "none" }),
                }}
                onClick={handleScratch}
              >
                {isRevealed && (
                  <Text fontSize="2xl" fontWeight="bold">
                    {voucherCode}
                  </Text>
                )}
              </Center>
            </ModalBody>
            <ModalFooter>
              <Button colorScheme="blue" mr={3} onClick={onClose}>
                Close
              </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </Center>
    </Container>
  );
};

export default Index;
