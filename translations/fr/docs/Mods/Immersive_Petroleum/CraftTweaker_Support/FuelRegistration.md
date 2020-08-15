# Enregistrement du carburant

## Bateau à moteur

### Enregistrer le Carburant Moto

| Type de texte | Type de données                              |
| ------------- | -------------------------------------------- |
| Input         | [Fluidstack](/Vanilla/Liquids/ILiquidStack/) |
| mB/t          | Nombre entier                                |

#### Exemple de Code :

```zenscript
mods.immersivepetroleum.Motorboat.registerMotorboatFuel(ILiquidStack fuelEntry, int mbPerTick);
mods.immersivepetroleum.Motorboat.registerMotorboatFuel(<liquid:water>, 5);
```

## Générateur Portable

### Registre de Carburant Gentable

| Type de texte | Type de données                              |
| ------------- | -------------------------------------------- |
| Input         | [Fluidstack](/Vanilla/Liquids/ILiquidStack/) |
| Flux/t        | Nombre entier                                |
| mB/t          | Nombre entier                                |

#### Exemple de Code :

```zenscript
mods.immersivepetroleum.PortableGenerator.registerPortableGenFuel(ILiquidStack fuelEntry, int fluxPerTick, int mbPerTick);
mods.immersivepetroleum.PortableGenerator.registerPortableGenFuel(<liquid:water>, 2048, 50);
```