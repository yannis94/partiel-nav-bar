import '../styles/cardarticle.css'

export default function CardArticle(props) {
    return (
        <div className="tgtg-cardarticle">
            <div className="tgtg-cardarticle-top" style={{'background-image': `url(${props.topUrl})`}}></div>
            <div className="tgtg-cardarticle-bottom">
                <p className="tgtg-cardarticle-theme">{props.theme}</p>
                <p className="tgtg-cardarticle-title">{props.title}</p>
                <p className="tgtg-cardarticle-author">{props.author}</p>
            </div>
        </div>
    )
}