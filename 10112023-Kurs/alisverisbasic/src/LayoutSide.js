function LayoutSide() {
    return (
        <div class="d-flex flex-column flex-shrink-0 p-3 text-bg-dark border deneme" >
            <a href="/" class="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none">

                <span class="fs-4 fw-bolder">Tüm Kategoriler</span>
            </a>
            <hr />
            <ul class="nav nav-pills flex-column mb-auto">
                <li class="nav-item">
                    <a href="#" class="text-white nav-link " aria-current="page">

                        <i class="fa-solid fa-house"></i>  - Ev Eşyaları
                    </a>
                </li>
              
                <li>
                    <a href="#" class="text-white nav-link ">

                        <i class="fa-solid fa-laptop"></i>  -  Elektronik Eşyalar
                    </a>
                </li>
                <li>
                    <a href="#" class="text-white nav-link ">

                        <i class="fa-solid fa-cat"></i>  -  Evcil Dostlar
                    </a>
                </li>
                <li>
                    <a href="#" class="text-white nav-link ">

                        <i class="fa-solid fa-seedling"></i> - Bahçe Ürünleri
                    </a>
                </li>
                <li>
                    <a href="#" class="text-white nav-link ">

                        <i class="fa-solid fa-wrench"></i> - Nalbur Malzemeleri
                    </a>
                </li>
            </ul>
            <hr />
            <div class="dropdown">
                <a href="#" class="d-flex align-items-center text-white text-decoration-none dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                    <img src="https://media.licdn.com/dms/image/C4E03AQEpHtI3Z6YcRA/profile-displayphoto-shrink_800_800/0/1598915463052?e=1704931200&v=beta&t=zHF-p7dJw0afnoM8LBQIgcgLzwiBCPJULfnuQ6sQLQ8" alt="" width="32" height="32" class="rounded-circle me-2" />
                    <strong>Profil</strong>
                </a>
                <ul class="dropdown-menu dropdown-menu-dark text-small shadow">
                    <li><a class="dropdown-item" href="#"> <i class="fa-solid fa-circle-user"></i> Hesabım</a></li>
                    <li><a class="dropdown-item" href="#"> <i class="fa-solid fa-gears"></i> Ayarlar</a></li>
                    <li><a class="dropdown-item" href="#"> <i class="fa-solid fa-parachute-box"></i> Siparişlerim</a></li>
                    <li><hr class="dropdown-divider" /></li>
                    <li><a class="dropdown-item" href="#"> <i class="fa-solid fa-right-from-bracket"></i> Çıkış Yap</a></li>
                </ul>
            </div>
        </div>
    );
}

export default LayoutSide;