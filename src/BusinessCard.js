import Image from "./Img";
import Desription from "./Description";
import Social from "./Social";

function BusinessCard()
{
    return(
        <div className="Card">
            <Image/>
            <Desription/>
            <Social/>
        </div>
    )
}

export default BusinessCard;