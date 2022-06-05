

const Main = ({ children }) => {
  return (
    <div className="page-inner mt--5">
            <div className="card bg-light shadow">
                <div className="card-body">
                { children }
                </div>
            </div>
        </div>
  )
}

export default Main