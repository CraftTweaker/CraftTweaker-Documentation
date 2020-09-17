# 流域投射中

## 加

```zenscript
导入mods.cuisine.BasinThrow;

BasinThrowing.add(IIngredient input, ILiquidStack inputFluid, IItemStack output);

BasinThrowing.add(<ore:cobblestone> * 2, <liquid:lava> * 1000, <item:minecraft:diamond>);
```

## 移除

```zenscript
导入 mods.cuisine.BasinThrow;

// 通过输入删除。
BasinThrowing.remove(IItemStack 输入, ILiquidStack inputFluid);

BasinThrowing.remove(<item:minecraft:dirt>, <liquid:water> * 1000);

// 通过标识符删除。
BasinThrowing.remove(String id);

BasinThrowing.remove("recipe_name");

// 移除所有东西！
a. BasinThrowing.removeAll();
```