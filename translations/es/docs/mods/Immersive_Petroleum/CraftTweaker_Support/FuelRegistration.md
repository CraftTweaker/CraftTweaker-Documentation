# Registro de Combustible

## Generador de Registros

| Nombre   | Tipo                                        |
| -------- | ------------------------------------------- |
| Fluido/t | [Fluidstack](/Vanilla/Liquids/IFluidStack/) |
| Flux/t   | Entero                                      |

Ejemplo:
```ZenScript
//mods.immersivepetroleum.FuelRegistry.registerGeneratorFuel(IFluidStack fuel, int fluxPerTick);

mods.immersivepetroleum.FuelRegistry.registerGeneratorFuel(<fluid:minecraft:water> * 180, 64); // Utilizando 180mB por Tick
```

## Carburante registrador

| Nombre   | Tipo                                        |
| -------- | ------------------------------------------- |
| Fluido/t | [Fluidstack](/Vanilla/Liquids/IFluidStack/) |

Ejemplo:
```ZenScript
//mods.immersivepetroleum.FuelRegistry.registerMotorboatFuel(combustible IFluidStack);

mods.immersivepetroleum.FuelRegistry.registerMotorboatFuel(<fluid:minecraft:water> * 6); // Utilizando 6mB por Tick
```
