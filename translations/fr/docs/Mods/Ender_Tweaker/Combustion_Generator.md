# Générateur de Combustion

## Paquet

`Importer mods.enderio.CombustionGen;`

## Méthodes

- **[ILiquidStack](/Vanilla/Liquids/ILiquidStack/) combustible** Le carburant fluide à ajouter.
- **int powerPerCycleRF** Quantité d'énergie créée par tick dans une machine en ligne de base.
- **int totalBurnTime** Temps de combustion total d'un seau de carburant.
- **[ILiquidStack](/Vanilla/Liquids/ILiquidStack/) de refroidissement** Le fluide de refroidissement à ajouter.
- **float degreesCoolingPerMB** Combien de chaleur dans le générateur peut un mB du refroidisseur ajouté absorber jusqu'à ce qu'il chauffe tout le chemin ?

## Ajouter du carburant

```zenscript
mods.enderio.CombustionGen.addFuel(ILiquidStack fuel, int powerPerCycleRF, int totalBurnTime);

mods.enderio.CombustionGen.addFuel(<liquid:lava>, 25, 40);
```

## Ajouter un refroidisseur

```zenscript
mods.enderio.CombustionGen.addCoolant(ILiquidStack liquide refroidisseur, float degreesCoolingPerMB);

mods.enderio.CombustionGen.addCoolant(<liquid:liquid_sunshine>, 100);
```

## Retirer le carburant

```zenscript
mods.enderio.CombustionGen.removeFuel(ILiquidStack fuel);

mods.enderio.CombustionGen.removeFuel(<liquid:fire_water>);
```

## Retirer le Refroidissement

```zenscript
mods.enderio.AlloySmelter.removeCoolant(ILiquidStack coolant);

mods.enderio.AlloySmelter.removeCoolant(<liquid:water>);
```