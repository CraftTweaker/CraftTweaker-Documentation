# Fuel

The `Fuel` package allows you to add Smeltery fuel fluids.

## Calling

You can call the Alloy package using `mods.tconstruct.Fuel`

## Add Fuel Recipes

```JAVA
//mods.tconstruct.Fuel.registerFuel(ILiquidStack fuel, int duration);
mods.tconstruct.Fuel.registerFuel(<liquid:water> * 2, 300);
```

Parameters:

- [ILiquidStack](/Vanilla/Liquids/ILiquidStack/) fuel → The fluid. Amount is the minimal increment that is consumed at once.
- int duration → How many ticks the consumtpion of the fluidStack lasts.

### Consider this:

- The [ILiquidStack's](/Vanilla/Liquids/ILiquidStack/) amount is the minimal increment that is consumed at once (e.g. the smeltery only consumes 2 mB at once).
- The duration is how many ticks one fluid stack lasts.
- You cannot set the temperature the fluid is going to have in the smeltery. Use an [ILiquidDefinition's](/Vanilla/Liquids/ILiquidDefinition/) ZenSetter to change the fluid's temperature beforehand!