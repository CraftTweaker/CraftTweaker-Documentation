# Registro de Combustible

## Barco de motor

### Carburante registrador

| Tipo  | Tipo de Datos                                |
| ----- | -------------------------------------------- |
| Input | [Fluidstack](/Vanilla/Liquids/ILiquidStack/) |
| mB/t  | Entero                                       |

#### Ejemplo de código:

```zenscript
mods.immersivepetroleum.Motorboat.registerMotorboatFuel(ILiquidStack fuelEntry int, int mbPerTick);
mods.immersivepetroleum.Motorboat.registerMotorboatFuel(<liquid:water>, 5);
```

## Generador portátil

### registerPortableGenFuel

| Tipo   | Tipo de Datos                                |
| ------ | -------------------------------------------- |
| Input  | [Fluidstack](/Vanilla/Liquids/ILiquidStack/) |
| Flux/t | Entero                                       |
| mB/t   | Entero                                       |

#### Ejemplo de código:

```zenscript
mods.immersivepetroleum.PortableGenerator.registerPortableGenFuel(ILiquidStack fuelEntry, int fluxPerTick, int mbPerTick);
mods.immersivepetroleum.PortableGenerator.registerPortableGenFuel(<liquid:water>, 2048, 50);
```