# Регистрация топлива

## Топливо регистратора

| Название   | Тип                                         |
| ---------- | ------------------------------------------- |
| Жидкости/т | [Fluidstack](/Vanilla/Liquids/IFluidStack/) |
| Flux/t     | Целое                                       |

Пример:
```ZenScript
//mods.immersivepetroleum.FuelRegistry.registerGeneratorFuel(IFluidStack fuel, int fluxPerTick);

mods.immersivepetroleum.FuelRegistry.registerGeneratorFuel(<fluid:minecraft:water> * 180, 64); // Использование 180mB per Tick
```

## Реестр моторного топлива

| Название   | Тип                                         |
| ---------- | ------------------------------------------- |
| Жидкости/т | [Fluidstack](/Vanilla/Liquids/IFluidStack/) |

Пример:
```ZenScript
//mods.immersivepetroleum.FuelRegistry.registerMotorboatFuel(IFluidStack топливо);

mods.immersivepetroleum.FuelRegistry.registerMotorboatFuel(<fluid:minecraft:water> * 6); // Использование 6mB per Tick
```
