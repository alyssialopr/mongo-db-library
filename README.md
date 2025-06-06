# MongoDB Library

Une application de gestion de bibliothèque utilisant Node.js, Express et MongoDB.

## Fonctionnalités

- Gestion des livres, clients et bibliothèques
- API RESTful pour créer, lire et supprimer des livres, clients et bibliothèques
- Seed de la base de données avec des données de test

## Installation

1. Clone le dépôt :
   ```sh
   git clone <url-du-repo>
   cd mongo-db-library
   ```

2. Installe les dépendances :
   ```sh
   npm install
   ```

3. Configure les variables d'environnement :
   - Copie `.env.example` en `.env` et adapte les valeurs si besoin.

4. Lance la base de données MongoDB localement ou configure l’URI dans `.env`.

## Utilisation

- Démarrer le serveur :
  ```sh
  npm run dev
  ```
  ou
  ```sh
  npm start
  ```

- Pour remplir la base de données avec les données de test :
  ```sh
  npm run seed
  ```

  - Accède à l’interface web sur [http://localhost:5000](http://localhost:5000) (ou le port défini dans `.env`).
## Structure des dossiers

- `models/` : Schémas Mongoose pour les entités
- `controllers/` : Logique métier pour chaque entité
- `routes/` : Définition des routes Express
- `seed/` : Scripts pour insérer des données de test
- `public/` : Fichiers statiques (HTML, JS, CSS)

## Auteurs
* [Léo RICHE](https://github.com/Leo-Riche)
* [Raphaël CHICHE](https://github.com/Raphael-Chiche)
* [Alyssia LORSOLD PRADON](https://github.com/alyssialopr)
