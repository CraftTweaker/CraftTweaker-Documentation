# Алтарь Руны

Пакет RuneAltar используется для добавления или удаления рецептов из Алтарии Руны.

## Звонок

Вы можете вызвать пакет RuneAltar, используя `mods.botania.RuneAltar`

## Найти все зарегистрированные Рецепты

Все зарегистрированные рецепты Rune Altar можно найти с помощью [`/ct altar botania`](/Mods/Modtweaker/Botania/Commands/).

## Добавление рецепта

```zenscript
//mods.botania.RuneAltar.addRecipe(IItemStack, IIngredient[] input, int mana);
mods.botania.RuneAltar.addRecipe(<minecraft:planks>,[<minecraft:grass>, <minecraft:dirt>], 200);
```

## Удаление рецепта

```zenscript
//mods.botania.RuneAltar.removeRecipe(IIngredient output);
mods.botania.RuneAltar.removeRecipe(<Botania:rune>);
```