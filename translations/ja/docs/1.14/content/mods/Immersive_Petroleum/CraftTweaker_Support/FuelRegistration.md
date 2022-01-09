# Fuel Registration

## registerGeneratorFuel

| 名称     | Type       |
| ------ | ---------- |
| 流体/t   | Fluidstack |
| Flux/t | Integer    |

Example:
```ZenScript
//mods.immersivepetroleum.FuelRegistry.registerGeneratorFuel(IFluidStack fuel, int fluxPerTick);

mods.immysivepetroleum.FuelRegistry.registerGeneratorFuel(<fluid:minecraft:water> * 180, 64); // Tick あたりの180mB の使用
```

## registerMotorboatFuel

| 名称   | Type       |
| ---- | ---------- |
| 流体/t | Fluidstack |

Example:
```ZenScript
//mods.immersivepetroleum.FuelRegistry.registerMotorboatFuel(IFluidStack燃料);

mods.immysivepetroleum.FuelRegistry.registerMotorboatFuel(<fluid:minecraft:water> * 6); // Using 6mB per Tick
```
