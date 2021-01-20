# Magmatic Dynamo / Magmatic Fuel

## Methods

#### Add Fuel

The following script will add 1000 mB of Water as a Fuel that produces 1000 RF.

```zenscript
// <recipetype:thermal:magmatic_fuel>.addFuel(String name, IFluidStack ingredient, int energy);
<recipetype:thermal:magmatic_fuel>.addFuel("magmatic_test", <fluid:minecraft:water>, 1000);
```

#### Remove Fuel

The following script will remove Lava as a Fuel.

```zenscript
// <recipetype:thermal:magmatic_fuel>.removeFuel(IFluidStack outputFluid);
<recipetype:thermal:magmatic_fuel>.removeFuel(<fluid:minecraft:lava>);
```
