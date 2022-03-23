interface CardsInterface {
  image: string;
  rating: number;
  description: string;
  price: number;
  reviews: number;
  location:string;
}

export default function Card(props: CardsInterface): JSX.Element {
  return (
    <div className="each-card">
      <img className ="card-images" src={props.image} alt="someone swimming" />

      <span className="card-info">
        <img src="images/Star .png" alt="star bullet" className="star" />
        <p>{props.rating}</p>
        <p className="gray">({props.reviews})•{props.location}</p>
      </span>

      <p>{props.description}</p>
      <p>
        <strong>From ${props.price}</strong>/person
      </p>
    </div>
  );
}
