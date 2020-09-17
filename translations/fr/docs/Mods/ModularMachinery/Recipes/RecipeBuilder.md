# Constructeur de recettes

La classe RecipeBuilder n'a qu'un seul objectif : créer un nouvel objet [RecipePrimer](/Mods/ModularMachinery/Recipes/RecipePrimer/) pour vous.

## Appel en cours

Vous pouvez appeler le package Brew en utilisant `mods.modularmachinery.RecipeBuilder`

## Création d'un Schéma Primer.

Ce sont les seules fonctions que l'on trouve dans la classe, elles retournent tous deux un nouvel objet [RecipePrimer](/Mods/ModularMachinery/Recipes/RecipePrimer/).

```zenscript
//mods.modularmachinery.RecipeBuilder.newBuilder(String recipeRegistryName, String associatedMachineRegistryName, int processingTickTime);


//mods.modularmachinery.RecipeBuilder.newBuilder.newBuilder(String recipeRegistryName, String associatedMachineRegistryName, int processingTickTime, int sortingPriority);


```

```zenscript
var item = <item:minecraft:gold_ingot>;
```