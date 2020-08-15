# Distillatore

Il Distiller è una macchina che converte un fluido in ingresso in un fluido in uscita e un elemento utilizzando vapore.

## Pacchetto
`mods.steamagerevolution.Distiller`

## Metodi

- **[ILiquidStack](/Vanilla/Liquids/ILiquidStack/) output** Il risultato della ricetta.
- **[IItemStack](/Vanilla/Items/IItemStack/) output** Il risultato della ricetta.
- **[Ingresso ILiquidStack](/Vanilla/Liquids/ILiquidStack/)** L'ingresso della ricetta.
- **int craftTime** Tempo di lavorazione della macchina da elaborare
- **int steamCosto** Costo di vapore per la macchina da elaborare

## Addizione

```zenscript
mods.steamagerevolution.Distiller.addRecipe(ingresso ILiquidStack, uscita IItemStack, uscita ILiquidStack, int craftTime, int steamCost);
mods.steamagerevolution.Distiller.addRecipe(<liquid:bio_fuel>*1000, <minecraft:dirt>, <liquid:ethanol>*1000, 200, 200);
```

## Rimozione

```zenscript mods.steamagerevolution.Distiller.removeRecipe(IItemStack outputStack, ILiquidStack output); mods.steamagerevolution.Distiller.removeRecipe(<minecraft:cobblestone>, <liquid:lava>);

mods.steamagerevolution.Distiller.removeAll(); ``
