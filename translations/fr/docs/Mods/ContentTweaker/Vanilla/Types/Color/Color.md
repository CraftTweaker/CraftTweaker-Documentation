# Couleur

Si vous n'êtes pas certain de la façon de créer l'objet de couleur int, vous pouvez utiliser l'objet de couleur à la place.

## Importation du paquet

Il pourrait vous être nécessaire d'importer le paquet si vous rencontrez des problèmes, donc mieux vaut être sûr que désolé et ajouter l'importation.  
`importer mods.contenttweaker.Color;`

## Méthodes statiques

Les méthodes statiques sont appelées sur le nom du paquet et non sur l'objet lui-même.  
Toutes ces méthodes retournent un objet couleur.

| Méthode Zen        | Type de paramètre    |
| ------------------ | -------------------- |
| depuis(couleur)    | Indice               |
| depuisHex(couleur) | chaîne de caractères |

## Méthodes non statiques

Les méthodes non statiques ne sont pas appelées sur le nom du paquet, mais sur l'objet lui-même.

| Méthode Zen   | Type de retour |
| ------------- | -------------- |
| getIntColor() | Indice         |