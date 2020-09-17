# Электролизер

# Пакет
```zenscript
`mods.alchemistry.Электролизер
```

## Методы
- **[ILiquidStack](/Vanilla/Liquids/ILiquidStack/) ввод** - жидкий ввод рецепта.
- **[IItemStack](/Vanilla/Items/IItemStack/) input** - Ввод электролита рецепта.
- **int electrolyteConsumpChance** - Шанс на потребляемую электролию
- **[IItemStack](/Vanilla/Items/IItemStack/) output** - Вывод для рецепта

## Сложение
```zenscript
mods.alchemistry.Electrolyzer.addRecipe(ILiquidStack input, IItemStack input, int electrolyteConsumptionChance, IItemStack, IItemStack output2, @Nullable IItemStack output3, @Nullable int output3Chance, @Nullable IItemStack output4, @Nullable int output4Chance);
mods.alchemistry.Электролизер.addRecipe(<liquid:water>*400,<minecraft:stone>,10,<minecraft:ender_pearl>*2,<minecraft:sand>,null,0,null,0);
```

## Удаление
```zenscript
mods.alchemistry.Электролизер.removeRecipe(ILiquidStack input, IItemStack);
mods.alchemistry.Электролизер.removeRecipe(<liquid:water>*125,<alchemistry:compound:13>);

мод.алхимия.Электролизер.removeAllRecipes();
```
