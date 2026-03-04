document.addEventListener("DOMContentLoaded", function() {
    // 1. Détecter la page actuelle pour le menu "active"
    const currentPage = window.location.pathname.split("/").pop() || "index.html";

    // 2. Récupérer les infos de session simulées
    const parentId = localStorage.getItem('parent_id');
    const staffId = localStorage.getItem('staff_id');
    const nomComplet = localStorage.getItem('parent_nom') || localStorage.getItem('staff_nom');

    // 3. Construire le HTML du Header
    let navLinks = `
        <a href="index.html" class="nav-link ${currentPage === 'index.html' ? 'active' : ''}">
            <i class="fa-solid fa-house"></i> Accueil
        </a>
    `;

    if (parentId) {
        navLinks += `
            <a href="espace_parent.html" class="nav-link ${currentPage === 'espace_parent.html' ? 'active' : ''}">
                <i class="fa-solid fa-user-graduate"></i> Mon Espace
            </a>
            <a href="#" onclick="logout()" class="nav-link logout-link">
                <i class="fa-solid fa-power-off"></i> Déconnexion
            </a>
        `;
    } else if (staffId) {
        navLinks += `
            <a href="gestion_global.html" class="nav-link ${currentPage === 'gestion_global.html' ? 'active' : ''}">
                <i class="fa-solid fa-lock-open"></i> Administration
            </a>
            <a href="#" onclick="logout()" class="nav-link logout-link">
                <i class="fa-solid fa-power-off"></i> Déconnexion
            </a>
        `;
    } else {
        navLinks += `
            <a href="login_choix.html" class="nav-link ${currentPage === 'login_choix.html' ? 'active' : ''}">
                <i class="fa-solid fa-right-to-bracket"></i> Connexion
            </a>
        `;
    }

    let userInfo = nomComplet ? `
        <div class="user-info">
            <i class="fa-solid fa-user-circle"></i> 
            <span>${nomComplet}</span>
        </div>
    ` : '';

    const headerHTML = `
        <header class="main-header">
            <div class="nav-container">
                <div class="logo">
                    <i class="fa-solid fa-cross"></i> ELOHIM <span>Appui</span>
                </div>
                <nav class="nav-menu">
                    ${navLinks}
                </nav>
                ${userInfo}
            </div>
        </header>
        <div class="header-spacer" style="height:80px;"></div>
    `;

    // 4. Injecter le header au début du body
    document.body.insertAdjacentHTML('afterbegin', headerHTML);
});

// Fonction de déconnexion
function logout() {
    localStorage.clear();
    window.location.href = "index.html";
}
