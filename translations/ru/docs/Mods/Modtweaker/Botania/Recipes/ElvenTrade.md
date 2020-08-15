# Элитный трейдинг

Пакет ElvenTrade используется для добавления или удаления рецептов из Портала Ботания в Альфхайм.

## Звонок

Вы можете позвонить в ElvenTrade с помощью `mods.botania.ElvenTrade`

## Найти все зарегистрированные Рецепты

Вы можете найти все зарегистрированные рецепты ElvenTrade используя [`/ct botania trades`](/Mods/Modtweaker/Botania/Commands/).

## Добавление рецепта

```zenscript
//mods.botania.ElvenTrade.addRecipe(IIngredient[] вывод, IIngredient[] ввод);
mods.botania.ElvenTrade.addRecipe([<minecraft:iron_ingot>], [<minecraft:dirt>,<minecraft:grass>]);
```

## Удаление рецепта

```zenscript
//mods.botania.ElvenTrade.removeRecipe(IIngredient output);
mods.botania.ElvenTrade.removeRecipe(<Botania:dreamwood>);
```