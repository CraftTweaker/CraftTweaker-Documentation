# Fuel Registration

## Motorboat

### registerMotorboatFuel

| 类型   | Datentyp                                     |
| ---- | -------------------------------------------- |
| 输入   | [Fluidstack](/Vanilla/Liquids/ILiquidStack/) |
| mB/t | 整型                                           |

#### Beispielcode:

```zenscript
mods.immersivepetroleum.Motorboat.registerMotorboatFuel(ILiquidStack fuelEntry, int mbPerTick);
mods.immersivepetroleum.Motorboat.registerMotorboatFuel(<liquid:water>, 5);
```

## Portable Generator

### registerPortableGenFuel

| 类型     | Datentyp                                     |
| ------ | -------------------------------------------- |
| 输入     | [Fluidstack](/Vanilla/Liquids/ILiquidStack/) |
| Flux/t | 整型                                           |
| mB/t   | 整型                                           |

#### Beispielcode:

```zenscript
mods.immersivepetroleum.PortableGenerator.registerPortableGenFuel(ILiquidStack fuelEntry, int fluxPerTick, int mbPerTick);
mods.immersivepetroleum.PortableGenerator.registerPortableGenFuel(<liquid:water>, 2048, 50);
```