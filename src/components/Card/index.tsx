import { Container, Header, Body, Footer } from "./styles";

export default function Card({ image, name, age, location, stats }: Props) {
  return (
    <Container>
      <Header>
        <img src={image} alt="Avatar" />
      </Header>

      <Body>
        <p>
          <strong>{name}</strong> {age}
        </p>
        <span>{location}</span>
      </Body>

      <Footer>
        {Object.keys(stats).map((key) => (
          <div key={key}>
            <strong>{(stats as any)[key]}K</strong>
            <span>{key}</span>
          </div>
        ))}
      </Footer>
    </Container>
  );
}

type Props = {
  image: string;
  name: string;
  age: number;
  location: string;
  stats: {
    followers: number;
    likes: number;
    photos: number;
  };
};
