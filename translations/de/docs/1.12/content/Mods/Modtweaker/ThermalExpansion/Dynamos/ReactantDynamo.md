# ReactantDynamo

## Dieses Paket importieren
To shorten method calls you can [import](/AdvancedFunctions/Import/) the package like so:
```zenscript
import mods.thermalexpansion.ReactantDynamo;
```


## Add Reaction

```zenscript
//mods.thermalexpansion.ReactantDynamo.addReaction(IItemStack item, ILiquidStack liquid, int energy);
mods.thermalexpansion.ReactantDynamo.addReaction(<minecraft:bedrock>, <liquid:water>, 20000);
```

Note: The `energy` parameter needs to be a value between `10000` and `200000000`.

## Add Elemental Reaction

```zenscript
//mods.thermalexpansion.ReactantDynamo.addReactionElemental(IItemStack item, ILiquidStack liquid, int energy);
mods.thermalexpansion.ReactantDynamo.addReactionElemental(<minecraft:bedrock>, <liquid:water>, 20000);
```

Note: The `energy` parameter needs to be a value between `10000` and `200000000`.

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
