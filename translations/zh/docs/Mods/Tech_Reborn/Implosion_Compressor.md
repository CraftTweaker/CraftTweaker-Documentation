# Implosion Compressor

## Importing the Package
`mods.techreborn.implosionCompressor`

## 添加配方
```zenscript
mods.techreborn.implosionCompressor.addRecipe(IItemStack output1, IItemStack output2, IIngredient input1, IIngredient input2, int ticktime, int euTick);
```

## 删除配方
```zenscript
mods.techreborn.implosionCompressor.removeInputRecipe(IIngredient ingredient);
mods.techreborn.implosionCompressor.removeRecipe(IItemStack output);
mods.techreborn.implosionCompressor.removeAll();
```