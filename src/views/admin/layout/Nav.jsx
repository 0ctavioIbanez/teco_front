import { NavLink } from "react-router-dom"
import { Fragment } from "react"
import { routes } from "./nav.router"

const Nav = () => {
    const handleClick = e => {
        let navGroupBtn = e.target;

        while (!navGroupBtn.classList.contains("__group")) {
            navGroupBtn = navGroupBtn.parentElement;
        }

        const listNav = navGroupBtn.parentElement;
        const hiddenContainer = listNav.querySelector(".collapse");
        const sidebarContainer = listNav.parentElement;
        
        const currentActive = sidebarContainer.querySelector(".active")
        if (currentActive) {
            currentActive.classList.remove("active")
        }
        
        listNav.classList.add("active");
        
        if (listNav.classList.contains("submenu")) { // Está abierto, se cerrará
            listNav.classList.remove("submenu");
            hiddenContainer.classList.remove("show")
        } else {
            listNav.classList.add("submenu");
            hiddenContainer.classList.add("show");
        }
    }

    return (
        <>
            {routes.map((route, r) =>
                <Fragment key={`section-nav-${r}`}>
                    <li className="nav-section">
                        <span className="sidebar-mini-icon">
                            <i className="fa fa-ellipsis-h" />
                        </span>
                        <h4 className="text-section">{route.section}</h4>
                    </li>
                    {route.groups.map((group, g) =>
                        <li className={`nav-item ${r == 0 ? 'active' : null} `} key={`group-nav-${g}`}>
                            <a onClick={ e => handleClick(e) } className="collapsed __group">
                                <i className="fas fa-home" />
                                <p>{group.title}</p>
                                <span className="caret" />
                            </a>
                            <div className="collapse">
                                <ul className="nav nav-collapse">
                                    {group.navs.map((nav, n) =>
                                        <li key={`nav-nav-${n}`}>
                                            <NavLink to={ nav.to }>
                                                <span className="sub-item">{nav.label}</span>
                                            </NavLink>
                                        </li>
                                    )}
                                </ul>
                            </div>
                        </li>
                    )}
                </Fragment>
            )}
        </>
    )
}

export default Nav