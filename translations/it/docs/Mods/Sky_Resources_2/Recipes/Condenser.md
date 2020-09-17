# Condensatore

Il pacchetto *condensatore* viene utilizzato per aggiungere o rimuovere ricette a/dal Condenser.

## Chiamata

Puoi chiamare il pacchetto *condensatore* usando `mods.skyresources.condenser`

## Aggiunta Ricetta

```zenscript
//mods.skyresources.condenser.addRecipe(IItemStack output, int tickTime, IItemStack catalyst, ILiquidStack inputFluid);
mods.skyresources.condenser.addRecipe(<minecraft:obsidian>, 300, <minecraft:ice>, <liquid:lava>);
```

## Rimozione Ricetta

```zenscript
//mods.skyresources.condenser.removeRecipe(IItemStack output);
mods.skyresources.condenser.removeRecipe(<minecraft:iron_ingot>);
```