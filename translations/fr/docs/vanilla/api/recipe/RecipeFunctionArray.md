# Tableau de fonction de recette

Cette classe a été ajoutée par un mod avec le mod-id `crafttweaker`. Vous devez donc avoir ce mod installé si vous voulez utiliser cette fonctionnalité.

## Importation de la classe
Il pourrait vous être nécessaire d'importer le paquet si vous rencontrez des problèmes (comme lancer un tableau), alors mieux être sûr que désolé et ajouter l'importation.
```zenscript
crafttweaker.api.recipe.Tableau de fonction de recette
```

## Interface fonctionnelle

Cette classe est une interface fonctionnelle. Cela signifie que vous pouvez utiliser la notation lambda pour créer une instance de celle-ci. La notation lambda ressemble à :
```zenscript
(habituellement) => <item:minecraft:dirt>
```
## Méthodes
### Processus

Type de retour : [crafttweaker.api.item.IItemStack](/vanilla/api/items/IItemStack)

```zenscript
myRecipeFunctionArray.process(usualOut as crafttweaker.api.item.IItemStack, entrates as crafttweaker.api.item.IItemStack[]);
```

| Paramètre          | Type de texte                                                       | Libellé                    |
| ------------------ | ------------------------------------------------------------------- | -------------------------- |
| format@@0 usualOut | [crafttweaker.api.item.IItemStack](/vanilla/api/items/IItemStack)   | Aucune description fournie |
| inputs             | [crafttweaker.api.item.IItemStack](/vanilla/api/items/IItemStack)[] | Aucune description fournie |



