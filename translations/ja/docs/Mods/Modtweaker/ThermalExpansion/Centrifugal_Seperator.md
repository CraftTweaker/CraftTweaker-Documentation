# 遠心分離器

## パッケージ

`mods.thermalexpansion.Centrifuge`

## 加算

```zenscript
//mods.thermalexpansion.Centrifuge.addRecipe(WeightedItemStack[] outputs, IItemStack input, ILiquidStack fluid, int energy);
mods.thermalexpansion.Centrifuge.addRecipe([(<minecraft:gold_ingot> * 5) % 10, <minecraft:iron_ingot> % 50], <minecraft:gold_ore>, <liquid:lava>, 2000);

```

## Mob の追加

`fluid` can be null, in which case the default Thermal Expansion experience liquid will be used, the amount calculated from the `xp` field using the default `XP_TO_MB` constant from Thermal Expansion. カスタム液体を使用する場合、 `xp` フィールドは無視されます。

**カスタム流体がありません**:

```zenscript
//mods.thermalexpansion.Centrifuge.addRecipeMob(IEntityDefinition entity, WeightedItemStack[] outputs, @Nullable ILiquidStack fluid, int en, int xp);
mods.thermalexpansion.Centrifuge.addRecipeMob(<entity:minecraft:slime>, [<minecraft:clay_ball>%50, <minecraft:ghast_tear>%10], null, 2000, 5);
```

**カスタム流体**:

```zenscript
mods.thermalexpansion.Centrifuge.addRecipeMob(<entity:minecraft:slime>, [<minecraft:gunpowder>%100], <liquid:lava>*20, 2000, 0);
```

## 削除

```zenscript
//mods.thermalexpansion.Centrifuge.removeRecipe(IItemStack input);
mods.thermalexpansion.Centrifuge.removeRecipe(<minecraft:gold_ore>);
```

## Mob の削除

```zenscript
//mods.thermalexpansion.Centrifuge.removeRecipeMob(IEntityDefinition entity);
mods.thermalexpansion.Centrifuge.removeRecipeMob(<entity:minecraft:slime>);
```