# 手枪

## 所属包名
```zenscript
导入 mods.terrafirmacraft。巴雷尔；
```

## 添加配方
```zenscript
Barrel.addRecipe(String registryName, @Optional IIngredient itemInput, ILiquidStack fluidInput, @Optional IItemStack itemOutput, @Optional ILiquidStack fluidOutput, int 小时)；
```

## 删除配方

```zenscript
Barrel.removeRecipe(@Optional IItemStack outputItem, @Opinion ILiquidStack outputLiquid)
Barrel.removeRecipe(String registryName)
```
- 必须至少提供一个输出(液体或物品)，用于删除和添加配方。