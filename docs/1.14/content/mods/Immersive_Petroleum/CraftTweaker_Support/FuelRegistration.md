# Fuel Registration

## registerGeneratorFuel

| Name   | Type                                        |
|--------|---------------------------------------------|
| Fluid/t| Fluidstack |
| Flux/t | Integer                                     |

Example:
```zenscript
//mods.immersivepetroleum.FuelRegistry.registerGeneratorFuel(IFluidStack fuel, int fluxPerTick);

mods.immersivepetroleum.FuelRegistry.registerGeneratorFuel(<fluid:minecraft:water> * 180, 64); // Using 180mB per Tick
```

## registerMotorboatFuel

| Name    | Type                                        |
|---------|---------------------------------------------|
| Fluid/t | Fluidstack |

Example:
```zenscript
//mods.immersivepetroleum.FuelRegistry.registerMotorboatFuel(IFluidStack fuel);

mods.immersivepetroleum.FuelRegistry.registerMotorboatFuel(<fluid:minecraft:water> * 6); // Using 6mB per Tick
```
