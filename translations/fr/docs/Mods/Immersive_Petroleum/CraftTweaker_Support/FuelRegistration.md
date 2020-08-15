# Fuel Registration

## Motorboat

### registerMotorboatFuel

| Type de texte | Type de données                              |
| ------------- | -------------------------------------------- |
| Input         | [Fluidstack](/Vanilla/Liquids/ILiquidStack/) |
| mB/t          | Nombre entier                                |

#### Code Example:

```zenscript
mods.immersivepetroleum.Motorboat.registerMotorboatFuel(ILiquidStack fuelEntry, int mbPerTick);
mods.immersivepetroleum.Motorboat.registerMotorboatFuel(<liquid:water>, 5);
```

## Portable Generator

### registerPortableGenFuel

| Type de texte | Type de données                              |
| ------------- | -------------------------------------------- |
| Input         | [Fluidstack](/Vanilla/Liquids/ILiquidStack/) |
| Flux/t        | Nombre entier                                |
| mB/t          | Nombre entier                                |

#### Code Example:

```zenscript
mods.immersivepetroleum.PortableGenerator.registerPortableGenFuel(ILiquidStack fuelEntry, int fluxPerTick, int mbPerTick);
mods.immersivepetroleum.PortableGenerator.registerPortableGenFuel(<liquid:water>, 2048, 50);
```