# Diciembre Magmático

## Importar el paquete

Para acortar las llamadas a métodos puedes [importar](/AdvancedFunctions/Import/) el paquete así:

```zenscript
importar mods.thermalexpansion.MagmaticDynamo;
```

## Añadir combustible

```zenscript
//mods.thermalexpansion.MagmaticDynamo.addFuel(pila ILiquidStack, energía de int);
mods.thermalexpansion.MagmaticDynamo.addFuel(<liquid:water>, 13);
```

## Eliminar Petróleo

```zenscript
//mods.thermalexpansion.MagmaticDynamo.removeFuel(pila ILiquidStack);
mods.thermalexpansion.MagmaticDynamo.removeFuel(<liquid:water>);
```