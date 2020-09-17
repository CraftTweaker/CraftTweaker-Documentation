# Substitutions

Le paquet Overrides est utilisé pour ajouter/retirer des recettes de/vers les surcharges de fonte.

## Appel en cours

Vous pouvez appeler le package Overrides en utilisant `mods.tcomplement.Overrides`

## Remplace l'ajout de l'entrée

```zenscript
//mods.tcomplement.Overrides.addRecipe(ILiquidStack sortie, IItemStack input, @Optional int temp);
mods.tcomplement.Overrides.addRecipe(<liquid:gold> * 100, <minecraft:gold_ingot>);
mods.tcomplement.Overrides.addRecipe(<liquid:gold> * 100, <minecraft:gold_ingot>, 1000);
```

## Remplace la suppression de l'entrée

```zenscript
//mods.tcomplement.Overrides.removeRecipe(ILiquidStack sortie, @Optional IItemStack input);
mods.tcomplement.Overrides.removeRecipe(<liquid:gold>);
mods.tcomplement.Overrides.removeRecipe(<liquid:gold>, <minecraft:gold_ore>);
```