// interface CardsInterface {
//   image: string;
//   rating: number;
//   description: string;
//   price: number;
//   reviews: number;
//   location:string;
//   openSpots:number;
// }

export default function Card(props:any): JSX.Element {
    //badge text to display either sold out or online
    let badgeText
    if (props.item.openSpots === 0) {
        badgeText = "SOLD OUT"
    } else if (props.item.location === "Online") {
        badgeText = "ONLINE"
    }

  return (
    <div className="each-card">
    {badgeText && <div className="sold-out">{badgeText}</div>}
      <img className ="card-images" src={props.item.coverImg} alt="someone swimming" />

      <span className="card-info">
        <img src="images/Star .png" alt="star bullet" className="star" />
        <p>{props.item.stats.rating}</p>
        <p className="gray">({props.item.stats.reviewCount})•{props.item.location}</p>
      </span>

      <p>{props.item.title}</p>
      <p>
        <strong>From ${props.item.price}</strong>/person
      </p>
    </div>
  );
}
