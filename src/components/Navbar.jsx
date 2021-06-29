import { Link, withRouter } from "react-router-dom";
import { useState } from 'react'
import '../styles/navbar.css'

function Navbar() {
    
    const [isOpen, setIsOpen] = useState({
        'reseau': false,
        'pacte': false
    })

    function handleMouseEnter(e) {
        while(e.target.tagName !== 'LI') {
            e.target = e.target.parentElement
        }
        let myObj = {... isOpen}
        myObj[e.target.id] = true
        setIsOpen(myObj)
    }

    function handleMouseLeave(e) {
        while (e.target.tagName !== 'LI') {
            e.target = e.target.parentElement
        }
        let myObj = { ...isOpen }
        myObj[e.target.id] = false
        setIsOpen(myObj)
    }

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
                    <li id="reseau" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                        <Link className={window.location.pathname === "/reseau" ? `tgtg-navbar-link link-active` : "tgtg-navbar-link"} to="/">
                            Réseau anti-gaspi
                        </Link>
                        {isOpen.reseau ? 
                            <ul className="tgtg-navbar-sub">
                                <Link className="tgtg-navbar-sublink" to="/">
                                    Les villes partenaires
                                </Link>
                                <Link className="tgtg-navbar-sublink" to="/">
                                    Les engagements
                                </Link>
                            </ul>
                            :
                            <div className="tgtg-sub-triangle"></div>
                        }
                    </li>
                    <li id="pacte" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                        <Link className={window.location.pathname === "/pacte" ? `tgtg-navbar-link link-active` : "tgtg-navbar-link"} to="/">
                            Le pacte
                        </Link>
                        {isOpen.pacte ?
                            <ul className="tgtg-navbar-sub">
                                <Link className="tgtg-navbar-sublink" to="/">
                                    Les engagements
                                </Link>
                                <Link className="tgtg-navbar-sublink" to="/">
                                    Les signataires
                                </Link>
                                <Link className="tgtg-navbar-sublink" to="/">
                                    Signer le pacte
                                </Link>
                            </ul>
                            :
                            <div className="tgtg-sub-triangle"></div>
                        }
                    </li>
                    <li>
                        <Link className={window.location.pathname === "/exposition" ? `tgtg-navbar-link link-orange link-active` : "tgtg-navbar-link link-orange"} to="/exposition">
                            Exposition
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default withRouter(Navbar)