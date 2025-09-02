# 📚 Book & User Management App  

## 📖 Description  
Cette application est une **solution Fullstack** permettant de gérer des **utilisateurs** et des **livres**.  
Elle est composée de :  
- Un **backend** en **Node.js / Express / MongoDB** qui expose une **API REST**  
- Un **frontend** en **React.js** (avec React Router & Axios) pour interagir avec l’API via une interface utilisateur simple et intuitive  

## 🚀 Fonctionnalités  

### 🔑 Côté Utilisateurs  
- Inscription (Sign Up)  
- Connexion (Sign In) avec JWT (stocké en cookie httpOnly)  
- Déconnexion (Logout)  
- Consultation de tous les utilisateurs (sans mot de passe)  
- Consultation du profil utilisateur  

### 📚 Côté Livres  
- Ajouter un livre  
- Consulter la liste des livres  
- Rechercher un livre par titre  
- Modifier un livre  
- Supprimer un livre  
- Supprimer tous les livres  
- Afficher uniquement les livres publiés  

### 🖥️ Frontend (React)  
- Application SPA (Single Page Application) avec **React Router**  
- Consommation de l’API avec **Axios**  
- Formulaire pour l’ajout et la mise à jour de livres  
- Pages : liste des livres, détail d’un livre, ajout d’un livre  
- Authentification avec formulaire de connexion  

## 🛠️ Technologies utilisées  
- **Backend** : Node.js, Express, MongoDB, Mongoose, JWT, bcrypt  
- **Frontend** : React.js, React Router, Axios  
- **Autres** : dotenv, nodemon

1. Clonez le projet et entrez dans le dossier backend :  
```bash
git clone https://github.com/ton-compte/book-user-app.git
cd book-user-app/backend
```

## Project setup
```
npm install
```

## Configurez les variables d’environnement (.env) :
```bash
PORT=5000
MONGO_URI=mongodb://localhost:27017/bookdb
TOKEN_SECRET=tonsecretjwt
```

### Run
```
node server.js
```

2. **Frontend**

### Ouvrez un nouveau terminal et allez dans le dossier frontend :
```
cd ../frontend
```


### Installez les dépendances :
```
npm install
```

### Lancez l’application React :
```
npm start
```

### ▶️ Utilisation  
Accédez à l’interface React sur http://localhost:3000
Vous pouvez :
- Ajouter un livre via le formulaire 
- Modifier ou supprimer un livre existant 
- Consulter la liste des utilisateurs (si connecté) 
- Gérer vos sessions avec Sign In / Sign Up  
 

