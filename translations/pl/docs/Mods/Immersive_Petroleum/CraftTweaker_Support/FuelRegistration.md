# Rejestracja paliwa

## Łodzie motorowe

### registerMotorboatFuel

| Typ   | Typ danych                                   |
| ----- | -------------------------------------------- |
| Input | [Fluidstack](/Vanilla/Liquids/ILiquidStack/) |
| mB/t  | Liczba całkowita                             |

#### Przykład kodu:

```zenscript
mods.immersivePetum.Motorboat.registerMotorboatFuel(ILiquidStack fuelEntry, int mbPerTick);
mods.immersivePetum.Motorboat.registerMotorboatFuel(<liquid:water>, 5);
```

## Przenośny generator

### registerPortableGenFuel

| Typ    | Typ danych                                   |
| ------ | -------------------------------------------- |
| Input  | [Fluidstack](/Vanilla/Liquids/ILiquidStack/) |
| Flux/t | Liczba całkowita                             |
| mB/t   | Liczba całkowita                             |

#### Przykład kodu:

```zenscript
mods.immersivePetum.PortableGenerator.registerPortableGenFuel(ILiquidStack fuelEntry, int fluxPerTick, int mbPerTick);
mods.immersiveoilum.PortableGenerator.registerPortableGenFuel(<liquid:water>, 2048, 50);
```