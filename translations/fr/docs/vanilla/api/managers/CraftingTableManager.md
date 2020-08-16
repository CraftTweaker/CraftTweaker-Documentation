# Gestionnaire de tableaux d'artisanat



Cette classe a été ajoutée par un mod avec le mod-id `crafttweaker`. Vous devez donc avoir ce mod installé si vous voulez utiliser cette fonctionnalité.

## Importation de la classe
Il pourrait vous être nécessaire d'importer le paquet si vous rencontrez des problèmes (comme lancer un tableau), alors mieux être sûr que désolé et ajouter l'importation.
```zenscript
crafttweaker.api.CraftingTableManager
```

## Interfaces implémentées
CraftingTableManager implémente les interfaces suivantes. Cela signifie que toutes les méthodes disponibles peuvent également être utilisées dans cette classe.
- [crafttweaker.api.registries.IRecipeManager](/vanilla/api/managers/IRecipeManager)

## Méthodes
### addJSONRecipe

Ajoute une recette basée sur un IData fourni. L'IData fourni doit représenter un JSON DataPack, ce qui vous permet d'enregistrer des recettes pour tous les systèmes de DataPack prenant en charge IRecipeType.

```zenscript
craftingTable.addJSONRecipe(name as String, data as crafttweaker.api.data.IData);
craftingTable.addJSONRecipe("recipe_name", {ingredient:{item:<item:minecraft:gold_ore>.registryName},result:<item:minecraft:cooked_porkchop>.registryName,experience:0.35 as float, cookingtime:100});
```

| Paramètre | Type de texte                                          | Libellé                              |
| --------- | ------------------------------------------------------ | ------------------------------------ |
| Nom       | Chaîne de caractères                                   | nom de la recette                    |
| données   | [crafttweaker.api.data.IData](/vanilla/api/data/IData) | données représentant le fichier json |


### Ajouté à Shaped

Ajoute une recette formée au tableau de fabrication

```zenscript
craftingTable.addShaped(recipeName as String, output as crafttweaker.api.item.IItemStack, ingredients as crafttweaker.api.item.IIngredient[][], recipeFunction as com.blamejared.crafttweaker.api.managers.IRecipeManager.RecipeFunctionMatrix);
craftingTable.addShaped("recipe_name", <item:minecraft:dirt>, [[<item:minecraft:diamond>], [<tag:minecraft:wool>]]);
craftingTable. ddShaped("recipe_name", <item:minecraft:dirt>, [[<item:minecraft:diamond>], [<tag:minecraft:wool>]], (usualOut as IItemStack, inputs as IItemStack[][]) => {if(entrées[0][0]. isplayName == "bloc diamant totalement réel" ){return usualOut;}return <item:minecraft:clay>.setDisplayName("Diamond");});
```

| Paramètre           | Type de texte                                                                | Libellé                                                                                                        | Optionnel | Valeur par défaut |
| ------------------- | ---------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | --------- | ----------------- |
| Nom de la recette   | Chaîne de caractères                                                         | nom de la recette à ajouter.                                                                                   | Faux      | null              |
| Sortie              | [crafttweaker.api.item.IItemStack](/vanilla/api/items/IItemStack)            | output IItemStack                                                                                              | Faux      | null              |
| ingrédients         | [crafttweaker.api.item.Igredient](/vanilla/api/items/IIngredient)[][]        | tableau d'un tableau d'IIngrédient pour les entrées                                                            | Faux      | null              |
| Fonction de recette | com.blamejared.crafttweaker.api.managers.IRecipeManager.RecipeFunctionMatrix | com.blamejared.crafttweaker.api.managers.IRecipeManager.RecipeFunctionMatrix pour des conditions plus avancées | vrai      | null              |


### Ajouter ShapedMirrored

Ajoute une recette en forme de miroir à la table d'artisanat

```zenscript
craftingTable.addShapedMirrored(recipeName as String, output as crafttweaker.api.item.IItemStack, ingredients as crafttweaker.api.item.IIngredient[][], recipeFunction as com.blamejared.crafttweaker.api.managers.IRecipeManager.RecipeFunctionMatrix);
craftingTable.addShapedMirrored("Nom_de_la_recette", <item:minecraft:dirt>, [[<item:minecraft:diamond>], [<tag:minecraft:wool>]]);
craftingTable.addShapedMirrored("Nom_de_la_recette", <item:minecraft:dirt>, [[<item:minecraft:diamond>], [<tag:minecraft:wool>]], (usualOut as IItemStack, inputs as IItemStack[][]) => {if(inputs[0][0].displayName == "un bloc de diamants totalement réel" ){return usualOut;}return <item:minecraft:clay>.setDisplayName("Diamant ");});
```

