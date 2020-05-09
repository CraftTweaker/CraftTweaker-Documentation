# Compressor

## Package

`import mods.ic2.Compressor;`

## Methods

- **[IItemStack](/Vanilla/Items/IItemStack/) output**
- **[IIngredient](/Vanilla/Variable_Types/IIngredient/) input**

## Addition

```zenscript
mods.ic2.Compressor.addRecipe(IItemStack output, IIngredient input);

mods.ic2.Compressor.addRecipe(<minecraft:diamond_block>, <minecraft:dirt> * 64);
```

## Removal

- If using Ic2 Experimental, to remove a recipe, simply remove the corresponding line in `config/ic2/compressor.ini`
- If using Ic2 Classic, to remove a recipe, simply disable the corresponding recipe in `config/ic2/ic2machineRecipes.json`.