# Congelatore

Il pacchetto *freezer* viene utilizzato per aggiungere o rimuovere ricette a/dal congelatore.

## Chiamata

Puoi chiamare il pacchetto *freezer* usando `mods.skyresources.freezer`

## Aggiunta Ricetta

```zenscript
//mods.skyresources.freezer.addRecipe(IItemStack output, IItemStack input, int ticks);
mods.skyresources.freezer.addRecipe(<minecraft:ice>, <minecraft:dirt>, 900);
```

## Rimozione Ricetta

```zenscript
//mods.skyresources.freezer.removeRecipe(IItemStack output);
mods.skyresources.freezer.removeRecipe(<minecraft:ice>);
```