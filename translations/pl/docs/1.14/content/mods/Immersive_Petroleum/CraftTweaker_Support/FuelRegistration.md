# Fuel Registration

## GeneratorPaliwo rejestratora

| Name     | Type       |
| -------- | ---------- |
| Płyn / t | Fluidstack |
| Flux/t   | Integer    |

Example:
```ZenScript
//mods.immersivePetum.FuelRegistry.registerGeneratorFuel(paliwo IFluidStack fuel, int fluxPerTick);

mods.immersivePetum.FuelRegistry.registerGeneratorFuel(<fluid:minecraft:water> * 180, 64); // Używanie 180mB na Tick
```

## registerMotorboatFuel

| Name     | Type       |
| -------- | ---------- |
| Płyn / t | Fluidstack |

Example:
```ZenScript
//mods.immersivepetroum.FuelRegistry.registerMotorboatFuel(IFluidStack);

mods.immersivepetroleum um.FuelRegistry.registerMotorboatFuel(<fluid:minecraft:water> * 6); // Używanie 6mB na Tick
```
