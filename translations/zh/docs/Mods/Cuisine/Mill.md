# 磨机

## 加

```zenscript
导入 mods.cuisine.Mill;

Mill.add(IIngredient input, ILiquidStack inputFluid, IItemStack output, ILiquidStack outputFluid);

Mill. dd(<item:minecraft:dirt> * 2, null, <item:minecraft:diamond>, null);
Mill. dd(<ore:cobblestone> * 4, <liquid:water> * 1000, null, <liquid:lava> * 1000);
```

## 移除

```zenscript
导入 mods.cuisine.Mill；

// 通过输入删除。
Mill.remove(IItemStack input, ILiquidStack inputFluid);
Mill.remove(IOreEntry input, ILiquidStack inputFluid);

Mill.remove(<item:minecraft:dirt> * 2, null);
Mill.remove(<ore:cobblestone> * 4, <liquid:water> * 1000);

// Remove by identifier.
mill.remove(String id);

Mill.remove("recipe_name");

// 移除所有东西！
Mill.removeAll();
```