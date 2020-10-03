# Macerator

## Package

`import mods.ic2.Macerator;`

## Methods

- **[IItemStack](/Vanilla/Items/IItemStack/) output**
- **[IIngredient](/Vanilla/Variable_Types/IIngredient/) input**

## Addition

```zenscript
mods.ic2.Macerator.addRecipe(IItemStack output, IIngredient input);

mods.ic2.Macerator.addRecipe(<minecraft:diamond_block>, <minecraft:dirt> * 64);
```

## Removal

- If using Ic2 Experimental, to remove a recipe, simply remove the corresponding line in `config/ic2/macerator.ini`
- If using Ic2 Classic, to remove a recipe, simply disable the corresponding recipe in `config/ic2/ic2machineRecipes.json`.