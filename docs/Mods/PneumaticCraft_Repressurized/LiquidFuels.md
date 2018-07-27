# 液体燃料

液体燃料在气动工艺中的用途包括：在（高级）液体压缩机中产生气压和（可选的）在煤油灯中用作照明。
By default the liquids produced in the Refinery are defined as fuel, as well as any liquid above a temperature of 305 degrees Kelvin.

## Calling

You can call the Liquid Fuels package using `mods.pneumaticcraft.liquidfuel`.

## Removing

This function removes the [ILiquidStack](/Vanilla/Variable_Types/ILiquidStack) `fluid` its fuel value:

```
mods.pneumaticcraft.liquidfuel.removeFuel(ILiquidStack fluid);
// Example
mods.pneumaticcraft.liquidfuel.removeFuel(<liquid:lpg>);
```

This function removes *all* registered fuels:

```
mods.pneumaticcraft.liquidfuel.removeAllFuels();
```

## Adding

The following functions can be used to add fluids to the fuel registry:

```java
// Register a certain liquid as a fuel. mlPerBucket defines the amount of compressed air produced per bucket of fuel. For reference, 16000mL of air is produced from a piece of Coal in an Air Compressor.
mods.pneumaticcraft.liquidfuel.addFuel(ILiquidStack fluid, double mlPerBucket);

// Example: register water as a fuel which produces 16000mL air per bucket.
mods.pneumaticcraft.liquidfuel.addFuel(<liquid:water>, 16000);
```
