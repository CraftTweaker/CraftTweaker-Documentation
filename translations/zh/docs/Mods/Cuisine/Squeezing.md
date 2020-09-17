# 流域挤压中

## 加

```zenscript
导入mods.cuisine.BasinSpeez;

BasinSqueezing.add(IIngredient input, ILiquidStack output, @Optional IItemStack extrexput);

BasinSqueezing. dd(<item:minecraft:dirt>, <liquid:water> * 1000);
BasinSqueezing.add(<ore:cobblestone> * 2, <liquid:lava> * 1000, <item:minecraft:diamond>);
```

## 移除

```zenscript
导入 mods.cuisine.BasinSqueez;

// 通过输入删除。
BasinSqueezing.remove(IItemStack 输入, ILiquidStack inputFluid);

BasinSqueezing.remove(<item:minecraft:dirt>, <liquid:water> * 1000);

// 通过标识符删除。
BasinSqueezing.remove(String id);

BasinSqueezing.remove("recipe_name");

// 移除所有东西！
a. BasinSqueezing.removeAll();
```