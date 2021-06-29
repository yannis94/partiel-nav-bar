import '../styles/footer.css'

export default function Footer () {
    return (
        <div className="tgtg-footer">
            <div className="tgtg-footer-bar"></div>
            <div className="tgtg-footer-content">
                <div className="tgtg-footer-content-div">
                    <h3>Plan du site</h3>
                    <ul>
                        <li><a href="#">Particulier</a></li>
                        <li><a href="#">Professionnels</a></li>
                        <li><a href="#">Mouvement</a></li>
                        <li><a href="#">Blog</a></li>
                        <li><a href="#">Réseau anti-gaspi</a></li>
                        <li><a href="#">Le pacte</a></li>
                    </ul>
                </div>
                <div className="tgtg-footer-content-div">
                    <h3>Autres</h3>
                    <ul>
                        <li><a href="#">Presse</a></li>
                        <li><a href="#">Aide</a></li>
                        <li><a href="#">Career</a></li>
                        <li><a href="#">Mystore</a></li>
                    </ul>
                </div>
                <div className="tgtg-footer-content-div">
                    <h3>Mentions légales</h3>
                    <ul>
                        <li><a href="#">Conditions générales d'utilisation</a></li>
                        <li><a href="#">Politique de confidentialité</a></li>
                        <li><a href="#">Utilisation de cookies</a></li>
                    </ul>
                </div>
                <div className="tgtg-footer-content-div">
                    <img className='tgtg-footer-bcorp' src={"https://toogoodtogo.fr/images/logo/b-corp-logo.png"} />
                </div>
            </div>
            <div className="tgtg-footer-outlink">
                <img className="tgtg-logo" src={"https://toogoodtogo.fr/images/logo/econ-textless.svg"} />
                <ul>
                    <li>
                        <div className="tgtg-social-link">

                        </div>
                    </li>
                    <li>
                        <div className="tgtg-social-link">

                        </div>
                    </li>
                    <li>
                        <div className="tgtg-social-link">

                        </div>
                    </li>
                    <li>
                        <div className="tgtg-social-link">

                        </div>
                    </li>
                    <li>
                        <div className="tgtg-social-link">

                        </div>
                    </li>
                </ul>
                <p>Copyright © Too Good To Go International. All Rights Reserved.</p>
                <div className="tgtg-footer-outlink-app">
                    <img className="tgtg-footer-outlink-appimg" src={"https://toogoodtogo.fr/images/buttons/app-store/fr.svg"} />
                    <img className="tgtg-footer-outlink-appimg" src={"https://toogoodtogo.fr/images/buttons/google-play/fr.svg"} />
                </div>
            </div>
        </div>
    )
}