# Fuel Registration

## Generador de Registros

| Name     | Type                                        |
| -------- | ------------------------------------------- |
| Fluido/t | [Fluidstack](/Vanilla/Liquids/IFluidStack/) |
| Flux/t   | Integer                                     |

Example:
```ZenScript
//mods.immersivepetroleum.FuelRegistry.registerGeneratorFuel(IFluidStack fuel, int fluxPerTick);

mods.immersivepetroleum.FuelRegistry.registerGeneratorFuel(<fluid:minecraft:water> * 180, 64); // Utilizando 180mB por Tick
```

## registerMotorboatFuel

| Name     | Type                                        |
| -------- | ------------------------------------------- |
| Fluido/t | [Fluidstack](/Vanilla/Liquids/IFluidStack/) |

Example:
```ZenScript
//mods.immersivepetroleum.FuelRegistry.registerMotorboatFuel(combustible IFluidStack);

mods.immersivepetroleum.FuelRegistry.registerMotorboatFuel(<fluid:minecraft:water> * 6); // Utilizando 6mB por Tick
```
