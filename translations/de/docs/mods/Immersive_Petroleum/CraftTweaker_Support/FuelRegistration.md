# Kraftstoffregistrierung

## registerGeneratorbenzin

| Name          | Type                                        |
| ------------- | ------------------------------------------- |
| Flüssigkeit/t | [Fluidstack](/Vanilla/Liquids/IFluidStack/) |
| Flux/t        | Ganzzahl                                    |

Beispiel:
```ZenScript
//mods.immersivepetroleum.FuelRegistry.registerGeneratorFuel(IFluidStack Kraftstoff, int fluxPerTick);

mods.immersivepetroleum.FuelRegistry.registerGeneratorFuel(<fluid:minecraft:water> * 180, 64); // Verwendung von 180mB pro Tick
```

## registerMotorbootkraftstoff

| Name          | Type                                        |
| ------------- | ------------------------------------------- |
| Flüssigkeit/t | [Fluidstack](/Vanilla/Liquids/IFluidStack/) |

Beispiel:
```ZenScript
//mods.immersivepetroleum.FuelRegistry.registerMotorboatFuel(IFluidStack Treibstoff);

mods.immersivepetroleum.FuelRegistry.registerMotorboatFuel(<fluid:minecraft:water> * 6); // Verwendung von 6mB pro Tick
```
