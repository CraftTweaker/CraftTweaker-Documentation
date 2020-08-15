# Industrial Electrolyzer

## Importing the Package
`mods.techreborn.industrialElectrolyzer`

## レシピを追加中
```zenscript
mods.techreborn.industrialElectrolyzer.addRecipe(IItemStack output1, IItemStack output2, IItemStack output3, IItemStack output4, IIngredient cells, IIngredient input2, int ticktime, int euTick);
```

## レシピを削除
```zenscript
mods.techreborn.industrialElectrolyzer.removeInputRecipe(IIngredient ingredient);
mods.techreborn.industrialElectrolyzer.removeRecipe(IItemStack output);
mods.techreborn.industrialElectrolyzer.removeAll();
```