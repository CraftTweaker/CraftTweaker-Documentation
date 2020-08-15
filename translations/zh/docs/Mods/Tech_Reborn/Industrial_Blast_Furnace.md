# Industrial Blast Furnace

## Importing the Package
`mods.techreborn.blastFurnace`

## 添加配方
```zenscript
mods.techreborn.blastFurnace.addRecipe(IItemStack output1, IItemStack output2, IIngredient input1, IIngredient input2, int ticktime, int euTick, int neededHeat);
```

## 删除配方
```zenscript
mods.techreborn.blastFurnace.removeInputRecipe(IIngredient ingredient);
mods.techreborn.blastFurnace.removeRecipe(IItemStack output);
mods.techreborn.blastFurnace.removeAll();
```