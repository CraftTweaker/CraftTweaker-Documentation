# Compressor

## Importing the Package
`mods.techreborn.compressor`

## 添加配方
```zenscript
mods.techreborn.compressor.addRecipe(IItemStack output1, IIngredient input1, int ticktime, int euTick);
```

## 删除配方
```zenscript
mods.techreborn.compressor.removeInputRecipe(IIngredient ingredient);
mods.techreborn.compressor.removeRecipe(IItemStack output);
mods.techreborn.compressor.removeAll();
```