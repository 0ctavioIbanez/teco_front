

const Main = ({ children, className }) => {
  return (
    <div className="page-inner mt--5">
            <div className={`card bg-light shadow-sm ${className}`}>
                <div className="card-body p-0">
                { children }
                </div>
            </div>
        </div>
  )
}

export default Main