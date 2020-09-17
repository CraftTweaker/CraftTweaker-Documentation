# Мебель

Dishwasher позволяет очистить грязные инструменты.

По умолчанию ремонт прочности ванильных инструментов и оружия.

## Удаление

## Удалить подходящие элементы.

```zenscript
mods.cfm.Dishwasher.remove(@Optional final IIngredient item);

mods.cfm.Dishwasher.remove(<minecraft:flint_and_steel>);
// Удаляем все отнимаемые элементы.
mods.cfm.Dishwasher.remove();
```

## Добавление

## Добавить стилизованный элемент.

```zenscript
mods.cfm.Dishwasher.add(@Nonnull final IItemStack);

mods.cfm.Dishwasher.add(<minecraft:wooden_shovel>);
mods.cfm.Dishwasher.add(<minecraft:stone_shovel>);
mods.cfm. ishwasher.add(<minecraft:iron_shovel>);
mods.cfm.Dishwasher.add(<minecraft:diamond_shovel>);
mods.cfm.Dishwasher.add(<minecraft:shield>);
mods.cfm.Dishwasher.add(<minecraft:bow>);
```