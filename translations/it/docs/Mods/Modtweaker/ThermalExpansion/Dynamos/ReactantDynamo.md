# ReactantDynamo

## Importa il pacchetto

Per abbreviare le chiamate di metodo è possibile [importare](/AdvancedFunctions/Import/) il pacchetto in questo modo:

```zenscript
import mods.thermalexpansion.ReactantDynamo;
```

## Aggiungi Reazione

```zenscript
//mods.thermalexpansion.ReactantDynamo.addReaction(IItemStack item, ILiquidStack liquid, int energy);
mods.thermalexpansion.ReactantDynamo.addReaction(<minecraft:bedrock>, <liquid:water>, 13);
```

## Aggiungi Reazione Elementale

```zenscript
//mods.thermalexpansion.ReactantDynamo.addElementalReaction(IItemStack item, ILiquidStack liquid, int energy);
mods.thermalexpansion.ReactantDynamo.addElementalReaction(<minecraft:bedrock>, <liquid:water>, 13);
```

## Rimuovi Reazione

```zenscript
//mods.thermalexpansion.ReactantDynamo.removeReaction(IItemStack item, ILiquidStack liquid);
mods.thermalexpansion.ReactantDynamo.removeReaction(<minecraft:bedrock>, <liquid:water>);
```

## Rimuovi Reazione Elementale

```zenscript
//mods.thermalexpansion.ReactantDynamo.removeElementalReaction(IItemStack item, ILiquidStack liquid);
mods.thermalexpansion.ReactantDynamo.removeElementalReaction(<minecraft:bedrock>, <liquid:water>);
```