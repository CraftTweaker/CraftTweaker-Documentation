# Crogiolo

Il Crogiolo è una macchina che converte un elemento di ingresso in un fluido di uscita utilizzando vapore.

## Pacchetto
`mods.steamagerevolution.Crucible`

## Metodi

- **[ILiquidStack](/Vanilla/Liquids/ILiquidStack/) output** Il risultato della ricetta.
- **[Ingresso IIngrediente](/Vanilla/Variable_Types/IIngredient/)** L'input della ricetta.
- **int craftTime** Tempo di lavorazione della macchina da elaborare
- **int steamCosto** Costo di vapore per la macchina da elaborare

## Addizione

```zenscript
mods.steamagerevolution.Crucible.addRecipe(IIngredient input, ILiquidStack output, int craftTime, int steamCost);
mods.steamagerevolution.Crucible.addRecipe(<minecraft:obsidian>, <liquid:lava>*1000, 200, 200);
```

## Rimozione

```zenscript
mods.steamagerevolution.Crucible.removeRecipe(ILiquidStack);
mods.steamagerevolution.Crucible.removeRecipe(<liquid:lava>);

mods.steamagerevolution.Crucible.removeAll();
```
