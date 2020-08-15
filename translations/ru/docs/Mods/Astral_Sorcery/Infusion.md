# Рецепты инфузии Звёздного Света

Вы можете добавлять и удалять инфузии крафта.

## Звонок

Вы можете вызвать пакет InfusionRecipe с помощью `mods.astralsorcery.StarlightInfusion`.

## Удаление

Это удалит первую инфузию, которую она обнаружит, что создаёт предоставленный [IItemStack](/Vanilla/Items/IItemStack/) `вывод`.  
Если есть несколько рецептов, возвращающих предоставленный выход, вам нужно вызвать этот метод несколько раз!

```zenscript
//mods.astralsorcery.StarlightInfusion.removeInfusion(IItemStack output);
mods.astralsorcery.StarlightInfusion.removeInfusion(<minecraft:ice>);
```

## Сложение

```zenscript
//mods.astralsorcery.StarlightInfusion.addInfusion(IItemStack input, IItemStack output, boolean consumeMultiple, float consumptionChance, int craftingTickTime);
mods.astralsorcery.StarlightInfusion.addfusion(<astralsorcery:itemjournal>, <minecraft:bow>, false, 0.7, 200);
```