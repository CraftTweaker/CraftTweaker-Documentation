# 洗衣机

洗衣机允许你清理脏衣服。

默认修复包括Elytra在内的香草装甲的耐久性。

## 移除配方

## 删除匹配的可浪费物品。

```zenscript
mods.cfm.Washington Machine.remove(@Optional final IIngredient items);

mods.cfm.Washington Machine.add(<minecraft:elytra>);
mods.cfm.Washington, Machine.remove(<minecraft:chainmail_helmet>);
mods. fm.Washington, Machine.remove(<minecraft:chainmail_chestplate>);
mods.cfm.Washington, Machine.remove(<minecraft:chainmail_leggings>);
mods.cfm.Washington, Machine.remove(<minecraft:chainmail_boots>);
// 移除所有可浪费项目。
mods.cfm.Washington Machine.remove();
```

## 添加

## 添加一个可浪费的物品。

```zenscript
mods.cfm.Washington Machine.add(@Nonnull final IItemStack item);

mods.cfm.Washington Machine.add(<minecraft:elytra>);
mods.cfm.Washington Machine.add(<minecraft:leather_helmet>);
mods.cfm.Washington Machine.add(<minecraft:leather_chestplate>);
mods.cfm.Washington Machine.add(<minecraft:leather_leggings>);
mods.cfm.Washington Machine.add(<minecraft:leather_boots>);
```