import { Heading, HStack, List, ListItem, Image, Spinner, Button } from "@chakra-ui/react";
import useGenres, { Genre } from "../hooks/useGenres";
import getCroppedImageUrl from "../services/image-url";

interface props {
  onSelectedGenre : (genre: Genre) => void;
  selectedGenre: Genre | null;
}

const GenreList = ({onSelectedGenre, selectedGenre}: props) => {
  const { data: genres, isLoading, error } = useGenres();

const getColor = (genre: Genre) => 
  selectedGenre?.id === genre.id ? "yellow" : "gray";


if (error) return null;

if (isLoading) return <Spinner />;

  return (
    <>
      <Heading>Genres</Heading>
      <List>
        {genres.map((genre) => (
          <ListItem key={genre.id} paddingY="5px">
            <HStack>
              <Image
                src={getCroppedImageUrl(genre.image_background)}
                boxSize="32px"
                borderRadius={8}
                objectFit="cover"
              />
              <Button 
              colorScheme={getColor(genre)}
              variant="link" 
              fontSize="lg"
              onClick={() => onSelectedGenre(genre)}
              >
                {genre.name}
              </Button>
            </HStack>
          </ListItem>
        ))}
      </List>
    </>
  );
};

export default GenreList;