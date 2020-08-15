# Kraftstoffregistrierung

## Motorboot

### registerMotorbootkraftstoff

| Type  | Datentyp                                     |
| ----- | -------------------------------------------- |
| Input | [Fluidstack](/Vanilla/Liquids/ILiquidStack/) |
| mB/t  | Ganzzahl                                     |

#### Beispielcode:

```zenscript
mods.immersivepetroleum.Motorboat.registerMotorboatFuel(ILiquidStack fuelEntry, int mbPerTick);
mods.immersivepetroleum.Motorboat.registerMotorboatFuel(<liquid:water>, 5);
```

## Tragbarer Generator

### registerPortableGenFuel

| Type   | Datentyp                                     |
| ------ | -------------------------------------------- |
| Input  | [Fluidstack](/Vanilla/Liquids/ILiquidStack/) |
| Flux/t | Ganzzahl                                     |
| mB/t   | Ganzzahl                                     |

#### Beispielcode:

```zenscript
mods.immersivepetroleum.PortableGenerator.registerPortableGenFuel(ILiquidStack fuelEntry, int fluxPerTick, int mbPerTick);
mods.immersivepetroleum.PortableGenerator.registerPortableGenFuel(<liquid:water>, 2048, 50);
```