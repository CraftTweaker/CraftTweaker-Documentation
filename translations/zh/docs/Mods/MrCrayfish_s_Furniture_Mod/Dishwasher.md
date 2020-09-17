# 迪什瓦希尔

Dishwasher允许您清理脏工具。

默认修复，只允许原版工具和武器耐久性。

## 移除配方

## 删除匹配的可浪费物品。

```zenscript
mods.cfm.Dishwasher.remove(@Opinion final IIngredient items);

mods.cfm.Dishwasher.remove(<minecraft:flint_and_steel>);
// 移除所有可浪费项目。
mods.cfm.Dishwasher.remove();
```

## 添加

## 添加一个可浪费的物品。

```zenscript
mods.cfm.Dishwasher.add(@Nonnull final IItemStack item);

mods.cfm.Dishwasher.add(<minecraft:wooden_shovel>);
mods.cfm.Dishwasher.add(<minecraft:stone_shovel>);
mods.cfm. ishwasher.add(<minecraft:iron_shovel>);
mods.cfm.Dishwasher.add(<minecraft:diamond_shovel>);
mods.cfm.Dishwasher.add(<minecraft:shield>);
mods.cfm.Dishwasher.add(<minecraft:bow>);
```