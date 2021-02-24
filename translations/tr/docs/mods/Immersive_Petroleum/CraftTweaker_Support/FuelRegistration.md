# Fuel Registration

## registerGeneratorFuel

| Name    | Type                                        |
| ------- | ------------------------------------------- |
| Fluid/t | [Fluidstack](/Vanilla/Liquids/IFluidStack/) |
| Flux/t  | Integer                                     |

Example:
```ZenScript
//mods.immersivepetroleum.FuelRegistry.registerGeneratorFuel(IFluidStack fuel, int fluxPerTick);

mods.immersivepetroleum.FuelRegistry.registerGeneratorFuel(<fluid:minecraft:water> * 180, 64); // Using 180mB per Tick
```

## registerMotorboatFuel

| Name    | Type                                        |
| ------- | ------------------------------------------- |
| Fluid/t | [Fluidstack](/Vanilla/Liquids/IFluidStack/) |

Example:
```ZenScript
//mods.immersivepetroleum.FuelRegistry.registerMotorboatFuel(IFluidStack fuel);

mods.immersivepetroleum.FuelRegistry.registerMotorboatFuel(<fluid:minecraft:water> * 6); // Using 6mB per Tick
```
