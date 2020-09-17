# Сушка

The `Drying` package allows you to add or remove Drying recipes.

## Звонок

Вы можете вызвать пакет сушек, используя `mods.tconstruct.Drying`

## Добавление

Время в тактах

```zenscript
//mods.tconstruct.Drying.addRecipe(IItemStack, IIngredient input, int time);
mods.tconstruct.Drying.addRecipe(<minecraft:leather>,<minecraft:rotten_flesh>, 100);
```

## Удаление

```zenscript
//mods.tconstruct.Drying.removeRecipe(IItemStack output);
mods.tconstruct.Drying.removeRecipe(<minecraft:leather>);

//mods.tconstruct.Drying.removeRecipe(IItemStack output, IItemStack input);
mods.tconstruct.Drying.removeRecipe(<minecraft:leather>, <minecraft:rotten_flesh>);
```