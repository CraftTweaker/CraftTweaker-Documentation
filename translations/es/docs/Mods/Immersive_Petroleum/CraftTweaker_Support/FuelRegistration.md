# Fuel Registration

## Motorboat

### registerMotorboatFuel

| Tipo  | Tipo de Datos                                |
| ----- | -------------------------------------------- |
| Input | [Fluidstack](/Vanilla/Liquids/ILiquidStack/) |
| mB/t  | Entero                                       |

#### Code Example:

```zenscript
mods.immersivepetroleum.Motorboat.registerMotorboatFuel(ILiquidStack fuelEntry, int mbPerTick);
mods.immersivepetroleum.Motorboat.registerMotorboatFuel(<liquid:water>, 5);
```

## Portable Generator

### registerPortableGenFuel

| Tipo   | Tipo de Datos                                |
| ------ | -------------------------------------------- |
| Input  | [Fluidstack](/Vanilla/Liquids/ILiquidStack/) |
| Flux/t | Entero                                       |
| mB/t   | Entero                                       |

#### Code Example:

```zenscript
mods.immersivepetroleum.PortableGenerator.registerPortableGenFuel(ILiquidStack fuelEntry, int fluxPerTick, int mbPerTick);
mods.immersivepetroleum.PortableGenerator.registerPortableGenFuel(<liquid:water>, 2048, 50);
```