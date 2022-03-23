interface CardsInterface{
    image: string;
    rating:string;
    description:string;
    price:string;
    reviews:number;
}

export default function Card(props:CardsInterface):JSX.Element{
    return(
        <div className="each-card">
         <img src= {props.image} alt="someone swimming"/>
         <span className="card-info">
            <img src="images/Star.png" alt="star bullet" className="star"/>
            <p>{props.rating}</p>
            <p className="gray">({props.reviews})•USA</p>
         </span>
        <p>{props.description}</p>
        <p><strong>From {props.price}</strong>/person</p>
        </div>
    )
}