<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>ELOHIM APPUI | Excellence Scolaire</title>
    <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;600;800&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
    <style>
        :root { --gold: #facc15; --emerald: #064e3b; --dark: #020617; }
        * { margin:0; padding:0; box-sizing:border-box; font-family:'Plus Jakarta Sans', sans-serif; }
        
        body { 
            background: #020617; color: white; min-height: 100vh;
            display: flex; flex-direction: column; align-items: center; justify-content: center;
            background-image: radial-gradient(circle at 20% 30%, #064e3b 0%, transparent 40%),
                              radial-gradient(circle at 80% 70%, #065f46 0%, transparent 40%);
        }

        .hero { text-align: center; padding: 20px; max-width: 800px; }
        .hero h1 { font-size: 3.5rem; font-weight: 800; line-height: 1; margin-bottom: 20px; }
        .hero h1 span { color: var(--gold); }
        .hero p { color: #94a3b8; font-size: 1.2rem; margin-bottom: 40px; }

        .choice-container { 
            display: grid; grid-template-columns: 1fr 1fr; gap: 25px; width: 100%; max-width: 700px; 
        }

        .card {
            background: rgba(255, 255, 255, 0.03);
            border: 1px solid rgba(255, 255, 255, 0.1);
            padding: 40px 30px;
            border-radius: 24px;
            text-align: center;
            transition: 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
            text-decoration: none;
            color: white;
        }

        .card:hover {
            background: rgba(255, 255, 255, 0.07);
            border-color: var(--gold);
            transform: translateY(-10px);
        }

        .card i { font-size: 3rem; color: var(--gold); margin-bottom: 20px; }
        .card h3 { font-size: 1.5rem; margin-bottom: 10px; }
        .card p { font-size: 0.9rem; color: #94a3b8; }

        @media (max-width: 600px) {
            .choice-container { grid-template-columns: 1fr; padding: 20px; }
            .hero h1 { font-size: 2.5rem; }
        }
    </style>
</head>
<body>

    <div class="hero">
        <h1>ELOHIM <span>APPUI</span></h1>
        <p>Plateforme de suivi scolaire et d'excellence académique.</p>
    </div>

    <div class="choice-container">
        <a href="login_parent.html" class="card">
            <i class="fa-solid fa-house-chimney-user"></i>
            <h3>Espace Parent</h3>
            <p>Suivez les notes et la progression de vos enfants en temps réel.</p>
        </a>

        <a href="login_staff.html" class="card">
            <i class="fa-solid fa-user-tie"></i>
            <h3>Espace Staff</h3>
            <p>Administration, gestion des cours et saisie des notes.</p>
        </a>
    </div>

    <p style="margin-top: 50px; font-size: 0.8rem; color: #475569;">
        © 2026 ELOHIM APPUI - Tous droits réservés.
    </p>

</body>
</html>
