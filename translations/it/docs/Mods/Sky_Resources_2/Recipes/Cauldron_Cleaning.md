# Pulizia Del Calderone

Il pacchetto *cauldroncleaning* viene utilizzato per aggiungere o rimuovere ricette da/per il Cauldron.

## Chiamata

Puoi chiamare il pacchetto *cauldroncleaning* utilizzando `mods.skyresources.cauldronclean`

## Aggiunta Ricetta

```zenscript
//mods.skyresources.cauldronclean.addRecipe(IItemStack output, IItemStack input);
mods.skyresources.cauldronclean.addRecipe(<minecraft:diamond>, <minecraft:dirt>);

//mods.skyresources.cauldronclean.addRecipe(IItemStack output, IItemStack input, float chance);
mods.skyresources.cauldronclean.Recipe(<minecraft:emerald>, <minecraft:dirt>, 0.50);
```

## Rimozione Ricetta

```zenscript
//mods.skyresources.cauldronclean.removeRecipe(IItemStack output);
mods.skyresources.cauldronclean.removeRecipe(<minecraft:diamond>);
```