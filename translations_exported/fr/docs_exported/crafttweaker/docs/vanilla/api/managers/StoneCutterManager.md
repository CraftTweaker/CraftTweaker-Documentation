# Gestionnaire de tailleurs de pierre



Cette classe a été ajoutée par un mod avec le mod-id `crafttweaker`. Vous devez donc avoir ce mod installé si vous voulez utiliser cette fonctionnalité.

## Importation de la classe
Il pourrait vous être nécessaire d'importer le paquet si vous rencontrez des problèmes (comme lancer un tableau), alors mieux être sûr que désolé et ajouter l'importation.
```zenscript
crafttweaker.api.StoneCutterManager
```

## Interfaces implémentées
StoneCutterManager implémente les interfaces suivantes. Cela signifie que toutes les méthodes disponibles peuvent également être utilisées dans cette classe.
- [crafttweaker.api.brackets.CommandStringDisplayable](/vanilla/api/brackets/CommandStringDisplayable)
- [crafttweaker.api.registries.IRecipeManager](/vanilla/api/managers/IRecipeManager)

## Méthodes
### addJSONRecipe

Ajoute une recette basée sur un IData fourni. L'IData fourni doit représenter un JSON DataPack, ce qui vous permet d'enregistrer des recettes pour tous les systèmes de DataPack prenant en charge IRecipeType.

```zenscript
stoneCutter.addJSONRecipe(name as String, data as crafttweaker.api.data.IData);
stoneCutter.addJSONRecipe("recipe_name", {ingredient:{item:<item:minecraft:gold_ore>.registryName},result:<item:minecraft:cooked_porkchop>.registryName,experience:0.35 as float, cookingtime:100});
```

| Paramètre | Type de texte                                          | Libellé                              |
| --------- | ------------------------------------------------------ | ------------------------------------ |
| Nom       | Chaîne de caractères                                   | nom de la recette                    |
| données   | [crafttweaker.api.data.IData](/vanilla/api/data/IData) | données représentant le fichier json |


### Ajouter une recette

Ajoute une recette au tailleur de pierre

```zenscript
stoneCutter.addRecipe(recipeName as String, output as crafttweaker.api.item.IItemStack, input as crafttweaker.api.item.IIngredient);
stoneCutter.addRecipe("recipe_name", <item:minecraft:grass>, <tag:minecraft:wool>);
```

| Paramètre         | Type de texte                                                               | Libellé                                                                    |
| ----------------- | --------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| Nom de la recette | Chaîne de caractères                                                        | nom de la recette                                                          |
| Sortie            | [crafttweaker.api.item.IItemStack](/vanilla/api/items/IItemStack)           | output [crafttweaker.api.item.IItemStack](/vanilla/api/items/IItemStack)   |
| input             | [format@@0 crafttweaker.api.item.Igredient](/vanilla/api/items/IIngredient) | entrée [crafttweaker.api.item.IIngredient](/vanilla/api/items/IIngredient) |


### getRecipeByName

Type de retour : [crafttweaker.api.recipes.WrapperRecipe](/crafttweaker/api/recipes/WrapperRecipe)

```zenscript
stoneCutter.getRecipeByName(name as String);
```

| Paramètre | Type de texte        | Libellé                    |
| --------- | -------------------- | -------------------------- |
| Nom       | Chaîne de caractères | Aucune description fournie |


### Obtenir des recettes par sortie

Type de retour : Liste&lt;[crafttweaker.api.recipes.WrapperRecipe](/crafttweaker/api/recipes/WrapperRecipe)&gt;

```zenscript
stoneCutter.getRecipesByOutput(affiche comme crafttweaker.api.item.IIngredient);
```

| Paramètre | Type de texte                                                               | Libellé                    |
| --------- | --------------------------------------------------------------------------- | -------------------------- |
| Sortie    | [format@@0 crafttweaker.api.item.Igredient](/vanilla/api/items/IIngredient) | Aucune description fournie |


### Retirer tout

Supprimer toutes les recettes de ce registre.

```zenscript
stoneCutter.removeAll();
```

### Retirer par Modid

Supprimer la recette basée sur la modification du nom du Registre.

```zenscript
stoneCutter.removeByModid(modifiez comme String);
stoneCutter.removeByModid("minecraft");
```

| Paramètre | Type de texte        | Libellé                           |
| --------- | -------------------- | --------------------------------- |
| modifier  | Chaîne de caractères | modifier les recettes à supprimer |



Supprimer la recette basée sur le nom du Registre modifié avec une vérification d'exclusion ajoutée, de sorte que vous pouvez supprimer l'ensemble du mod en plus de quelques spécifiés.

```zenscript
stoneCutter.removeByModid(modid as String, exclude as crafttweaker.api.recipe.RecipeFilter);
stoneCutter.removeByModid("minecraft", (name as string) => {return name == "orange_wool";});
```

| Paramètre | Type de texte                                                               | Libellé                                  |
| --------- | --------------------------------------------------------------------------- | ---------------------------------------- |
| modifier  | Chaîne de caractères                                                        | modifier les recettes à supprimer        |
| exclure   | [format@@0 crafttweaker.api.recipeFilter](/vanilla/api/recipe/RecipeFilter) | des recettes pour ne plus être enlevées. |


### removeByName

Supprimer la recette basée sur le nom du Registre.

```zenscript
stoneCutter.removeByName(name as String);
stoneCutter.removeByName("minecraft:furnace");
```

| Paramètre | Type de texte        | Libellé                       |
| --------- | -------------------- | ----------------------------- |
| Nom       | Chaîne de caractères | nom de la recette à supprimer |


### removeByRegex

Supprimer la recette basée sur la regex.

```zenscript
stoneCutter.removeByRegex(regex as String);
stoneCutter.removeByRegex("\\d_\\d");
```

| Paramètre | Type de texte        | Libellé                              |
| --------- | -------------------- | ------------------------------------ |
| regex     | Chaîne de caractères | regex pour faire correspondre contre |


### Supprimer la recette

Supprime une recette en fonction de sa sortie.

```zenscript
stoneCutter.removeRecipe(affiche en tant que crafttweaker.api.item.IItemStack);
stoneCutter.removeRecipe(<item:minecraft:glass>);
```

| Paramètre | Type de texte                                                     | Libellé              |
| --------- | ----------------------------------------------------------------- | -------------------- |
| Sortie    | [crafttweaker.api.item.IItemStack](/vanilla/api/items/IItemStack) | sortie de la recette |



## Propriétés

| Nom                | Type de texte        | A un Getter | A un Setter |
| ------------------ | -------------------- | ----------- | ----------- |
| Chaîne de commande | Chaîne de caractères | vrai        | Faux        |