| Paramètre           | Type de texte                                                                | Libellé                                                                                                        | Optionnel | Valeur par défaut |
| ------------------- | ---------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | --------- | ----------------- |
| Nom de la recette   | Chaîne de caractères                                                         | nom de la recette à ajouter.                                                                                   | Faux      | null              |
| Sortie              | [crafttweaker.api.item.IItemStack](/vanilla/api/items/IItemStack)            | output IItemStack                                                                                              | Faux      | null              |
| ingrédients         | [crafttweaker.api.item.Igredient](/vanilla/api/items/IIngredient)[][]        | tableau d'un tableau d'IIngrédient pour les entrées                                                            | Faux      | null              |
| Fonction de recette | com.blamejared.crafttweaker.api.managers.IRecipeManager.RecipeFunctionMatrix | com.blamejared.crafttweaker.api.managers.IRecipeManager.RecipeFunctionMatrix pour des conditions plus avancées | vrai      | null              |


### addShapeless

Ajoute une recette sans forme à la table d'artisanat

```zenscript
craftingTable.addShapeless(recipeName as String, output as crafttweaker.api.item.IItemStack, ingredients as crafttweaker.api.item.IIngredient[], recipeFunction as com.blamejared.crafttweaker.api.managers.IRecipeManager.RecipeFunctionArray);
craftingTable. ddShapeless("Nom_de_la_recette", <item:minecraft:dirt>, [<item:minecraft:diamond>, <tag:minecraft:wool>]);
craftingTable. ddShapeless("Nom_de_la_recette", <item:minecraft:dirt>, [<item:minecraft:diamond>, <tag:minecraft:wool>], (usualOut as IItemStack, inputs as IItemStack[]) => {if(inputs[0]. isplayName == "bloc diamant totalement réel" ){return usualOut;}return <item:minecraft:clay>.setDisplayName("Diamant ");});
```

| Paramètre           | Type de texte                                                               | Libellé                                                                                                                   | Optionnel | Valeur par défaut |
| ------------------- | --------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------- | --------- | ----------------- |
| Nom de la recette   | Chaîne de caractères                                                        | nom de la recette à ajouter.                                                                                              | Faux      | null              |
| Sortie              | [crafttweaker.api.item.IItemStack](/vanilla/api/items/IItemStack)           | output IItemStack                                                                                                         | Faux      | null              |
| ingrédients         | [crafttweaker.api.item.Ingredient](/vanilla/api/items/IIngredient)[]        | tableau d'ingrédients pour les entrées                                                                                    | Faux      | null              |
| Fonction de recette | com.blamejared.crafttweaker.api.managers.IRecipeManager.RecipeFunctionArray | Optionnelle com.blamejared.crafttweaker.api.managers.IRecipeManager.RecipeFunctionArray pour des conditions plus avancées | vrai      | null              |


### Retirer tout

Supprimer toutes les recettes de ce registre.

```zenscript
craftingTable.removeAll();
```

### Retirer par Modid

Supprimer la recette basée sur la modification du nom du Registre

```zenscript
craftingTable.removeByModid(modifier en tant que chaîne);
craftingTable.removeByModid("minecraft");
```

| Paramètre | Type de texte        | Libellé                           |
| --------- | -------------------- | --------------------------------- |
| modifier  | Chaîne de caractères | modifier les recettes à supprimer |


### removeByName

Supprimer la recette basée sur le nom du Registre

```zenscript
craftingTable.removeByName(name as String);
craftingTable.removeByName("minecraft:furnace");
```

| Paramètre | Type de texte        | Libellé                       |
| --------- | -------------------- | ----------------------------- |
| Nom       | Chaîne de caractères | nom de la recette à supprimer |


### removeByRegex

Supprimer la recette basée sur la regex

```zenscript
craftingTable.removeByRegex(regex as String);
craftingTable.removeByRegex("\\d_\\d");
```

| Paramètre | Type de texte        | Libellé                              |
| --------- | -------------------- | ------------------------------------ |
| regex     | Chaîne de caractères | regex pour faire correspondre contre |


### Supprimer la recette

Supprime une recette en fonction de sa sortie.

```zenscript
craftingTable.removeRecipe(affiche en tant que crafttweaker.api.item.IItemStack);
craftingTable.removeRecipe(<item:minecraft:glass>);
```

| Paramètre | Type de texte                                                     | Libellé              |
| --------- | ----------------------------------------------------------------- | -------------------- |
| Sortie    | [crafttweaker.api.item.IItemStack](/vanilla/api/items/IItemStack) | sortie de la recette |



