# Registrazione Carburante

## registrazioneGeneratorCombustibile

| Nome     | Tipo                                        |
| -------- | ------------------------------------------- |
| Fluido/t | [Fluidstack](/Vanilla/Liquids/IFluidStack/) |
| Flux/t   | Intero                                      |

Esempio:
```ZenScript
//mods.immersivepetroleum.FuelRegistry.registerGeneratorFuel(IFluidStack fuel, int fluxPerTick);

mods.immersivepetroleum.FuelRegistry.registerGeneratorFuel(<fluid:minecraft:water> * 180, 64); // Using 180mB per Tick
```

## registrazioneMotoreCarburante

| Nome     | Tipo                                        |
| -------- | ------------------------------------------- |
| Fluido/t | [Fluidstack](/Vanilla/Liquids/IFluidStack/) |

Esempio:
```ZenScript
//mods.immersivepetroleum.FuelRegistry.registerMotorboatFuel(IFluidStack fuel);

mods.immersivepetroleum.FuelRegistry.registerMotorboatFuel(<fluid:minecraft:water> * 6); // Using 6mB per Tick
```
