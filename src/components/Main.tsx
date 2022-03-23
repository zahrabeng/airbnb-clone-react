import NavBar from "./NavBar";
import Hero from "./Hero";
import Card from "./Card";
import Data from "./Data";

const eachCard = Data.map((value) => (
  <Card
    key={value.id}
    image={value.coverImg}
    rating={value.stats.rating}
    description={value.title}
    price={value.price}
    reviews={value.stats.reviewCount}
    location = {value.location}
  />
));

export default function Main(): JSX.Element {
  return (
    <>
      <NavBar />
      <Hero />
      <div>
          {eachCard}
      </div>
    </>
  );
}
