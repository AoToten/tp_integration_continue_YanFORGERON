# YFN CAT APP
## Général
YFN CAT APP est une application web simple qui permet aux utilisateurs de visualiser des images de chats représentant différents codes d'état HTTP. En saisissant un code d'état HTTP, les utilisateurs peuvent récupérer et afficher une image correspondante à partir de l'api http.cat.
## Features
Visualisation des images HTTP Cat : Saisissez un code d'état HTTP pour afficher l'image de chat correspondante.

Conception réactive : L'application est conçue pour fonctionner sur différentes tailles d'écran.

Interface utilisateur interactive : Mises à jour et chargement d'images en temps réel en fonction des entrées de l'utilisateur.

## API externes
API http.cat : Fournit des images correspondant aux codes d'état HTTP.

## Build

```bash
docker build -d yfn-cat-app .
```
```
docker run -d -p 8080:8080 yfn-cat-app
```
## Développement en local
```bash
npm install (node version 20)
npm run dev
```

## Comment tester
```bash
npm run test
```

## CI/CD

La pipeline CI/CD est déclenché par les événements suivants :

- Push: Lorsqu'un développeur pousse du code vers une branche principale (main), une branche de fonctionnalité (feature/\*), ou une branche de release (release/\*).
- Pull Request: Lorsqu'une pull request est ouverte ou mise à jour sur la branche principale ou une branche de release.
- Release: Lorsqu'une nouvelle version est publiée.

Étapes du Pipeline

- Tests: Le code est automatiquement testé pour s'assurer qu'il répond aux normes de qualité définies.
- Construction et Publication: Si les tests réussissent, le code est construit dans une image Docker et publié dans un registre Docker.
- Déploiement: En cas de création d'une release, l'image docker est mise à jour avec une nouvelle version contenant le mot "release" et le tag de la release