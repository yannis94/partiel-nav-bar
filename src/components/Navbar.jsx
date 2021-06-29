import { Link, withRouter } from "react-router-dom";
import { useState, useEffect } from 'react'
import '../styles/navbar.css'

function Navbar() {
    
    const [isOpen, setIsOpen] = useState({
        'reseau': false,
        'pacte': false
    })

    const [noChange, setNoChange] = useState(false)
    const [menu, setMenu] = useState()

    useEffect(() => {
        setMenu(document.querySelector(".tgtg-navbar-list ul"))
    }, [noChange])

    const [burgerOpen, setBurgerOpen] = useState(false)

    
    function handleClick(e) {
        
        if (burgerOpen) {
            document.querySelector(".tgtg-navbar-list").appendChild(menu)
            document.querySelector(".tgtg-nav-buger-background").style.animation = "slide reverse 1s"
            setBurgerOpen(false)
            setTimeout(() => {
                document.querySelector("#tgtg-menu-mobile").remove()
                document.querySelector(".tgtg-nav-buger-background").style.marginLeft = "100%"
            }, 1000);
        }
        else {
            let mobileMenu = menu
            setBurgerOpen(true)
            document.querySelector(".tgtg-navbar-list ul").remove()
            mobileMenu.id = "tgtg-menu-mobile"
            mobileMenu.classList.remove("tgtg-navbar-list")
            mobileMenu.querySelector("#reseau").addEventListener("mouseenter", handleMouseEnter)
            mobileMenu.querySelector("#reseau").addEventListener("mouseleave", handleMouseLeave)
            document.querySelector(".tgtg-nav-buger-background").appendChild(mobileMenu)

            setTimeout(() => {
                document.querySelector(".tgtg-nav-buger-background").style.marginLeft = "0"
            }, 1000);
        }
    }

    function handleMouseEnter(e) {
        console.log("enter")
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
            <Link id="tgtg-navbar-logo" to="/">
                <img className="tgtg-logo" src={"https://toogoodtogo.fr/images/logo/econ-textless.svg"} />
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
            {burgerOpen ? 
                <div className="burger-close" onClick={handleClick}>
                    <div></div>
                    <div></div>
                </div>
                :
                <div className="tgtg-nav-burger" onClick={handleClick}>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
            }
            <div className={burgerOpen ? "tgtg-nav-buger-background pannel_slide" : "tgtg-nav-buger-background"}></div>
        </div>
    )
}

export default withRouter(Navbar)