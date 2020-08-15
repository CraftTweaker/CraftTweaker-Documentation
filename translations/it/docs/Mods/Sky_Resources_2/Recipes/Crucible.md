# Crogiolo

Il pacchetto *crogiolo* viene utilizzato per aggiungere o rimuovere ricette da/per il Crogiolo.

## Chiamata

Puoi chiamare il pacchetto *crogiolo* usando `mods.skyresources.crucible`

## Aggiunta Ricetta

```zenscript
//mods.skyresources.crucible.addRecipe(ILiquidStack output, IItemStack input);
mods.skyresources.crucible.addRecipe(<liquid:lava> * 500, <minecraft:cobblestone>);
```

## Rimozione Ricetta

```zenscript
//mods.skyresources.crucible.removeRecipe(ILiquidStack output);
mods.skyresources.crucible.removeRecipe(<liquid:lava>);
```