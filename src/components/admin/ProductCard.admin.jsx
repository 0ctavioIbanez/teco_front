
const ProductCard = () => {
    return (
        <div className="card shadow card-profile col-4 px-0">

            <img className="card-img-top" src="https://www.mountainwilderness.org/wp-content/uploads/2021/10/Cortina_1-643x395.jpg" alt="Card image cap" />

            <div className="card-body pt-3">
                <div className="user-profile text-center">
                    <div className="name">Malla microfibra</div>
                    <div className="job">6008</div>
                    <div className="desc">Malla semiopaca</div>
                    <div className="view-profile">
                        <a href="#" className="btn btn-secondary btn-block">Ver más detalles</a>
                    </div>
                </div>
            </div>
            <div className="card-footer">
                <div className="row user-stats text-center">
                    <div className="col">
                        <div className="number">$125.00</div>
                        <div className="title">Precio</div>
                    </div>
                    <div className="col">
                        <div className="number">25</div>
                        <div className="title">Stock</div>
                    </div>
                    <div className="col">
                        <div className="number">134</div>
                        <div className="title">Following</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductCard