# Liquifier

# Pacchetto
```zenscript
mods.alchimia.Liquifier
```

## Metodi
**[IItemStack](/Vanilla/Liquids/ILiquidStack/) output** - L'output della ricetta.

**[IItemStack](/Vanilla/Items/IItemStack/) input** - L'ingresso della ricetta.

## Addizione
```zenscript
mods.alchimia.Liquifier.addRecipe(ILiquidStack output, IItemStack input);
mods.alchemistry.Liquifier.addRecipe(<liquid:beryllium>*100,<alchemistry:element:5>);
```

## Rimozione
```zenscript
mods.alchimia.Liquifier.removeRecipe(IItemStack input);

mods.alchemistry.Liquifier.removeAllRicette();
```
