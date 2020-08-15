# 食器洗い機

食器洗い機で汚れた道具をきれいにすることができます。

デフォルトでは、バニラツールと武器の耐久性のみを修理します。

## 削除中

## 一致する洗濯可能な項目を削除します。

```zenscript
mods.cfm.Dishwasher.remove(@Optional final IIngredient item);

mods.cfm.Dishwasher.remove(<minecraft:flint_and_steel>);
// すべての洗えるアイテムを削除します。
mods.cfm.Dishwasher.remove();
```

## 追加中

## 洗えるアイテムを追加します。

```zenscript
mods.cfm.Dishwasher.add(@Nonnull final IItemStack item);

mods.cfm.Dishwasher.add(<minecraft:wooden_shovel>);
mods.cfm.Dishwasher.add(<minecraft:stone_shovel>);
mods.cfm.Dishwasher.add(<minecraft:iron_shovel>);
mods.cfm.Dishwasher.add(<minecraft:diamond_shovel>);
mods.cfm.Dishwasher.add(<minecraft:shield>);
mods.cfm.Dishwasher.add(<minecraft:bow>);
```