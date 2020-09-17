# Assistant Diesel

Le paquet Diesel Handler peut être utilisé pour changer les carburants IE.

## Appeler le paquet

Vous pouvez appeler le package DieselHandler en utilisant `mods.immersiveengineering.DieselHandler`.

## Ajouter du carburant

| Requis | Type de texte | Type de données                              |
| ------ | ------------- | -------------------------------------------- |
| Requis | Sortie        | [Fluidstack](/Vanilla/Liquids/ILiquidStack/) |
| Requis | Input         | Nombre entier                                |

### Exemple

```zenscript
//Exemple:
mods.immersiveengineering.DieselHandler.addFuel(ILiquidStack carburant, temps d'int);

mods.immersiveengineering.DieselHandler.addFuel(<liquid:water>, 2000);
```

## Retirer le carburant

| Requis | Type de texte | Type de données                              |
| ------ | ------------- | -------------------------------------------- |
| Requis | Sortie        | [Fluidstack](/Vanilla/Liquids/ILiquidStack/) |

### Exemple

```zenscript
//Exemple:
mods.immersiveengineering.DieselHandler.removeFuel(ILiquidStack fuel);

mods.immersiveengineering.DieselHandler.removeFuel(<liquid:water>);
```

## Ajouter le Carburant d'Entraînement

| Requis | Type de texte | Type de données                              |
| ------ | ------------- | -------------------------------------------- |
| Requis | Sortie        | [Fluidstack](/Vanilla/Liquids/ILiquidStack/) |

### Exemple

```zenscript
//Exemple:
mods.immersiveengineering.DieselHandler.addDrillFuel(ILiquidStack fuel);

mods.immersiveengineering.DieselHandler.addDrillFuel(<liquid:water>);
```

## Retirer le Carburant d'Entraînement

| Requis | Type de texte | Type de données                              |
| ------ | ------------- | -------------------------------------------- |
| Requis | Sortie        | [Fluidstack](/Vanilla/Liquids/ILiquidStack/) |

### Exemple

```zenscript
//Exemple:
mods.immersiveengineering.DieselHandler.removeDrillFuel(ILiquidStack fuel);

mods.immersiveengineering.DieselHandler.removeDrillFuel(<liquid:water>);
```