# Evaporator

# Pakiet
```zenscript
mods.alchemistry.Evaporator
```

## Metody
**[IItemStack](/Vanilla/Items/IItemStack/) wyjście** - Wyjście receptury.

**[ILiquidStack](/Vanilla/Liquids/ILiquidStack/) wejście** - Wprowadzenie przepisu.


## Dodanie
```zenscript
mods.alchemistry.Evaporator.addRecipe(IItemStack output, ILiquidStack input);
mods.alchemistry.Evaporator.addRecipe(<minecraft:stone>,<liquid:lava>*250);
```

## Usuwanie
```zenscript
mods.alchemistry.Evaporator.removeRecipe(ILiquidStack); //W/Wy będzie działać niezależnie od ilości
mods.alchemistry.Evaporator.removeRecipe(<liquid:milk>);

mods.alchemistry.wyparowator.removeAllRecipes();
```
