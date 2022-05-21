import { Link } from "react-router-dom"

const Header = ({ title, subtitle, btnTo, btnLabel }) => {
    return (
        <div className="panel-header bg-primary-gradient">
            <div className="page-inner py-5">
                <div className="d-flex align-items-left align-items-md-center flex-column flex-md-row">
                    <div>
                        <h2 className="text-white pb-2 fw-bold">{title}</h2>
                        <h5 className="text-white op-7 mb-2">{subtitle}</h5>
                    </div>

                    {btnTo ?
                        <div className="ml-md-auto py-2 py-md-0">
                            {/* <a href="#" className="btn btn-white btn-border btn-round mr-2">Manage</a> */}
                            <Link to={btnTo} className="btn btn-secondary btn-round">{btnLabel}</Link>
                        </div>
                        : null
                    }
                </div>
            </div>
        </div>
    )
}

export default Header