# Dia de Reactante.

## Importar el paquete

Para acortar las llamadas a métodos puedes [importar](/AdvancedFunctions/Import/) el paquete así:

```zenscript
importar mods.thermalexpansion.ReactantDynamo;
```

## Añadir Reacción

```zenscript
//mods.thermalexpansion.ReactantDynamo.addReaction(ítemStack item, ILiquidStack liquid, int energy);
mods.thermalexpansion.ReactantDynamo.addReaction(<minecraft:bedrock>, <liquid:water>, 13);
```

## Añadir Reacción Elemental

```zenscript
//mods.thermalexpansion.ReactantDynamo.addElementalReaction(ítemStack item, ILiquidStack liquid, int energy);
mods.thermalexpansion.ReactantDynamo.addElementalReaction(<minecraft:bedrock>, <liquid:water>, 13);
```

## Eliminar reacción

```zenscript
//mods.thermalexpansion.ReactantDynamo.removeReaction(ítemStack item, ILiquidStack liquid);
mods.thermalexpansion.ReactantDynamo.removeReaction(<minecraft:bedrock>, <liquid:water>);
```

## Eliminar Reacción Elemental

```zenscript
//mods.thermalexpansion.ReactantDynamo.removeElementalReaction(ItemStack item, ILiquidStack liquid);
mods.thermalexpansion.ReactantDynamo.removeElementalReaction(<minecraft:bedrock>, <liquid:water>);
```