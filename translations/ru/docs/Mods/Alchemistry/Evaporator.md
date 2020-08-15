# Evaporator

# Пакет
```zenscript
mods.alchemistry.Evaporator
```

## Методы
**[IItemStack](/Vanilla/Items/IItemStack/) output** - The output of the recipe.

**[ILiquidStack](/Vanilla/Liquids/ILiquidStack/) input** - The input of the recipe.


## Сложение
```zenscript
mods.alchemistry.Evaporator.addRecipe(IItemStack output, ILiquidStack input);
mods.alchemistry.Evaporator.addRecipe(<minecraft:stone>,<liquid:lava>*250);
```

## Удаление
```zenscript
mods.alchemistry.Evaporator.removeRecipe(ILiquidStack input); //Will work regardless of quantity
mods.alchemistry.Evaporator.removeRecipe(<liquid:milk>);

mods.alchemistry.Evaporator.removeAllRecipes();
```
