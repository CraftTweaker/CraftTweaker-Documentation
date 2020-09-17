# Кузница Тартара

## Пакет

`mods.bloodmagic.TartaricForge`

## Сложение

```zenscript
Входы имеют максимальный размер 4
//mods.bloodmagic.TartaricForge.addRecipe(выход IItemStack, IItemStack[] входов, двойные минуты души, дренаж души);
модов. loodmagic.TartaricForge.addRecipe(<minecraft:diamond>,[<minecraft:dirt>, <minecraft:dirt>, <minecraft:dirt>, <minecraft:dirt>], 10,10);
```

## Удаление

```zenscript
входы имеют максимальный размер 4
//mods.bloodmagic.TartaricForge.removeRecipe(IItemStack[] входов);
mods.bloodmagic.TartaricForge.removeRecipe([<minecraft:ghast_tear>,<minecraft:feather>, <minecraft:feather>]);
```