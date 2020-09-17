# Источники тепла

The *heatsources* package is used for adding or removing Heat Sources for certain machines/processes.

**Примечание: Эти функции работают только для предметов, которые имеют форму блока!**

## Звонок

Вы можете вызвать пакет с *горячими источниками* с помощью `mods.skyresources.heatsources.`

## Добавление источника тепла

```zenscript
//mods.skyresources.heatsources.add(IItemStack, int heatValue);
mods.skyresources.heatsources.add(<minecraft:ice>, 3);
```

## Удаление источника тепла

```zenscript
//mods.skyresources.heatsources.remove(IItemStack);
mods.skyresources.heatsources.remove(<minecraft:obsidian>);
```