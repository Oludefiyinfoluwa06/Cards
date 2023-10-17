import { cardContent } from "./constants";

export const Card = () => {
    return (
        <div className="my-cards">
            {cardContent.map(content => (
                <div className="card" key={content.id}>
                    <img src={content.imgPath} alt="img" />
                    <div className="texts">
                        <h3>{content.title}</h3>
                        <p>{content.description}</p>
                    </div>
                </div>
            ))}
        </div>
    );
}