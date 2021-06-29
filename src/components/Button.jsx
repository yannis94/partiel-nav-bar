import '../styles/button.css'

export default function Button(props) {
    return (
        <div className={`tgtg-cta tgtg-cta-${props.color}`}>
            {props.content}
        </div>
    )
}