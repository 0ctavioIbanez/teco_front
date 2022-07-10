import { Link } from "react-router-dom"

const Header = ({ title, subtitle, btnTo, btnLabel, customHandler, btnClass }) => {
    return (
        <div className="panel-header bg-primary-gradient">
            <div className="page-inner py-5">
                <div className="d-flex flex-wrap align-items-left align-items-md-center flex-column flex-md-row">
                    <div>
                        <h2 className="text-white pb-2 fw-bold mb-0">{title}</h2>
                        <h5 className="text-white op-8 font-weight-bold mb-2">{subtitle}</h5>
                    </div>

                    {customHandler
                        ? <div className="ml-md-auto py-2 py-md-0">
                            <button className={`btn ${btnClass}`} onClick={e => customHandler(e)}>
                                {btnLabel}
                            </button>
                        </div>
                        : null
                    }


                    {btnTo ?
                        <div className="ml-md-auto py-2 py-md-0">
                            <Link to={btnTo} className={`btn-round btn ${btnClass || 'btn-secondary'}`}>{btnLabel}</Link>
                        </div>
                        : null
                    }
                </div>
            </div>
        </div>
    )
}

export default Header