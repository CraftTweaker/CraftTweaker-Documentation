# ReactantDynamo

## Importer le paquet

Pour raccourcir les appels de méthode, vous pouvez [importer](/AdvancedFunctions/Import/) le paquet comme ceci :

```zenscript
Importer mods.thermalexpansion.ReactantDynamo;
```

## Ajouter une réaction

```zenscript
//mods.thermalexpansion.ReactantDynamo.addReaction(IItemStack, ILiquidStack liquid, int energy);
mods.thermalexpansion.ReactantDynamo.addReaction(<minecraft:bedrock>, <liquid:water>, 13);
```

## Ajouter une réaction élémentaire

```zenscript
//mods.thermalexpansion.ReactantDynamo.addElementalReaction(IItemStack, ILiquidStack liquide, int energy);
mods.thermalexpansion.ReactantDynamo.addElementalReaction(<minecraft:bedrock>, <liquid:water>, 13);
```

## Supprimer la réaction

```zenscript
//mods.thermalexpansion.ReactantDynamo.removeReaction(IItemStack, ILiquidStack liquid);
mods.thermalexpansion.ReactantDynamo.removeReaction(<minecraft:bedrock>, <liquid:water>);
```

## Supprimer la réaction élémentaire

```zenscript
//mods.thermalexpansion.ReactantDynamo.removeElementalReaction(IItemStack, ILiquidStack liquid);
mods.thermalexpansion.ReactantDynamo.removeElementalReaction(<minecraft:bedrock>, <liquid:water>);
```