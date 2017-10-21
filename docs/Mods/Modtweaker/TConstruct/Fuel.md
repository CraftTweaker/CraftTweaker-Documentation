# Fuel

The `Fuel` package allows you to add Smeltery fuel fluids.

## Calling
You can call the Alloy package using `mods.tconstruct.Fuel`

## Add Fuel Recipes

```JAVA
//mods.tconstruct.Fuel.registerFuel(ILiquidStack fuel, int temperature);
mods.tconstruct.Fuel.registerFuel(<liquid:water>, 300);
```
Parameters:

- [ILiquidStack](/Vanilla/Liquids/ILiquidStack) fuel → liquid to be registered as fuel
- int temperature → determines the duration
