import '../styles/card.css'

export default function Card(props) {
    return (
        <div className="tgtg-card" style={{ 'background-image': `url(${props.url})`}}>
        </div>
    )
}