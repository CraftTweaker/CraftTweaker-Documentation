# Compression Dynamo / Compression Fuel

## Methods

#### Add Fuel

The following script will add 1000 mB of Water as a Fuel that produces 1000 RF.

```zenscript
// <recipetype:thermal:compression_fuel>.addFuel(String name, IFluidStack ingredient, int energy);
<recipetype:thermal:compression_fuel>.addFuel("compression_test", <fluid:minecraft:water> *1000, 1000);
```

#### Remove Fuel

The following script will remove Tree Oil as a Fuel.

```zenscript
// <recipetype:thermal:compression_fuel>.removeFuel(IFluidStack outputFluid);
<recipetype:thermal:compression_fuel>.removeFuel(<fluid:thermal:tree_oil>);
```
