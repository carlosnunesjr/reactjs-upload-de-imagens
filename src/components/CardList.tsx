import { SimpleGrid, useDisclosure } from "@chakra-ui/react";
import { useState } from "react";
import { Card } from "./Card";
import { ModalViewImage } from "./Modal/ViewImage";

interface Card {
  title: string;
  description: string;
  url: string;
  ts: number;
  id: string;
}

interface CardsProps {
  cards: Card[];
}

export function CardList({ cards }: CardsProps): JSX.Element {
  const { onOpen, isOpen, onClose } = useDisclosure();

  const [urlImage, setUrlImage] = useState<string>(null);

  function handleViewImage(url: string) {
    setUrlImage(url);
    onOpen();
  }
  return (
    <>
      <SimpleGrid minChildWidth="290px" spacing="40px">
        {cards.map(card => (
          <Card
            data={card}
            key={card.id}
            viewImage={() => handleViewImage(card.url)}
          />
        ))}
      </SimpleGrid>

      {isOpen && (
        <ModalViewImage imgUrl={urlImage} isOpen={isOpen} onClose={onClose} />
      )}
    </>
  );
}
