# Регистрация топлива

## Моторная лодка

### Реестр моторного топлива

| Тип   | Тип данных                                   |
| ----- | -------------------------------------------- |
| Input | [Fluidstack](/Vanilla/Liquids/ILiquidStack/) |
| мБ/т  | Целое                                        |

#### Пример кода:

```zenscript
mods.immersivepetroleum.Motorboat.registerMotorboatFuel(ILiquidStack fuel Entry, int mbPerTick);
mods.immersivepetroleum.Motorboat.registerMotorboatFuel(<liquid:water>, 5);
```

## Портативный генератор

### Переносное топливо

| Тип    | Тип данных                                   |
| ------ | -------------------------------------------- |
| Input  | [Fluidstack](/Vanilla/Liquids/ILiquidStack/) |
| Flux/t | Целое                                        |
| мБ/т   | Целое                                        |

#### Пример кода:

```zenscript
mods.immersivepetroleum.PortableGenerator.registerPortableGenFuel(ILiquidStack fuelEntry, int fluxPerTick, int mbPerTick);
mods.immersivepetroleum.PortableGenerator.registerPortableGenFuel(<liquid:water>, 2048, 50);
```