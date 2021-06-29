import { Button, Card } from './index'

function Home() {
    return (
        <div className="home_page">
            <h1>Sauver de délicieux invendues</h1>
            <h2>Et à un prix avantageux !</h2>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et eveniet omnis neque aliquid veniam,
                explicabo aperiam dolor iste, quaerat vero iure dolorem, ipsum dignissimos. Dolorem debitis
                accusantium quos adipisci fuga!
            </p>
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
                        color="contrast"
                        content='En savoir plus'
                    />
                </div>
            </div>
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
        </div>
    )
}

export default Home