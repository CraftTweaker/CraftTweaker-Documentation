# Da compresión?

## Importar el paquete

Para acortar las llamadas a métodos puedes [importar](/AdvancedFunctions/Import/) el paquete así:

```zenscript
importar mods.thermalexpansion.CompressionDynamo;
```

## Añadir combustible

```zenscript
//mods.thermalexpansion.CompressionDynamo.addFuel(ILiquidStack stack, int energy);
mods.thermalexpansion.CompressionDynamo.addFuel(<liquid:water>, 13);
```

## Eliminar Petróleo

```zenscript
//mods.thermalexpansion.Compression.removeFuel(pila ILiquidStack);
mods.thermalexpansion.Compression.removeFuel(<liquid:water>);
```