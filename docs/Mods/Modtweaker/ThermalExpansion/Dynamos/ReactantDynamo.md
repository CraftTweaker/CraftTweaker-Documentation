# ReactantDynamo

## Import the package
To shorten method calls you can [import](/AdvancedFunctions/Import/) the package like so:  
```
import mods.thermalexpansion.ReactantDynamo;
```


## Add Reaction

```
//mods.thermalexpansion.ReactantDynamo.addReaction(IItemStack item, ILiquidStack liquid, int energy);
mods.thermalexpansion.ReactantDynamo.addReaction(<minecraft:bedrock>, <liquid:water>, 13);
```

## Add Elemental Reaction

```
//mods.thermalexpansion.ReactantDynamo.addElementalReaction(IItemStack item, ILiquidStack liquid, int energy);
mods.thermalexpansion.ReactantDynamo.addElementalReaction(<minecraft:bedrock>, <liquid:water>, 13);
```

## Remove Reaction

```
//mods.thermalexpansion.ReactantDynamo.removeReaction(IItemStack item, ILiquidStack liquid);
mods.thermalexpansion.ReactantDynamo.removeReaction(<minecraft:bedrock>, <liquid:water>);
```


## Remove Elemental Reaction

```
//mods.thermalexpansion.ReactantDynamo.removeElementalReaction(IItemStack item, ILiquidStack liquid);
mods.thermalexpansion.ReactantDynamo.removeElementalReaction(<minecraft:bedrock>, <liquid:water>);
```