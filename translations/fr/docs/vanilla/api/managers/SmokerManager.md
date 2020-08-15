# Gestionnaire de fumée



Cette classe a été ajoutée par un mod avec le mod-id `crafttweaker`. Vous devez donc avoir ce mod installé si vous voulez utiliser cette fonctionnalité.

## Importation de la classe
Il pourrait vous être nécessaire d'importer le paquet si vous rencontrez des problèmes (comme lancer un tableau), alors mieux être sûr que désolé et ajouter l'importation.
```zenscript
crafttweaker.api.SmokerManager
```

## Interfaces implémentées
SmokerManager implémente les interfaces suivantes. Cela signifie que toutes les méthodes disponibles peuvent également être utilisées dans cette classe.
- [crafttweaker.api.registries.ICookingRecipeManager](/vanilla/api/managers/ICookingRecipeManager)

## Méthodes
### addJSONRecipe

Ajoute une recette basée sur un IData fourni. L'IData fourni doit représenter un JSON DataPack, ce qui vous permet d'enregistrer des recettes pour tous les systèmes de DataPack prenant en charge IRecipeType.

```zenscript
smoker.addJSONRecipe(name as String, data as crafttweaker.api.data.IData);
smoker.addJSONRecipe("recipe_name", {ingredient:{item:<item:minecraft:gold_ore>.registryName},result:<item:minecraft:cooked_porkchop>.registryName,experience:0.35 as float, cookingtime:100});
```

| Paramètre | Type de texte                                          | Libellé                              |
| --------- | ------------------------------------------------------ | ------------------------------------ |
| Nom       | Chaîne de caractères                                   | nom de la recette                    |
| données   | [crafttweaker.api.data.IData](/vanilla/api/data/IData) | données représentant le fichier json |


### Ajouter une recette

Ajoute une recette basée sur des paramètres donnés.

```zenscript
smoker.addRecipe(name as String, output as crafttweaker.api.item.IItemStack, input as crafttweaker.api.item.IIngredient, xp as float, cookTime as int);
smoker.addRecipe("wool2diamond", <item:diamond>, <tag:minecraft:wool>, 1.0, 0);
```

| Paramètre        | Type de texte                                                               | Libellé                             |
| ---------------- | --------------------------------------------------------------------------- | ----------------------------------- |
| Nom              | Chaîne de caractères                                                        | Nom de la nouvelle recette          |
| Sortie           | [crafttweaker.api.item.IItemStack](/vanilla/api/items/IItemStack)           | IItemStack sortie de la recette     |
| input            | [format@@0 crafttweaker.api.item.Igredient](/vanilla/api/items/IIngredient) | Ingrédient de la recette            |
| xp               | flottant                                                                    | combien de xp le joueur obtient     |
| temps de cuisson | Indice                                                                      | combien de temps il faut pour cuire |


### Retirer tout

Supprimer toutes les recettes de ce registre

```zenscript
fumeur.removeT();
```

### Retirer par Modid

Supprimer la recette basée sur la modification du nom du Registre

```zenscript
smoker.removeByModid(modifiez comme String);
smoker.removeByModid("minecraft");
```

| Paramètre | Type de texte        | Libellé                           |
| --------- | -------------------- | --------------------------------- |
| modifier  | Chaîne de caractères | modifier les recettes à supprimer |


### removeByName

Supprimer la recette basée sur le nom du Registre

```zenscript
smoker.removeByName(name as String);
smoker.removeByName("minecraft:furnace");
```

| Paramètre | Type de texte        | Libellé                       |
| --------- | -------------------- | ----------------------------- |
| Nom       | Chaîne de caractères | nom de la recette à supprimer |


### removeByRegex

Supprimer la recette basée sur la regex

```zenscript
smoker.removeByRegex(regex as String);
smoker.removeByRegex("\\d_\\d");
```

| Paramètre | Type de texte        | Libellé                              |
| --------- | -------------------- | ------------------------------------ |
| regex     | Chaîne de caractères | regex pour faire correspondre contre |


### Supprimer la recette

Supprime une recette en fonction de sa sortie.

```zenscript
smoker.removeRecipe(sortie en tant que crafttweaker.api.item.IItemStack);
smoker.removeRecipe(<item:minecraft:glass>);
```

| Paramètre | Type de texte                                                     | Libellé              |
| --------- | ----------------------------------------------------------------- | -------------------- |
| Sortie    | [crafttweaker.api.item.IItemStack](/vanilla/api/items/IItemStack) | sortie de la recette |



Supprime une recette en fonction de sa sortie et de son entrée.

```zenscript
smoker.removeRecipe(affiche comme crafttweaker.api.item.IItemStack, entrée comme crafttweaker.api.item.IIngredient);
smoker.removeRecipe(<item:minecraft:diamond>, <tag:minecraft:wool>);
```

| Paramètre | Type de texte                                                               | Libellé                               |
| --------- | --------------------------------------------------------------------------- | ------------------------------------- |
| Sortie    | [crafttweaker.api.item.IItemStack](/vanilla/api/items/IItemStack)           | IItemStack sortie de la recette.      |
| input     | [format@@0 crafttweaker.api.item.Igredient](/vanilla/api/items/IIngredient) | Ingrédient de la recette à supprimer. |



