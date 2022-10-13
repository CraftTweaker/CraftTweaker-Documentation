# Fuel Registration

## Inscrire le Carburant

| Name     | Type       |
| -------- | ---------- |
| Fluide/t | Fluidstack |
| Flux/t   | Integer    |

Example:
```ZenScript
//mods.immersivepetroleum.FuelRegistry.registerGeneratorFuel(IFluidStack fuel, int fluxPerTick);

mods.immersivepetroleum.FuelRegistry.registerGeneratorFuel(<fluid:minecraft:water> * 180, 64); // Using 180mB per Tick
```

## registerMotorboatFuel

| Name     | Type       |
| -------- | ---------- |
| Fluide/t | Fluidstack |

Example:
```ZenScript
//mods.immersivepetroleum.FuelRegistry.registerboatFuel(IFluidStack carburant);

mods.immersivepetroleum.FuelRegistry.registerboatFuel(<fluid:minecraft:water> * 6); // Utilisation de 6mB par Tick
```
