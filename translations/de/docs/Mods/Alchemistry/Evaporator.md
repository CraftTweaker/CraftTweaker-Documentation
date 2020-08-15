# Evaporator

# Paket
```zenscript
mods.alchemistry.Evaporator
```

## Methoden
**[IItemStack](/Vanilla/Items/IItemStack/) Ausgabe** - Ausgabe des Rezeptes.

**[ILiquidStack](/Vanilla/Liquids/ILiquidStack/) Eingabe** - Die Eingabe des Rezeptes.


## Addition
```zenscript
mods.alchemistry.Evaporator.addRecipe(IItemStack output, ILiquidStack input);
mods.alchemistry.Evaporator.addRecipe(<minecraft:stone>,<liquid:lava>*250);
```

## Entfernen
```zenscript
mods.alchemistry.Evaporator.removeRecipe(ILiquidStack Eingabe); //Funktioniert unabhängig von der Menge
mods.alchemistry.Evaporator.removeRecipe(<liquid:milk>);

mods.alchemistry.Evaporator.removeAllRezept();
```
