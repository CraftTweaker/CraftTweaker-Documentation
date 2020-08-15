# 离心分离器

## 所属包名

`thermalext.Centriforge`

## 添加配方

```zenscript
//mods.thermalext.Centrifile.addRecipe(WeightedItemStack[…]输出, IItemStack 输入, ILiquidStack fluid, int energy);
mods.thermalextremaxime.addRecipe([(<minecraft:gold_ingot> * 5) % 10, <minecraft:iron_ingot> % 50], <minecraft:gold_ore>, <liquid:lava>, , 2000)；

```

## 生物添加

`液体` 可以为空，在这种情况下将使用默认热扩展体验液体。 从 `xp` 字段使用默认值 `XP_TO_MB` 恒定热扩展。 当使用自定义液体时， `xp` 字段被忽略。

**没有自定义液体**:

```zenscript
//mods.thermalext.Centrifile.addRecipeMob(IEntityDefinition entity, WeightedItemStack[…]输出, @Nullable ILiquidStack fluid, int experty, int xp);
mods.thermalext.Centrifile.addRecipeMob(<entity:minecraft:slime>, [<minecraft:clay_ball>%50, <minecraft:ghast_tear>%10], null, 2000, 5;
```

**自定义液体**:

```zenscript
mods.thermalex.entrifile.addRecipeMob(<entity:minecraft:slime>, [<minecraft:gunpowder>%100], <liquid:lava>*20, 2000, 0);
```

## 移除

```zenscript
//mods.thermalext.Centrifile.removeRecipe(IItemStack 输入);
mods.thermalext.Centrifile.removeRecipe(<minecraft:gold_ore>);
```

## 生物移除

```zenscript
//mods.thermalextremaxim.removeRecipeMob(IentityDefinition entity);
mods.thermalext.Centrifile.removeRecipeMob(<entity:minecraft:slime>);
```