# Liquifier

# Paket
```zenscript
mods.alchemistry.Liquifier
```

## Methoden
**[IItemStack](/Vanilla/Liquids/ILiquidStack/) Ausgabe** - Ausgabe des Rezeptes.

**[IItemStack](/Vanilla/Items/IItemStack/) Eingabe** - Die Eingabe des Rezeptes.

## Addition
```zenscript
mods.alchemistry.Liquifier.addRecipe(ILiquidStack output, IItemStack input);
mods.alchemistry.Liquifier.addRecipe(<liquid:beryllium>*100,<alchemistry:element:5>);
```

## Entfernen
```zenscript
mods.alchemistry.Liquifier.removeRecipe(IItemStack input);

mods.alchemistry.Liquifier.removeAllRezept();
```
