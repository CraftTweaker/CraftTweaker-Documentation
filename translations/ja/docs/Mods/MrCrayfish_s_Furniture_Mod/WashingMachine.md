# 洗濯機

洗濯機は汚れた服をきれいにすることができます。

デフォルトではエリトラを含むバニラアーマーの耐久性を修理します。

## 削除中

## 一致する洗濯可能な項目を削除します。

```zenscript
mods.cfm.WashingMachine.remove(@Optional final IIngredient item);

mods.cfm.WashingMachine.add(<minecraft:elytra>);
mods.cfm.WashingMachine.remove(<minecraft:chainmail_helmet>);
mods.cfm.WashingMachine.remove(<minecraft:chainmail_chestplate>);
mods.cfm.WashingMachine.remove(<minecraft:chainmail_leggings>);
mods.cfm.WashingMachine.remove(<minecraft:chainmail_boots>);
// Remove all washable items.
mods.cfm.WashingMachine.remove();
```

## 追加中

## 洗えるアイテムを追加します。

```zenscript
mods.cfm.WashingMachine.add(@Nonnull final IItemStack item);

mods.cfm.WashingMachine.add(<minecraft:elytra>);
mods.cfm.WashingMachine.add(<minecraft:leather_helmet>);
mods.cfm.WashingMachine.add(<minecraft:leather_chestplate>);
mods.cfm.WashingMachine.add(<minecraft:leather_leggings>);
mods.cfm.WashingMachine.add(<minecraft:leather_boots>);
```