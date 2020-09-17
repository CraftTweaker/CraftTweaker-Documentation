# ReactantDynamo

## Dieses Paket importieren

To shorten method calls you can [import](/AdvancedFunctions/Import/) the package like so:

```zenscript
importieren mods.thermalexpansion.ReactantDynamo;
```

## Reaktion hinzufügen

```zenscript
//mods.thermalexpansion.ReactantDynamo.addReaction(IItemStack item, ILiquidStack liquid, int energy);
mods.thermalexpansion.ReactantDynamo.addReaction(<minecraft:bedrock>, <liquid:water>, 13);
```

## Elementarreaktion hinzufügen

```zenscript
//mods.thermalexpansion.ReactantDynamo.addElementalReaction(IItemStack item, ILiquidStack liquid, int energy);
mods.thermalexpansion.ReactantDynamo.addElementalReaction(<minecraft:bedrock>, <liquid:water>, 13);
```

## Reaktion entfernen

```zenscript
//mods.thermalexpansion.ReactantDynamo.removeReaction(IItemStack item, ILiquidStack liquid);
mods.thermalexpansion.ReactantDynamo.removeReaction(<minecraft:bedrock>, <liquid:water>);
```

## Elementarreaktion entfernen

```zenscript
//mods.thermalexpansion.ReactantDynamo.removeElementalReaction(IItemStack item, ILiquidStack liquid);
mods.thermalexpansion.ReactantDynamo.removeElementalReaction(<minecraft:bedrock>, <liquid:water>);
```