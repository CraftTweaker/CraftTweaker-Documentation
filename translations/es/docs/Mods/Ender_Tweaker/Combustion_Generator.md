# Generador de combustión

## Paquete

`importar mods.enderio.CombustionGen;`

## Métodos

- **[ILiquidStack](/Vanilla/Liquids/ILiquidStack/) combustible** El combustible fluido para añadir.
- **int powerPerCycleRF** Cantidad de energía creada por tick en una máquina de línea base.
- **int. totalBurnTime** Tiempo total de quema de un cubo de combustible.
- **[ILiquidStack](/Vanilla/Liquids/ILiquidStack/) enfriante** El frío del fluido para añadir.
- **float degreesCoolingPerMB** ¿Cuánto calor en el generador puede un mB del absorb enfriado añadido hasta que se calienta hasta el momento?

## Añadir combustible

```zenscript
mods.enderio.CombustionGen.addFuel(combustible ILiquidStack, int powerPerCycleRF, int totalBurnTime);

mods.enderio.CombustionGen.addFuel(<liquid:lava>, 25, 40);
```

## Añadir refrigerante

```zenscript
mods.enderio.CombustionGen.addCoolant(ILiquidStack frío fluido, degreesCoolingPerMB);

mods.enderio.CombustionGen.addCoolant(<liquid:liquid_sunshine>, 100);
```

## Eliminar Petróleo

```zenscript
mods.enderio.CombustionGen.removeFuel(ILiquidStack fuel);

mods.enderio.CombustionGen.removeFuel(<liquid:fire_water>);
```

## Quitar refrigerante

```zenscript
mods.enderio.Alloymirrelter.removeCoolant(ILiquidStack enfriante);

mods.enderio.Alloymirrelter.removeCoolant(<liquid:water>);
```