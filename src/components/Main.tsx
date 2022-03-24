import NavBar from "./NavBar";
import Hero from "./Hero";
import Card from "./Card";
import Data from "./Data";

const eachCard = Data.map((value) => (
  <Card
    key={value.id}
    item={value}
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
