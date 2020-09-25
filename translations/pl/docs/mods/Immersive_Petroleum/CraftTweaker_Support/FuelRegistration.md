# Rejestracja paliwa

## GeneratorPaliwo rejestratora

| Nazwisko | Typ                                         |
| -------- | ------------------------------------------- |
| Płyn / t | [Fluidstack](/Vanilla/Liquids/IFluidStack/) |
| Flux/t   | Liczba całkowita                            |

Przykład:
```ZenScript
//mods.immersivePetum.FuelRegistry.registerGeneratorFuel(paliwo IFluidStack fuel, int fluxPerTick);

mods.immersivePetum.FuelRegistry.registerGeneratorFuel(<fluid:minecraft:water> * 180, 64); // Używanie 180mB na Tick
```

## registerMotorboatFuel

| Nazwisko | Typ                                         |
| -------- | ------------------------------------------- |
| Płyn / t | [Fluidstack](/Vanilla/Liquids/IFluidStack/) |

Przykład:
```ZenScript
//mods.immersivepetroum.FuelRegistry.registerMotorboatFuel(IFluidStack);

mods.immersivepetroleum um.FuelRegistry.registerMotorboatFuel(<fluid:minecraft:water> * 6); // Używanie 6mB na Tick
```
