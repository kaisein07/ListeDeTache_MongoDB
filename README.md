# ListeDeTache_MongoDB
# Gestionnaire de Tâches avec Express et MongoDB

## Description

Ce projet est une API REST simple permettant la gestion des tâches à l'aide de Node.js, Express et MongoDB. Elle permet de créer, lire, mettre à jour et supprimer des tâches stockées dans une base de données MongoDB.

## Prérequis

Avant d'exécuter ce projet, assurez-vous d'avoir installé les éléments suivants :

- [Node.js](https://nodejs.org/)
- [MongoDB](https://www.mongodb.com/)

## Installation

1. Clonez ce dépôt :
   ```sh
   git clone https://github.com/votre-repo.git
   ```
2. Accédez au dossier du projet :
   ```sh
   cd votre-repo
   ```
3. Installez les dépendances :
   ```sh
   npm install
   ```

## Configuration de la base de données

Le projet utilise MongoDB Atlas. Modifiez l'URL de connexion dans le fichier principal si nécessaire :

```js
mongoose.connect('mongodb+srv://votre-utilisateur:motdepasse@cluster0.mongodb.net/taskDB')
```

## Utilisation

Lancez le serveur avec la commande suivante :

```sh
node index.js
```

Le serveur démarrera sur `http://localhost:4000`

## Endpoints de l'API

### 1. Créer une tâche

**POST** `/tasks`

- Body : `{ "ninja": "Nom", "tâche": "Description de la tâche" }`

### 2. Lire toutes les tâches

**GET** `/tasks`

### 3. Lire une tâche spécifique

**GET** `/tasks/:id`

### 4. Mettre à jour une tâche

**PUT** `/tasks/:id`

- Body : `{ "ninja": "Nouveau nom", "tâche": "Nouvelle description" }`

### 5. Supprimer une tâche

**DELETE** `/tasks/:id`


