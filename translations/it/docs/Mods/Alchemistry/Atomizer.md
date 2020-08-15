# Atomizer

# Pacchetto
```zenscript
mods.alchemistry.Atomizer
```

## Metodi
**[IItemStack](/Vanilla/Items/IItemStack/) output** - The output of the recipe.

**[ILiquidStack](/Vanilla/Liquids/ILiquidStack/) input** - The input of the recipe.


## Addizione
```zenscript
mods.alchemistry.Atomizer.addRecipe(IItemStack output, ILiquidStack input);
mods.alchemistry.Atomizer.addRecipe(<minecraft:redstone>,<liquid:beryllium>*500);
```

## Rimozione
```zenscript
mods.alchemistry.Atomizer.removeRecipe(ILiquidStack input); //Will work regardless of quantity

mods.alchemistry.Atomizer.removeRecipe(<liquid:iron>);
mods.alchemistry.Atomizer.removeAllRecipes();
```
