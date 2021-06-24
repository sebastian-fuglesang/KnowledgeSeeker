import workplaceImage from "../../workplace.jpg"

const BcardImage = () => {
    return (

        <div className="card-image">
            <figure className="image is-1by1">
                <img src={workplaceImage} alt="Image of a workplace" />
            </figure>
        </div>
    )

}


export default BcardImage