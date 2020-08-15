# Evaporator

# Pacchetto
```zenscript
mods.alchimia.Evaporator
```

## Metodi
**[IItemStack](/Vanilla/Items/IItemStack/) output** - L'output della ricetta.

**[Ingresso ILiquidStack](/Vanilla/Liquids/ILiquidStack/)** - L'ingresso della ricetta.


## Addizione
```zenscript
mods.alchimia.Evaporator.addRecipe(IItemStack output, ILiquidStack input);
mods.alchemistry.Evaporator.addRecipe(<minecraft:stone>,<liquid:lava>*250);
```

## Rimozione
```zenscript
mods.alchimia.Evaporator.removeRecipe(ILiquidStack input); //Funzionerà indipendentemente dalla quantità
mods.alchemistry.Evaporator.removeRecipe(<liquid:milk>);

mods.alchemistry.Evaporator.removeAllRicette();
```
