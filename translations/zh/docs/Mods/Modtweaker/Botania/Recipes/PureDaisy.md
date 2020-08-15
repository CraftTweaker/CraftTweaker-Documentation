# Pure Daisy

PureDaisy 包用于添加或删除配方到Botania Pure Daisy。

## 导入包

您可以使用 `mods.botania.PureDaisy 调用PureDaisy 包`

## 查找所有注册的配方

您可以使用 [`/ct botania daisy`](/Mods/Modtweaker/Botania/Commands/) 找到所有注册的 Pure Daisy 配方。

## 添加配方

默认时间为150个ticks

```zenscript
//mods.botania.PureDaisy.addRecipe(IIngredient blockInput, IItemStack blockOut, @Optional int time);
mods.botania.PureDaisy.addRecipe(<minecraft:dirt>,<minecraft:grass>);
mods.botania.PureDaisy.addRecipe(<minecraft:planks>,<minecraft:grass>, 200);
```

## 删除配方

```zenscript
//mods.botania.PureDaisy.removeRecipe(IIngredient output);
mods.botania.PureDaisy.removeRecipe(<minecraft:obsidian>);
```