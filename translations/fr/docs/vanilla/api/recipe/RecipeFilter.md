# Filtre de recette

Cette classe a été ajoutée par un mod avec le mod-id `crafttweaker`. Vous devez donc avoir ce mod installé si vous voulez utiliser cette fonctionnalité.

## Importation de la classe
Il pourrait vous être nécessaire d'importer le paquet si vous rencontrez des problèmes (comme lancer un tableau), alors mieux être sûr que désolé et ajouter l'importation.
```zenscript
format@@0 crafttweaker.api.recipeFilter
```

## Interface fonctionnelle

Cette classe est une interface fonctionnelle. Cela signifie que vous pouvez utiliser la notation lambda pour créer une instance de celle-ci. La notation lambda ressemble à :
```zenscript
(nom) => false
```
## Méthodes
### test

Type de retour: booléen

```zenscript
myRecipeFilter.test(name as String);
```

| Paramètre | Type de texte        | Libellé                    |
| --------- | -------------------- | -------------------------- |
| Nom       | Chaîne de caractères | Aucune description fournie |



