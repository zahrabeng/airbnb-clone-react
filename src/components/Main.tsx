import NavBar from "./NavBar"
import Hero from "./Hero"
import Card from "./Card"

export default function Main():JSX.Element{
    return(
        <>
        <NavBar/>
        <Hero/>
        <div>
            <Card image="images/swimmer.png"
            rating = "5.0"
            description = "Life lessons with Katie Zaferes"
            price = "$50"
            reviews = {6}
            />
        </div>
        </>
    )
}