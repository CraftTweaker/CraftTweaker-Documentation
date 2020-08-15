# Forgia Leghe Metalliche

La forgia in lega è una macchina che converte due fluidi di ingresso in un fluido di uscita.

## Pacchetto
`mods.steamagerevolution.AlloyForge`

## Metodi

- **[ILiquidStack](/Vanilla/Liquids/ILiquidStack/) output** Il risultato della ricetta.
- **[Ingresso ILiquidStack](/Vanilla/Liquids/ILiquidStack/)** L'ingresso della ricetta.
- **int craftTime** Tempo di lavorazione della macchina da elaborare

## Addizione

```zenscript
mods.steamagerevolution.AlloyForge.addRecipe(ingresso ILiquidStack, ingresso ILiquidStack, uscita ILiquidStack, int craftTime);
mods.steamagerevolution.AlloyForge.addRecipe(<liquid:water>*100, <liquid:lava>*100, <liquid:obsidian>*200, 200);
```


## Rimozione

```zenscript
mods.steamagerevolution.AlloyForge.removeRecipe(ILiquidStack output);
mods.steamagerevolution.AlloyForge.removeRecipe(<liquid:bronze>);

mods.steamagerevolution.AlloyForge.removeAll();
```
