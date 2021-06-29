import { Button, Card, CardSmall } from './index'

function Mouvement() {
    return (
        <div className="mouvement_page">
            <h1>Le mouvement de la lutte contre le gaspillage alimentaire</h1>
            <h2>1/3 de la nourriture produite dans le monde est jetée</h2>
            <div className="tgtg-section">
                <Card url="https://toogoodtogo.fr/v2020/utilities/watermelon-globe-dark.png" />
                <div className="tgtg-section-content">
                    <p className="tgtg-quote">"Réduire le gaspillage alimentaire est l'une des choses les plus 
                    importantes que l'on puisse faire pour inverser le changement climatique."</p>
                    <p>- Chad Frischmann, Expert du Changement Climatique</p>
                </div>
            </div>
            <h1>Notre ambition</h1>
            <p>
                Notre mission est d'inspirer et de donner le pouvoir à chacun de lutter contre le gaspillage 
                alimentaire. Pour faire de l'anti-gaspi une réalité de chaque instant, il faut passer des 
                paroles aux actes ! C'est dans ce but que s'inscrit notre nouvelle initiative : contribuer 
                autant que possible à la création d'un mouvement global de lutte contre le gaspillage 
                alimentaire. Ce n'est qu'en rassemblant nos forces et en agissant ensemble contre le 
                gaspillage alimentaire que l'on parviendra à générer un changement positif.
            </p>
            <div className="tgtg-section">
                <div className="tgtg-section-content">
                    <h2>Une solution incontournable pour les commerçants</h2>
                    <h3>Devenez partenaire !</h3>
                    <p>
                        Nous nous faisons un plaisir d'accueillir chaque jour de nouveaux
                        partenaires dans la lutte contre le gaspillage alimentaire. Nous
                        vous aidons à revaloriser vos invendus et à réduire votre
                        empreinte écologique. C'est gagnant-gagnant, pour vous et pour
                        la planète.
                    </p>
                    <Button
                        color="contrast"
                        content='Devenez partenaire'
                    />
                </div>
                <Card url="https://toogoodtogo.fr/v2020/front-page/give-bag.png" />
            </div>
            <div className="tgtg-section">
                <Card url="https://toogoodtogo.fr/v2020/front-page/food-basket.png" />
                <div className="tgtg-section-content">
                    <h2>Faire la différence</h2>
                    <h3>Nous construisons de grandes choses</h3>
                    <p>
                        Afin d'avoir un impact réel sur la problématique du gaspillage alimentaire,
                        nous devons travailler main dans la main avec le monde politique,
                        l'éducation, les foyers et les entreprises. Découvrez nos nombreuses actions !
                    </p>
                    <Button
                        color="contrast-light"
                        content='En savoir plus'
                    />
                </div>
            </div>
        </div>
    )
}

export default Mouvement