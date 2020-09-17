# Smerigliatrice

Il Grinder è una macchina che converte un elemento di input in un oggetto di uscita utilizzando vapore.

## Pacchetto
`mods.steamagerevolution.Grinder`

## Metodi

- **[IItemStack](/Vanilla/Items/IItemStack/) output** Il risultato della ricetta.
- **[IItemStack](/Vanilla/Items/IItemStack/) input** L'input della ricetta.
- **int craftTime** Tempo di lavorazione della macchina da elaborare
- **int steamCosto** Costo di vapore per la macchina da elaborare

## Addizione

```zenscript
mods.steamagerevolution.Grinder.addRecipe(IIngredient input, IItemStack output, int craftTime, int steamCost);
mods.steamagerevolution.Grinder.addRecipe(<ore:cobblestone>, <minecraft:gravel>, 200, 200);
```

## Rimozione

```zenscript
mods.steamagerevolution.Grinder.removeRecipe(IItemStack output);
mods.steamagerevolution.Grinder.removeRecipe(<minecraft:sand>);

mods.steamagerevolution.Grinder.removeAll();
```
