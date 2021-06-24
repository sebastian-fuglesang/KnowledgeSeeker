import { Subtitle } from "trunx";

const BcardContent = (props:any) => {
    return (
        <div className="card-content">
            <Subtitle>{props.description}</Subtitle>
        </div>
    )
}

export default BcardContent