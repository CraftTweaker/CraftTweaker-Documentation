# Atomizer

# Pakiet
```zenscript
mods.alchemistry.Atomizer
```

## Metody
**[IItemStack](/Vanilla/Items/IItemStack/) wyjście** - Wyjście receptury.

**[ILiquidStack](/Vanilla/Liquids/ILiquidStack/) wejście** - Wprowadzenie przepisu.


## Dodanie
```zenscript
mods.alchemistry.Atomizer.addRecipe(IItemStack output, ILiquidStack input);
mods.alchemistry.Atomizer.addRecipe(<minecraft:redstone>,<liquid:beryllium>*500);
```

## Usuwanie
```zenscript
mods.alchemistry.Atomizer.removeRecipe(ILiquidStack); //Wy będzie działać niezależnie od ilości

mods.alchemistry.Atomizer.removeRecipe(<liquid:iron>);
mods.alchemistry.Atomizer.removeAllRecipes();
```
