# inovation
# Tracker Coupures - Backend API

🇫🇷 **Français** | 🇬🇧 [English](#english)

---

## 🇫🇷 Français

### Description

API REST permettant aux habitants de signaler et suivre les coupures d'électricité par quartier au Cameroun. Ce projet fait partie d'une application plus large incluant carte interactive, comptes utilisateurs, et signalement vocal assisté par IA pour l'accessibilité (personnes âgées).

### Fonctionnalités (Phase 1)

- Créer un signalement de coupure d'électricité
- Lister tous les signalements
- Consulter le détail d'un signalement
- Marquer un signalement comme résolu
- Supprimer un signalement

### Stack technique

- **Runtime** : Node.js
- **Framework** : Express.js
- **Base de données** : MySQL / MariaDB
- **Driver DB** : mysql2

### Structure du projet

```
backend/
├── config/
│   └── db.js             
├── routes/
│   └── signalements.js    
├── sql/
│   └── schema.sql         
├── .env                   
├── package.json           
├── server.js              
└── README.md
```

### Prérequis

- Node.js installé (vérifier avec `node -v`)
- WAMP (ou tout serveur MySQL) démarré
- Un éditeur de code (VS Code recommandé)

### Installation

1. **Cloner ou copier le projet** dans un dossier local

2. **Installer les dépendances** :
```bash
npm install
```

3. **Configurer la base de données** :
   - Ouvrir phpMyAdmin (`http://localhost/phpmyadmin`)
   - Aller dans l'onglet "SQL"
   - Copier-coller le contenu de `sql/schema.sql`
   - Cliquer sur "Exécuter"

4. **Vérifier le fichier `.env`** (adapter si besoin) :
```
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=
DB_NAME=tracker_coupures
PORT=3000
```

5. **Démarrer le serveur** :
```bash
npm start
```

Le serveur tourne sur `http://localhost:3000`

### Routes API

| Méthode | URL | Description | Corps de la requête (body) |
|---|---|---|---|
| GET | `/signalements` | Liste tous les signalements | - |
| GET | `/signalements/:id` | Détail d'un signalement | - |
| POST | `/signalements` | Crée un signalement | `{ quartier, ville, date_debut, description }` |
| PUT | `/signalements/:id` | Marque comme résolu | `{ statut, date_fin }` |
| DELETE | `/signalements/:id` | Supprime un signalement | - |

### Exemples de test

**Créer un signalement** :
```bash
curl -X POST http://localhost:3000/signalements \
  -H "Content-Type: application/json" \
  -d '{"quartier":"Bastos","ville":"Yaoundé","date_debut":"2026-07-27T14:00:00"}'
```

**Lister les signalements** :
```bash
curl http://localhost:3000/signalements
```

### Roadmap du projet complet

1. ✅ Backend + BDD + API
2. Comptes utilisateurs (inscription/connexion)
3. Frontend React (PWA) + signalement
4. Signalement vocal assisté par IA (accessibilité, personnes âgées)
5. Carte interactive (statuts rouge/vert par quartier)
6. Notifications de coupures programmées
7. Historique et tableau de bord
8. Paiement de facture (simulation)
9. Contenu informatif sur ENEO

### Auteur

Projet développé par Fabila, étudiante en informatique (KEYCE) — réseaux, cybersécurité, développement web et IA.

---

## English

### Description

REST API allowing residents to report and track power outages by neighborhood in Cameroon. This project is part of a larger application including an interactive map, user accounts, and AI-assisted voice reporting for accessibility (elderly users).

### Features (Phase 1)

- Create a power outage report
- List all reports
- View details of a specific report
- Mark a report as resolved
- Delete a report

### Tech Stack

- **Runtime**: Node.js
- **Framework**: Express.js
- **Database**: MySQL / MariaDB
- **DB Driver**: mysql2

### Project Structure

```
backend/
├── config/
│   └── db.js             
├── routes/
│   └── signalements.js    
├── sql/
│   └── schema.sql         
├── .env                   
├── package.json           
├── server.js              
└── README.md
```

### Prerequisites

- Node.js installed (check with `node -v`)
- WAMP (or any MySQL server) running
- A code editor (VS Code recommended)

### Installation

1. **Clone or copy the project** into a local folder

2. **Install dependencies**:
```bash
npm install
```

3. **Set up the database**:
   - Open phpMyAdmin (`http://localhost/phpmyadmin`)
   - Go to the "SQL" tab
   - Copy-paste the content of `sql/schema.sql`
   - Click "Go" / "Execute"

4. **Check the `.env` file** (adjust if needed):
```
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=
DB_NAME=tracker_coupures
PORT=3000
```

5. **Start the server**:
```bash
npm start
```

Server runs on `http://localhost:3000`

### API Routes

| Method | URL | Description | Request Body |
|---|---|---|---|
| GET | `/signalements` | List all reports | - |
| GET | `/signalements/:id` | Get report details | - |
| POST | `/signalements` | Create a report | `{ quartier, ville, date_debut, description }` |
| PUT | `/signalements/:id` | Mark as resolved | `{ statut, date_fin }` |
| DELETE | `/signalements/:id` | Delete a report | - |

### Test Examples

**Create a report**:
```bash
curl -X POST http://localhost:3000/signalements \
  -H "Content-Type: application/json" \
  -d '{"quartier":"Bastos","ville":"Yaoundé","date_debut":"2026-07-27T14:00:00"}'
```

**List reports**:
```bash
curl http://localhost:3000/signalements
```

### Full Project Roadmap

1. ✅ Backend + Database + API
2. User accounts (sign up/login)
3. React frontend (PWA) + reporting
4. AI-assisted voice reporting (accessibility, elderly users)
5. Interactive map (red/green status by neighborhood)
6. Scheduled outage notifications
7. History and dashboard
8. Bill payment (simulation)
9. Informational content about ENEO

### Author

Project developed by Fabila, computer science student (KEYCE) — networking, cybersecurity, web development, and AI.
