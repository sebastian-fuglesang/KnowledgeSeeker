import { Level } from "trunx";
import { Title } from "trunx";

const BcardHeader = (props: any) => {

    return (

        <div className="card-header">
            <div className="card-header-title">
                <Title hasTextLink is4>{props.position}</Title>
            </div>
            <Title hasTextGrey is6 isItalic>{props.posted}</Title>
        </div>
    )
}

export default BcardHeader