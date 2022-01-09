# ReactantDynamo

## Import the package
To shorten method calls you can [import](/AdvancedFunctions/Import/) the package like so:
```zenscript
import mods.thermalexpansion.ReactantDynamo;
```


## Add Reaction

```zenscript
//mods.thermalexpansion.ReactantDynamo.addReaction(IItemStack item, ILiquidStack liquid, int energy);
mods.thermalexpansion.ReactantDynamo.addReaction(<minecraft:bedrock>, <liquid:water>, 13);
```

## Add Elemental Reaction

```zenscript
//mods.thermalexpansion.ReactantDynamo.addReactionElemental(IItemStack item, ILiquidStack liquid, int energy);
mods.thermalexpansion.ReactantDynamo.addReactionElemental(<minecraft:bedrock>, <liquid:water>, 13);
```

## Remove Reaction

```zenscript
//mods.thermalexpansion.ReactantDynamo.removeReaction(IItemStack item, ILiquidStack liquid);
mods.thermalexpansion.ReactantDynamo.removeReaction(<minecraft:bedrock>, <liquid:water>);
```


## Remove Elemental Reaction

```zenscript
//mods.thermalexpansion.ReactantDynamo.removeReactionElemental(IItemStack item, ILiquidStack liquid);
mods.thermalexpansion.ReactantDynamo.removeReactionElemental(<minecraft:bedrock>, <liquid:water>);
```
