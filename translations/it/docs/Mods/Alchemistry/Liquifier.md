# Liquifier

# Pacchetto
```zenscript
mods.alchemistry.Liquifier
```

## Metodi
**[IItemStack](/Vanilla/Liquids/ILiquidStack/) output** - The output of the recipe.

**[IItemStack](/Vanilla/Items/IItemStack/) input** - The input of the recipe.

## Addizione
```zenscript
mods.alchemistry.Liquifier.addRecipe(ILiquidStack output, IItemStack input);
mods.alchemistry.Liquifier.addRecipe(<liquid:beryllium>*100,<alchemistry:element:5>);
```

## Rimozione
```zenscript
mods.alchemistry.Liquifier.removeRecipe(IItemStack input);

mods.alchemistry.Liquifier.removeAllRecipes();
```
