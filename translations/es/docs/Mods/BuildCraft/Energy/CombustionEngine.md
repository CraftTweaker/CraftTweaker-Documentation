# Motor de combustión

*Requiere Energía Construida*

Class path: `mods.buildcraft.CombustionEngine`CombustionEngine</code>

## Usar

To use, import the class with `import mods.buildcraft.CombustionEngine;` at the beginning of your script.CombustionEngine;</code> al principio de su script.

## Añadir un combustible limpio

`CombustionEngine.addCleanFuel(líquido, powerPerTick, timePerBucket);`

- `liquid` <[ILiquidStack](/vanilla/api/liquids/ILiquidStack)> The liquid to be used as fuel
- `powerPerTick` &lt;doble> salida de energía en MJ por tick
- `timePerBucket` &lt;int> Cantidad de ticks que 1.000 mB (1 cubo) deben correr para

```zenscript
importar mods.buildcraft.import mods.buildcraft.CombustionEngine;

CombustionEngine.addCleanFuel(<liquid:iron>, 32.0, 1200);
```

## Añadir un combustible sucio

`CombustionEngine.addDirtyFuel(lFuel, powerPerTick, timePerBucket, lResidue);`

- `lFuel` <[ILiquidStack](/vanilla/api/liquids/ILiquidStack)> The liquid to be used as fuel
- `powerPerTick` &lt;doble> salida de energía en MJ por tick
- `timePerBucket` &lt;int> Cantidad de ticks que 1.000 mB (1 cubo) deben correr para
- `lResidue` <[ILiquidStack](/vanilla/api/liquids/ILiquidStack)> The residue fluid, per bucket of the original fuel

```zenscript
importar mods.buildcraft.import mods.buildcraft.CombustionEngine;

CombustionEngine.addDirtyFuel(<liquid:iron>, 32.0, 1200, <liquid:water>);
```
