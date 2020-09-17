# Numistic Dynamo

## Importar el paquete

Para acortar las llamadas a métodos puedes [importar](/AdvancedFunctions/Import/) el paquete así:

```zenscript
importar mods.thermalexpansion.NumisticDynamo;
```

## Añadir combustible

```zenscript
//mods.thermalexpansion.NumisticDynamo.addFuel(ILiquidStack stack, int energy);
mods.thermalexpansion.NumisticDynamo.addFuel(<liquid:water>, 13);
```

## Añadir Petróleo

```zenscript
//mods.thermalexpansion.NumisticDynamo.addGemFuel(ILiquidStack stack, int energy);
mods.thermalexpansion.NumisticDynamo.addGemFuel(<liquid:water>, 13);
```

## Eliminar Petróleo

```zenscript
//mods.thermalexpansion.NumisticDynamo.removeFuel(ILiquidStack stack);
mods.thermalexpansion.NumisticDynamo.removeFuel(<liquid:water>);
```

## Quitar Petróleo

```zenscript
//mods.thermalexpansion.NumisticDynamo.removeGemFuel(ILiquidStack stack);
mods.thermalexpansion.NumisticDynamo.removeGemFuel(<liquid:water>);
```