import { Container } from "./styles";
import Card from "../../components/Card";

export default function Home() {
  const props = {
    image: "./image-victor.jpg",
    name: "Victor Crest",
    age: 26,
    location: "London",
    stats: {
      followers: 80,
      likes: 803,
      photos: 1.4,
    },
  };

  return (
    <Container>
      <Card {...props} />
    </Container>
  );
}
