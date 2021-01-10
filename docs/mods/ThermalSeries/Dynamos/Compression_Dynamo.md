# Compression Dynamo

## Package

`mods.thermal.CompressionFuel`

## Add Fuel

```zenscript
//<recipetype:thermal:compression_fuel>.addFuel(String name, IFluidStack ingredient, int energy);
<recipetype:thermal:compression_fuel>.addFuel("compression_test", <fluid:minecraft:water>, 1000);
```

## Remove Fuel

```zenscript
//<recipetype:thermal:compression_fuel>.removeFuel(IFluidStack outputFluid);
<recipetype:thermal:compression_fuel>.removeFuel(<fluid:thermal:tree_oil>);
```
