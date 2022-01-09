# Compressor

## 所属包
`import mods.ic2.Compressor;`

## 使用方式
- **[IItemStack](/Vanilla/Items/IItemStack/) output**
- **[IIngredient](/Vanilla/Variable_Types/IIngredient/) input**

## 添加配方

```zenscript
mods.ic2.Compressor.addRecipe(IItemStack output, IIngredient input);

mods.ic2.Compressor.addRecipe(<minecraft:diamond_block>, <minecraft:dirt> * 64);
```

## Removal

- If using Ic2 Experimental, to remove a recipe, simply remove the corresponding line in `config/ic2/compressor.ini`
- If using Ic2 Classic, to remove a recipe, simply disable the corresponding recipe in `config/ic2/ic2machineRecipes.json`.