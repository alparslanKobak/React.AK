function OzNavbar(props) {
    return (

        <nav class="navbar navbar-expand-lg bg-dark oznavbar border border-secondary-subtle" data-bs-theme="dark">
            <div class="container-fluid">
                <a class="navbar-brand" href="#">
                    <img src={props.siteLogoUrl} alt="Logo" width="50" height="50" class="d-inline-block align-text-top rounded-2  ms-4 " />

                </a>
                <a class="navbar-brand fw-bold" href="#">A M A Z O N</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse ms-5" id="navbarSupportedContent">
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                        <li class="nav-item">
                            <a class="nav-link active" aria-current="page" href="#"> <i class="fa-solid fa-house"></i> Anasayfa</a>
                        </li>
                        <li class="nav-item ms-4">
                            <a class="nav-link" href="#">  <i class="fa-solid fa-table-list"></i>  Kategoriler</a>
                        </li>
                        <li class="nav-item ms-4">
                            <a class="nav-link" href="#">  <i class="fa-solid fa-hand-holding-dollar fa-beat-fade"></i> En Çok Satanlar</a>
                        </li>
                        <li class="nav-item ms-4">
                            <a class="nav-link" href="#"> <i class="fa-solid fa-face-grin-hearts fa-beat-fade"></i> En Sevilenler</a>
                        </li>
                        <li class="nav-item ms-4">
                            <a class="nav-link" href="#"> <i class="fa-solid fa-percent fa-beat-fade"></i> İndirimli Ürünler</a>
                        </li>
                        

                        <li class="nav-item ms-4">
                            <a class="nav-link" href="#"> <i class="fa-solid fa-gifts fa-beat-fade"></i> {props.fonksiyon()}</a>
                        </li>


                    </ul>
                    <form class="d-flex" role="search">
                        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                        <button class="btn btn-outline-warning" type="submit">Search</button>
                    </form>
                </div>
            </div>
        </nav>
    );
}

export default OzNavbar;