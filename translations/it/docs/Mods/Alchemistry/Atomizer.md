# Atomizzatore

# Pacchetto
```zenscript
mods.alchimia.Atomizzatore
```

## Metodi
**[IItemStack](/Vanilla/Items/IItemStack/) output** - L'output della ricetta.

**[Ingresso ILiquidStack](/Vanilla/Liquids/ILiquidStack/)** - L'ingresso della ricetta.


## Addizione
```zenscript
mods.alchimia.Atomizer.addRecipe(IItemStack output, ILiquidStack input);
mods.alchemistry.Atomizer.addRecipe(<minecraft:redstone>,<liquid:beryllium>*500);
```

## Rimozione
```zenscript
mods.alchimia.Atomizer.removeRecipe(ingresso ILiquidStack); //Funzionerà indipendentemente dalla quantità

mods.alchemistry.Atomizer.removeRecipe(<liquid:iron>);
mods.alchemistry.Atomizer.removeAllRicette();
```
