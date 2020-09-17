# Martello Di Vapore

Il martello di vapore è una macchina che converte due elementi di ingresso in un oggetto di uscita utilizzando vapore.

## Pacchetto
`mods.steamagerevolution.SteamHammer`.

## Metodi

- **[IItemStack](/Vanilla/Items/IItemStack/) output** Il risultato della ricetta.
- **[IItemStack](/Vanilla/Items/IItemStack/) input** L'input della ricetta.
- **int craftTime** Tempo di lavorazione della macchina da elaborare
- **int steamCosto** Costo di vapore per la macchina da elaborare

## Addizione

```zenscript
mods.steamagerevolution.SteamHammer.addRecipe(IIngredient input, IIngredient input, IItemStack output, int craftTime, int steamCost);
mods.steamagerevolution.SteamHammer.addRecipe(<ore:ingotIron>, <ore:ingotIron>, <ore:plateIron>.firstItem, 200, 200);
```


## Rimozione

```zenscript
mods.steamagerevolution.SteamHammer.removeRecipe(IItemStack output);
mods.steamagerevolution.SteamHammer.removeRecipe(<ore:plateIron>.firstItem);

mods.steamagerevolution.SteamHammer.removeAll();
```
