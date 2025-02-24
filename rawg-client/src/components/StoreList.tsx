import { Heading, HStack, List, ListItem, Image, Spinner, Button, Link } from "@chakra-ui/react";
import useStores, { Store } from "../hooks/useStores";
import getCroppedImageUrl from "../services/image-url";

interface props {
  onSelectedStore : (store: Store | null) => void;
  selectedStore: Store | null;
}

const StoreList = ({onSelectedStore, selectedStore}: props) => {
  const { data: stores, isLoading, error } = useStores();

const getColor = (store: Store) => 
  selectedStore?.id === store.id ? "yellow" : "gray";


if (error) return null;

if (isLoading) return <Spinner />;

  return (
    <>
      <Button variant="link" onClick={()=> onSelectedStore(null)}>
        <Heading>Stores</Heading>
      </Button>
      <List>
        {stores.map((store) => (
          <ListItem key={store.id} paddingY="5px">
            <HStack>
              <Image
                src={getCroppedImageUrl(store.image_background)}
                boxSize="32px"
                borderRadius={8}
                objectFit="cover"
              />
              <Button 
              colorScheme={getColor(store)}
              variant="link" 
              fontSize="lg"
              onClick={() => onSelectedStore(store)}
              >
                {store.name}
              </Button>
            </HStack>
          </ListItem>
        ))}
      </List>
    </>
  );
};

export default StoreList;