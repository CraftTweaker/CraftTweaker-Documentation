# Atomizer

# Paket
```zenscript
mods.alchemistry.Atomizer
```

## Methoden
**[IItemStack](/Vanilla/Items/IItemStack/) Ausgabe** - Ausgabe des Rezeptes.

**[ILiquidStack](/Vanilla/Liquids/ILiquidStack/) Eingabe** - Die Eingabe des Rezeptes.


## Addition
```zenscript
mods.alchemistry.Atomizer.addRecipe(IItemStack output, ILiquidStack input);
mods.alchemistry.Atomizer.addRecipe(<minecraft:redstone>,<liquid:beryllium>*500);
```

## Entfernen
```zenscript
mods.alchemistry.Atomizer.removeRecipe(ILiquidStack Eingabe); //Funktioniert unabhängig von der Menge

mods.alchemistry.Atomizer.removeRecipe(<liquid:iron>);
mods.alchemistry.Atomizer.removeAllRezept();
```
