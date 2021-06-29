import '../styles/card.css'

export default function CardSmall(props) {
    return (
        <div className="tgtg-card-small">
            <img src={props.img} />
            <h3>{props.title}</h3>
            <p>{props.text}</p>
        </div>
    )
}