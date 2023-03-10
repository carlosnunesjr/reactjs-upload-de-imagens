import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalFooter,
  ModalBody,
  Image,
  Link
} from "@chakra-ui/react";

interface ModalViewImageProps {
  isOpen: boolean;
  onClose: () => void;
  imgUrl: string;
}

export function ModalViewImage({
  isOpen,
  onClose,
  imgUrl
}: ModalViewImageProps): JSX.Element {
  return (
    <Modal isOpen={isOpen} onClose={onClose} isCentered size="4xl">
      <ModalOverlay />
      <ModalContent bgColor="pGray.900">
        <ModalBody>
          <Image src={imgUrl} maxW="900px" maxH="600px" />
        </ModalBody>
        <ModalFooter
          fontSize="14px"
          fontWeight="400"
          lineHeight="16px"
          justifyContent="start"
          color="#F3F2F2"
        >
          <Link href={imgUrl} target="blank">
            Abrir original
          </Link>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}
