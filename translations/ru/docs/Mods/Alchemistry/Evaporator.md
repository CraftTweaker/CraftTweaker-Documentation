# Evaporator

# Пакет
```zenscript
mods.alchemistry.Evaporator
```

## Методы
**[IItemStack](/Vanilla/Items/IItemStack/) output** - вывод рецепта.

**[Ввод ILiquidStack](/Vanilla/Liquids/ILiquidStack/)** - Ввод рецепта.


## Сложение
```zenscript
mods.alchemistry.Evaporator.addRecipe(IItemStack output, ILiquidStack input);
mods.alchemistry.Рецепт Evaporator.addRecipe(<minecraft:stone>,<liquid:lava>*250);
```

## Удаление
```zenscript
mods.alchemistry.Evaporator.removeRecipe(ILiquidStack); //Будет работать независимо от количества
mods.alchemistry.Испытатель.removeRecipe(<liquid:milk>);

mods.alchemistry.Evaporator.removeAllRecipes();
```
