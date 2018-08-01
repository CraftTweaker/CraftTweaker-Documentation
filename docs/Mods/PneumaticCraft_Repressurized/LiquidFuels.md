# Liquid Fuels

Liquid Fuels are used in PneumaticCraft: Repressurized in the (Advanced) Liquid Compressor to create compressed air, and (optionally) in the Kerosene Lamp to produce light.
By default the liquids produced in the Refinery are defined as fuel, as well as any liquid above a temperature of 305 degrees Kelvin.

## Calling

You can call the Liquid Fuels package using `mods.pneumaticcraft.liquidfuel`.

## Removing

This function removes the [ILiquidStack](/Vanilla/Liquids/ILiquidStack/) `fluid` its fuel value:

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
