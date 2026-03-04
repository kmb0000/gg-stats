# 📘 League of Legends – Profile Tracker

Un mini projet personnel conçu pour explorer l'**API Riot Games**.

---

## 🎯 Objectifs du projet

- **Consommation d'API Tierce :** Intégration directe avec les endpoints de Riot Games.
- **Architecture :** Organisation du code par domaines (`domain / hooks / components`).
- **Data Crunching :** Manipulation, agrégation et formatage de données brutes (match history, stats).
- **SASS (SCSS Modules) :** Stylisation isolée et maintenable.
- **TypeScript :** Définition d'interfaces strictes pour les réponses API.

---

## 🚀 Stack Technique

- **Frontend :** React, TypeScript
- **Styling :** SCSS Modules (SASS)
- **API :** Riot Games API (Endpoints: Match-V5, Summoner-V4, League-V4)

---

## 📊 Fonctionnalités

### ✅ Profil Joueur

- Recherche via **Riot Account** (gameName + tagLine).
- Affichage complet : Niveau, icône d'invocateur, rang (Tier/Division) et LP.
- Mapping des données API vers un modèle interne optimisé pour l'UI.

### ✅ Statistiques Agrégées (5 dernières games)

- Calcul du **KDA moyen**.
- Calcul du score de farm (**CS/min**).
- Calcul du **Winrate** global sur la période.
- Visualisation via des barres de progression dynamiques.

### ✅ Historique des Parties

- Détails par match : Champion, niveau, résultat (Victoire/Défaite).
- Stats de combat : K / D / A et KDA calculé.
- Économie : CS total et inventaire d'items.
- Infos temporelles : Durée de la partie.

---

## ⚠️ Limites & Contraintes

Ce projet utilise une **clé API de développement** Riot Games. En conséquence :

- Le **Rate Limit** est restreint (limitant le nombre de requêtes simultanées).
- L'accès est limité à certains endpoints spécifiques.
- Certaines données avancées (Masteries détaillées, Analytics serveurs) ne sont pas incluses pour simplifier l'implémentation.

---

## 📁 Architecture du Projet

```text
src/
├── components/   # Composants UI réutilisables
├── domain/       # Logique métier et interfaces (match, profile)
├── hooks/        # Hooks personnalisés (ex: useProfile)
├── services/     # Appels API et configuration
├── styles/       # Fichiers SCSS globaux et variables
└── main.tsx      # Point d'entrée
```
