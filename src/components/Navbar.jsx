import { Link, withRouter } from "react-router-dom";
import '../styles/navbar.css'

function Navbar() {
    
    return (
        <div className="tgtg-navbar">
            <Link to="/">
                <img id="tgtg-navbar-logo" src={"https://toogoodtogo.fr/images/logo/econ-textless.svg"} />
            </Link>
            <div className="tgtg-navbar-list">
                <ul>
                    <li>
                        <Link className={window.location.pathname === "/" ? `tgtg-navbar-link link-active` : "tgtg-navbar-link"} to="/">
                            Particulier
                        </Link>
                    </li>
                    <li>
                        <Link className={window.location.pathname === "/professionnels" ? `tgtg-navbar-link link-active` : "tgtg-navbar-link"}  to="/professionnels">
                            Professionnels
                        </Link>
                    </li>
                    <li>
                        <Link className={window.location.pathname === "/mouvement" ? `tgtg-navbar-link link-active` : "tgtg-navbar-link"} to="/mouvement">
                            Mouvement
                        </Link>
                    </li>
                    <li>
                        <Link className={window.location.pathname === "/blog" ? `tgtg-navbar-link link-active` : "tgtg-navbar-link"} to="/blog">
                            Blog
                        </Link>
                    </li>
                    <li>
                        <Link className={window.location.pathname === "/exposition" ? `tgtg-navbar-link link-active` : "tgtg-navbar-link"} to="/exposition">
                            Exposition
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default withRouter(Navbar)