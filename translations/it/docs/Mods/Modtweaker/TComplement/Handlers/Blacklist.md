# Blacklist

Il pacchetto Blacklist è usato per aggiungere/rimuovere ricette da/alla blacklist melter.

## Chiamata

Puoi chiamare il pacchetto Blacklist usando `mods.tcomplement.Blacklist`

## Aggiunta voce blacklist

```zenscript
//mods.tcomplement.Blacklist.addRecipe(ILiquidStack output, IItemStack input);
mods.tcomplement.Blacklist.addRecipe(<liquid:seared_stone>, <minecraft:stone>);
```

## Rimozione voce blacklist

```zenscript
//mods.tcomplement.Blacklist.removeRecipe(IItemStack input);
mods.tcomplement.Blacklist.removeRecipe(<minecraft:cobblestone>);
```