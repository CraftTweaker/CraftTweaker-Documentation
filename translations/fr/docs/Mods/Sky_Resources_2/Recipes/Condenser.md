# Condenseur

Le paquet *condenseur* est utilisé pour ajouter ou supprimer des recettes de/vers le Condenseur.

## Appel en cours

Vous pouvez appeler le paquet *condenseur* en utilisant `mods.skyresources.condensateur`

## Ajout de recette

```zenscript
//mods.skyresources.condenser.addRecipe(sortie IItemStack, int tickTime, IItemStack catalyst, ILiquidStack inputFluid);
mods.skyresources.condenser.addRecipe(<minecraft:obsidian>, 300, <minecraft:ice>, <liquid:lava>);
```

## Suppression de la recette

```zenscript
//mods.skyresources.condenser.removeRecipe(IItemStack output);
mods.skyresources.condenser.removeRecipe(<minecraft:iron_ingot>);
```