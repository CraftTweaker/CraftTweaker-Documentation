# Condenser

The *condenser* package is used for adding or removing recipes to/from the Condenser.

## Chiamata

You can call the *condenser* package using `mods.skyresources.condenser`

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