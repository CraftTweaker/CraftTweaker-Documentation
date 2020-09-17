# Combustibles líquidos

Los combustibles líquidos se utilizan en PneumaticCraft: Represurizado en el compresor líquido (avanzado) para crear aire comprimido y (opcionalmente) en la Lámpara Keroseno para producir luz. Por defecto, los líquidos producidos en la Refinería se definen como combustible, así como cualquier líquido por encima de una temperatura de 305 grados Kelvin.

## Llamando

Puede llamar al paquete de combustibles líquidos usando `mods.pneumaticcraft.liquidfuel`.

## Eliminando

Esta función deshace el [ILiquidStack](/Vanilla/Liquids/ILiquidStack/) `fluido` como combustible:

```zenscript
mods.pneumaticcraft.liquidfuel.removeFuel(ILiquidStack fluido);
// Ejemplo
mods.pneumaticcraft.liquidfuel.removeFuel(<liquid:lpg>);
```

Esta función desactiva *todos los* combustibles registrados:

```zenscript
mods.pneumaticcraft.liquidfuel.removeAllFuels();
```

## Agregando

Las siguientes funciones se pueden utilizar para añadir fluidos al registro de combustible:

```zenscript
// Registrar un cierto líquido como combustible. mlPerBucket define la cantidad de aire comprimido producido por cada cubo de combustible. Para referencia, 16000mL de aire se produce a partir de una pieza de carbón en un compresor de aire.
mods.pneumaticcraft.liquidfuel.addFuel(fluido ILiquidStack, doble mlPerBucket);

// Ejemplo: registrar agua como combustible que produce 16000mL de aire por cubeta.
mods.pneumaticcraft.liquidfuel.addFuel(<liquid:water>, 16000);
```