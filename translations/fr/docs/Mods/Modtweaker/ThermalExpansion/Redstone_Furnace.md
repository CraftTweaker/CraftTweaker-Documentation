# Four Redstone

## Paquet

`Fournaise RedstoneFurnace`

## Ajouter

```zenscript
//mods.thermalexpansion.RedstoneFurnace.addRecipe(sortie IItemStack, entrée IItemStack, int energy);
mods.thermalexpansion.RedstoneFurnace.addRecipe(<minecraft:gold_ingot>, <minecraft:iron_ingot>, 3600);
```

## Retirer

```zenscript
//mods.thermalexpansion.RedstoneFurnace.removeRecipe(IItemStack input);
mods.thermalexpansion.RedstoneFurnace.removeRecipe(<minecraft:gold_ore>);
```

## Ajout d'Augmentation Pyrolitique

***Notez que l'énergie est multipliée par `1.5`. Si vous spécifiez l'énergie `2000` , la recette coûtera en fait `3000` RF. De même, si vous spécifiez `1500`, cela coûtera `2250` RF.***

Exemple de recette pour transformer le charbon de bois en coke de charbon, produisant 250 mb d'huile de créosote dans le processus.

```zenscript
//mods.thermalexpansion.RedstoneFurnace.addPyrolysisRecipe(IItemStack output, IItemStack input, int energy, int creosote);
mods.thermalexpansion.RedstoneFurnace.addPyrolysisRecipe(<thermalfoundation:material:802>, <minecraft:coal:1>, 2000, 250);
```

## Suppression de l'Augmentation de la Pyrolitique

Supprime la recette pour convertir le charbon en coke de charbon.

```zenscript
//mods.thermalexpansion.RedstoneFurnace.removePyrolysisRecipe(IItemStack input);
mods.thermalexpansion.RedstoneFurnace.removePyrolysisRecipe(<minecraft:coal>);
```