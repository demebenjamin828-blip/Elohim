// navigation.js - Remplace head.php pour GitHub Pages

document.addEventListener("DOMContentLoaded", function() {
    // 1. Génération du HTML du Popup et de la Nav
    const navHTML = `
    <div id="welcomePopup" style="position:fixed; top:0; left:0; right:0; bottom:0; background:rgba(0,0,0,0.6); display:flex; justify-content:center; align-items:center; z-index:10000;">
        <div class="popup-content" style="background:#fff; padding:30px 40px; border-radius:15px; text-align:center; max-width:400px;">
            <h2 style="color:#007bff; margin-bottom:15px;">Bienvenue sur Appui2026 !</h2>
            <p style="color:#333; margin-bottom:20px;">Votre plateforme de suivi scolaire et de partage de cours à domicile.</p>
            <button id="continueBtn" style="background:#007bff; color:#fff; border:none; padding:10px 20px; border-radius:10px; cursor:pointer; font-weight:bold;">Appuyer pour continuer</button>
        </div>
    </div>

    <nav class="glass-nav">
        <div class="nav-content">
            <a href="index.html" class="logo">✨ Appui<span>2026</span></a>
            <div class="nav-links" id="dynamicLinks">
                </div>
        </div>
    </nav>
    <div class="nav-spacer" style="height: 80px;"></div>
    `;

    // 2. Insertion au début du body
    document.body.insertAdjacentHTML('afterbegin', navHTML);

    // 3. Gestion des liens dynamiques (Session)
    const dynamicLinks = document.getElementById('dynamicLinks');
    const parentId = localStorage.getItem('parent_id');
    const staffId = localStorage.getItem('staff_id');

    if (parentId) {
        dynamicLinks.innerHTML = `
            <a href="espace_parent.html"><i class="fa-solid fa-chart-pie"></i> Notes</a>
            <a href="#" onclick="logout()"><i class="fa-solid fa-power-off"></i></a>
        `;
    } else if (staffId) {
        dynamicLinks.innerHTML = `
            <a href="gestion_global.html"><i class="fa-solid fa-gears"></i> Admin</a>
            <a href="#" onclick="logout()"><i class="fa-solid fa-power-off"></i></a>
        `;
    } else {
        dynamicLinks.innerHTML = `<a href="index.html">Connexion</a>`;
    }

    // 4. Fermeture du popup
    document.getElementById('continueBtn').addEventListener('click', function(){
        document.getElementById('welcomePopup').style.display = 'none';
    });
});

// Fonction de déconnexion globale
function logout() {
    localStorage.clear();
    window.location.href = "index.html";
}
