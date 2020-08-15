# Стиральная машина

Стиральная машина позволяет очищать грязную одежду.

По умолчанию ремонт прочности брони ваниль, включая Элитра.

## Удаление

## Удалить подходящие элементы.

```zenscript
mods.cfm.WashingMachine.remove(@Optional final IIngredient);

mods.cfm.WashingMachine.add(<minecraft:elytra>);
mods.cfm.WashingMachine.remove(<minecraft:chainmail_helmet>);
mods. fm.WashingMachine.remove(<minecraft:chainmail_chestplate>);
mods.cfm.WashingMachine.remove(<minecraft:chainmail_leggings>);
mods.cfm.WashingMachine.remove(<minecraft:chainmail_boots>);
// Удаляем все отнимаемые элементы.
mods.cfm.WashingMachine.remove();
```

## Добавление

## Добавить стилизованный элемент.

```zenscript
mods.cfm.WashingMachine.add(@Nonnull final IItemStack);

mods.cfm.WashingMachine.add(<minecraft:elytra>);
mods.cfm.WashingMachine.add(<minecraft:leather_helmet>);
mods.cfm.WashingMachine.add(<minecraft:leather_chestplate>);
mods.cfm.WashingMachine.add(<minecraft:leather_leggings>);
mods.cfm.WashingMachine.add(<minecraft:leather_boots>);
```