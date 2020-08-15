# Pure Daisy

Пакет PureDaisy используется для добавления или удаления рецептов Botania Pure Daisy.

## Звонок

Вы можете вызвать пакет PureDaisy, используя `mods.botania.PureDaisy`

## Найти все зарегистрированные Рецепты

Вы можете найти все зарегистрированные рецепты Чистых Романов, используя [`/ct botania daisy`](/Mods/Modtweaker/Botania/Commands/)

## Добавление рецепта

Время по умолчанию до 150 тактов

```zenscript
//mods.botania.PureDaisy.addRecipe(IIngredient blockInput, IItemStack blockOutput, @Optional int time);
mods.botania.PureDaisy.addRecipe(<minecraft:dirt>,<minecraft:grass>);
mods.botania.PureDaisy.addRecipe(<minecraft:planks>,<minecraft:grass>, 200);
```

## Удаление рецепта

```zenscript
//mods.botania.PureDaisy.removeRecipe(IIngredient output);
mods.botania.PureDaisy.removeRecipe(<minecraft:obsidian>);
```