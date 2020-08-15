# Blocco Di Casting

Il Casting Block è una macchina che converte un fluido di ingresso in un oggetto di uscita.

## Pacchetto
`mods.steamagerevolution.CastingBlock`

## Metodi

- **[IItemStack](/Vanilla/Items/IItemStack/) output** Il risultato della ricetta.
- **[Ingresso ILiquidStack](/Vanilla/Liquids/ILiquidStack/)** L'ingresso della ricetta.
- **int craftTime** Tempo di lavorazione della macchina da elaborare

## Addizione

```zenscript
mods.steamagerevolution.CastingBlock.addRecipe(ILiquidStack input, IItemStack output, int craftTime);
mods.steamagerevolution.CastingBlock.addRecipe(<liquid:lava>*1000, <minecraft:obsidian>, 200);
```

## Rimozione

```zenscript
mods.steamagerevolution.CastingBlock.removeRecipe(IItemStack output);
mods.steamagerevolution.CastingBlock.removeRecipe(<minecraft:iron_block>);

mods.steamagerevolution.CastingBlock.removeAll();
```
