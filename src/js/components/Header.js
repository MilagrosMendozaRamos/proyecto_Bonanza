export default {
    template: `
    <header>
        <nav class="navbar navbar-expand-lg navbar-bonanza">
        <div class="container">
            <a class="logo" href="index.html">
            <img src="img/logo.png" alt="Logo">
            </a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#menu">
            <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" id="menu">
            <ul class="navbar-nav ms-auto">
                <li class="nav-item"><a class="nav-link active" href="index.html">Inicio</a></li>
                <li class="nav-item"><a class="nav-link" href="nosotros.html">Nosotros</a></li>
                <li class="nav-item"><a class="nav-link" href="productos.html">Productos</a></li>
                <li class="nav-item"><a class="nav-link" href="contacto.html">Contacto</a></li>
                <li class="nav-item">
                <a class="btn btn-outline-light" href="carrito.html">
                    <i class="bi bi-cart-fill"></i> Carrito
                    <span id="contador-carrito" class="badge bg-danger">0</span>
                </a>
                </li>
            </ul>
            </div>
        </div>
        </nav>
    </header>
    `
};