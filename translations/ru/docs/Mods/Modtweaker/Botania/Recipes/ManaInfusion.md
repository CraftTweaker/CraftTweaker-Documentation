# Mana Infusion

Пакет ManaInfusion используется для добавления или удаления рецептов из Ботанического ManaPool.

## Звонок

Вы можете вызвать пакет ManaInfusion используя `mods.botania.ManaInfusion`

## Найти все зарегистрированные Рецепты

Все зарегистрированные рецепты ManaInfusion можно найти в [`/ct infusions`](/Mods/Modtweaker/Botania/Commands/).

## Добавление рецепта

```zenscript
//mods.botania.ManaInfusion.addInfusion(IItemStack output, IIngredient input, int mana);
mods.botania.ManaInfusion.addInfusion(<minecraft:grass>, <ore:stone>, 1000);

//mods.botania.ManaInfusion.addAlchemy(IItemStack output, IIngredient input, int mana);
otania.ManaInfusion.addAlchemy(<minecraft:gold_ore>, <ore:stone>, 5000);

//mods.botania.ManaInfusion.addConjuration(IItemStack output, IIngredient input, int man);
mods.botania.ManaInfusion.addConjuration(<minecraft:stone>, <minecraft:stone>, 1000);
```

## Удаление рецепта

```zenscript
//mods.botania.ManaInfusion.removeRecipe(IIngredient output);
mods.botania.ManaInfusion.removeRecipe(<minecraft:leather>);
mods.botania.ManaInfusion.removeRecipe(<minecraft:redstone> * 2);
```