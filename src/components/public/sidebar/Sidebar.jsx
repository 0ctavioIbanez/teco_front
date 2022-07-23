import { Link } from 'react-router-dom';
import './sidebar.css';
import profilepic from '../../../assets/img/profile.png';

const Sidebar = ({ expanded, setExpanded, items }) => {
    const handleOutsideClick = ({ classList }) => {
        if (classList.contains('sidebar__')) {
            setExpanded(false);
        }
    };
    const handleNav = (target) => {
        const btn = target.classList.contains('fas') ? target.parentElement : target;
        const childNav = btn.parentElement.parentElement.querySelector('.sidebar__nav__child');

        if (childNav.classList.contains('active')) {
            btn.classList.remove('chevron-rotate');
            return childNav.classList.remove('active');
        }

        btn.classList.add('chevron-rotate');
        childNav.classList.add('active')
    };

    return (
        <aside className={`sidebar__ ${!expanded ? 'sidebar__--closed' : ''}`} onClick={({ target }) => handleOutsideClick(target)}>
            <div className="sidebar__container">

                <div className="sidebar__nav sidebar__nav--account">
                    <div className="sidebar__nav__item d-flex align-items-center">
                        <img src={profilepic} className="sidebar__porfile-pic mr-2 shadow" alt="" />
                        Mi cuenta
                    </div>
                </div>

                {items.map((item, i) =>
                    <div className="sidebar__nav" key={`navs-${i}`}>
                        <div className="sidebar__nav__item d-flex align-items-center justify-content-between">
                            {item.departamento}
                            <button onClick={({ target }) => handleNav(target)} className={`chevron ${i === 0 ? 'chevron-rotate' : ''}`}>
                                <i className="fas fa-chevron-down" />
                            </button>
                        </div>
                        <div className={`sidebar__nav__child ${i === 0 ? 'active' : ''}`}>
                            {item.categorias.map((categoria, c) =>
                                <Link className="" to={`tienda`} key={`nav-child-${c}`}>
                                    {categoria.categoria}
                                </Link>
                            )}
                        </div>
                    </div>
                )}

            </div>
        </aside>
    )
}

export default Sidebar