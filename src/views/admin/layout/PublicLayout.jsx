import { Outlet } from "react-router-dom"

const PublicLayout = () => {
    return (
        <main className="d-flex w-100">
            <div className="container d-flex flex-column">
                <div className="row vh-100">
                    <Outlet />
                </div>
            </div>
        </main>

    )
}

export default PublicLayout