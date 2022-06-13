

const Main = ({ children }) => {
  return (
    <div className="page-inner mt--5">
            <div className="card bg-light shadow-none">
                <div className="card-body p-0">
                { children }
                </div>
            </div>
        </div>
  )
}

export default Main