# Magmatic Dynamo

## Add Fuel

```zenscript
//<recipetype:thermal:magmatic_fuel>.addFuel(String name, IFluidStack ingredient, int energy);
<recipetype:thermal:magmatic_fuel>.addFuel("magmatic_test", <fluid:minecraft:water>, 1000);
```

## Remove Fuel

```zenscript
//<recipetype:thermal:magmatic_fuel>.removeFuel(IFluidStack outputFluid);
<recipetype:thermal:magmatic_fuel>.removeFuel(<fluid:minecraft:water>);
```
