# Combustion Engine

*Requires BuildCraft Energy*

Class path: `mods.buildcraft.CombustionEngine`

## Use

To use, import the class with `import mods.buildcraft.CombustionEngine;` at the beginning of your script.

## Adding a Clean Fuel

`CombustionEngine.addCleanFuel(liquid, powerPerTick, timePerBucket);`

- `liquid` <[ILiquidStack](/Vanilla/Liquids/ILiquidStack)> The liquid to be used as fuel
- `powerPerTick` &lt;double> Power output in MJ per tick
- `timePerBucket` &lt;int> Amount of ticks that 1,000 mB (1 bucket) should run for

```zenscript
import mods.buildcraft.CombustionEngine;

CombustionEngine.addCleanFuel(<liquid:iron>, 32.0, 1200);
```

## Adding a Dirty Fuel

`CombustionEngine.addDirtyFuel(lFuel, powerPerTick, timePerBucket, lResidue);`

- `lFuel` <[ILiquidStack](/Vanilla/Liquids/ILiquidStack)> The liquid to be used as fuel
- `powerPerTick` &lt;double> Power output in MJ per tick
- `timePerBucket` &lt;int> Amount of ticks that 1,000 mB (1 bucket) should run for
- `lResidue` <[ILiquidStack](/Vanilla/Liquids/ILiquidStack)> The residue fluid, per bucket of the original fuel

```zenscript
import mods.buildcraft.CombustionEngine;

CombustionEngine.addDirtyFuel(<liquid:iron>, 32.0, 1200, <liquid:water>);
```
