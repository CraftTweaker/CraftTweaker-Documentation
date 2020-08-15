# Feu de camp



Cette classe a été ajoutée par un mod avec le mod-id `crafttweaker`. Vous devez donc avoir ce mod installé si vous voulez utiliser cette fonctionnalité.

## Importation de la classe
Il pourrait vous être nécessaire d'importer le paquet si vous rencontrez des problèmes (comme lancer un tableau), alors mieux être sûr que désolé et ajouter l'importation.
```zenscript
crafttweaker.api.CampFireManager
```

## Interfaces implémentées
CampFireManager implémente les interfaces suivantes. Cela signifie que toutes les méthodes disponibles peuvent également être utilisées dans cette classe.
- [crafttweaker.api.registries.ICookingRecipeManager](/vanilla/api/managers/ICookingRecipeManager)

## Méthodes
### Ajouter une recette

Ajoute une recette basée sur des paramètres donnés.

```zenscript
campfire.addRecipe(name as String, output as crafttweaker.api.item.IItemStack, input as crafttweaker.api.item.IIngredient, xp as float, cookTime as int);
campfire.addRecipe("wool2diamond", <item:diamond>, <tag:minecraft:wool>, 1.0, 0);
```

| Paramètre        | Type de texte                                                               | Libellé                             |
| ---------------- | --------------------------------------------------------------------------- | ----------------------------------- |
| Nom              | Chaîne de caractères                                                        | Nom de la nouvelle recette          |
| Sortie           | [crafttweaker.api.item.IItemStack](/vanilla/api/items/IItemStack)           | IItemStack sortie de la recette     |
| input            | [format@@0 crafttweaker.api.item.Igredient](/vanilla/api/items/IIngredient) | Ingrédient de la recette            |
| xp               | flottant                                                                    | combien de xp le joueur obtient     |
| temps de cuisson | Indice                                                                      | combien de temps il faut pour cuire |


### Supprimer la recette

Supprime une recette en fonction de sa sortie et de son entrée.

```zenscript
campfire.removeRecipe(affiche comme crafttweaker.api.item.IItemStack, entrée comme crafttweaker.api.item.IIngredient);
campfire.removeRecipe(<item:minecraft:diamond>, <tag:minecraft:wool>);
```

| Paramètre | Type de texte                                                               | Libellé                               |
| --------- | --------------------------------------------------------------------------- | ------------------------------------- |
| Sortie    | [crafttweaker.api.item.IItemStack](/vanilla/api/items/IItemStack)           | IItemStack sortie de la recette.      |
| input     | [format@@0 crafttweaker.api.item.Igredient](/vanilla/api/items/IIngredient) | Ingrédient de la recette à supprimer. |



