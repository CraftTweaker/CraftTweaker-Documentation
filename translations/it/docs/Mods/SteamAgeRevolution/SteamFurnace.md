# Fornace A Vapore

Il forno a vapore è una macchina che converte un elemento di ingresso in un oggetto di uscita utilizzando vapore.

## Pacchetto
`mods.steamagerevolution.SteamFurnace`

## Metodi

- **[IItemStack](/Vanilla/Items/IItemStack/) output** Il risultato della ricetta.
- **[IItemStack](/Vanilla/Items/IItemStack/) input** L'input della ricetta.
- **int craftTime** Tempo di lavorazione della macchina da elaborare
- **int steamCosto** Costo di vapore per la macchina da elaborare

## Addizione

```zenscript
mods.steamagerevolution.SteamFurnace.addRecipe(IIngredient input, IItemStack output, int craftTime, int steamCost);
mods.steamagerevolution.SteamFurnace.addRecipe(<ore:cobblestone>, <minecraft:stone>, 200, 200);
```


## Rimozione

```zenscript mods.steamagerevolution.SteamFurnace.removeRecipe(IItemStack output); mods.steamagerevolution.SteamFurnace.removeRecipe(<minecraft:glass>);

mods.steamagerevolution.SteamFurnace.removeAll(); ``
