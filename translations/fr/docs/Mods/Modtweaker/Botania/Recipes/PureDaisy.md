# Pure Daisy

Le paquet PureDaisy est utilisé pour ajouter ou enlever des recettes de/vers la marguerite de la botanique.

## Appel en cours

Vous pouvez appeler le paquet PureDaisy en utilisant `mods.botania.PureDaisy`

## Trouver toutes les recettes enregistrées

Vous pouvez trouver toutes les recettes enregistrées de Marguerite Pure en utilisant [`/ct botania marguerite`](/Mods/Modtweaker/Botania/Commands/).

## Ajout de recette

L'heure par défaut est de 150 ticks

```zenscript
//mods.botania.PureDaisy.addRecipe(IIngredient blockInput, IItemStack blockOutput, @Temps d'int optionnel);
mods.botania.PureDaisy.addRecipe(<minecraft:dirt>,<minecraft:grass>);
mods.botania.PureDaisy.addRecipe(<minecraft:planks>,<minecraft:grass>, 200);
```

## Suppression de la recette

```zenscript
//mods.botania.PureDaisy.removeRecipe(IIngredient output);
mods.botania.PureDaisy.removeRecipe(<minecraft:obsidian>);
```