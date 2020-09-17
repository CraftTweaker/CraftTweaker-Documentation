# Combustione

Il pacchetto *combustione* viene utilizzato per aggiungere o rimuovere ricette da/per il processo di combustione.

## Chiamata

Puoi chiamare il pacchetto *combustion* utilizzando `mods.skyresources.combustion`

## Aggiunta Ricetta

```zenscript
//mods.skyresources.combustion.addRecipe(IItemStack output, IItemStack[] input, int temperature);
mods.skyresources.combustion.addRecipe(<minecraft:diamond>, [<minecraft:dirt>, <minecraft:sand> * 2], 420);
```

## Rimozione Ricetta

```zenscript
//mods.skyresources.combustion.removeRecipe(IItemStack output);
mods.skyresources.combustion.removeRecipe(<minecraft:diamond>);
```