import Card from "../card/Card";
import './cards.css';

const Cards = ({ item }) => {

    return (
        <div className="cards">
            <div className="title">
                <div className="head">
                    <div className="color" style={{ backgroundColor: item?.color }}></div>
                    <span>{item?.title}</span>
                </div>
                <p className="box">{item?.count || '0'}</p>
            </div>

            <div className="cards-container">
                {
                    item?.cards?.length > 0 ? (
                        item.cards.map(info => (
                            <Card cardInfo={info} key={info.id} />
                        ))
                    ) : null
                }
            </div>
        </div>
    )
}

export default Cards;