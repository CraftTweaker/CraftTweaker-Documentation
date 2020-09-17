# Coltello Di Taglio

Il pacchetto *coltello* viene utilizzato per aggiungere o rimuovere ricette da/per il coltello da taglio.

## Chiamata

Puoi chiamare il pacchetto *coltello* usando `mods.skyresources.knife`

## Aggiunta Ricetta

```zenscript
//mods.skyresources.knife.addRecipe(IItemStack output, IItemStack input);
mods.skyresources.knife.addRecipe(<minecraft:diamond>, <minecraft:stone>);
```

## Rimozione Ricetta

```zenscript
//mods.skyresources.knife.removeRecipe(IItemStack output);
mods.skyresources.knife.removeRecipe(<minecraft:melon>);
```