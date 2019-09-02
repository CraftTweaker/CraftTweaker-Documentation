# Fuel Registration

## Motorboat

### registerMotorboatFuel

| Type  | Datentyp                                     |
| ----- | -------------------------------------------- |
| Input | [Fluidstack](/Vanilla/Liquids/ILiquidStack/) |
| mB/t  | Integer                                      |

#### Beispielcode:

```JAVA
mods.immersivepetroleum.Motorboat.registerMotorboatFuel(ILiquidStack fuelEntry, int mbPerTick);
mods.immersivepetroleum.Motorboat.registerMotorboatFuel(<liquid:water>, 5);
```

## Portable Generator

### registerPortableGenFuel

| Type   | Datentyp                                     |
| ------ | -------------------------------------------- |
| Input  | [Fluidstack](/Vanilla/Liquids/ILiquidStack/) |
| Flux/t | Integer                                      |
| mB/t   | Integer                                      |

#### Beispielcode:

```JAVA
mods.immersivepetroleum.PortableGenerator.registerPortableGenFuel(ILiquidStack fuelEntry, int fluxPerTick, int mbPerTick);
mods.immersivepetroleum.PortableGenerator.registerPortableGenFuel(<liquid:water>, 2048, 50);
```