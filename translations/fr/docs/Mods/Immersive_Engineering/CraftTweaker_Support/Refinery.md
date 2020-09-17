# Raffinerie

Le paquet de la Ferronnerie peut être utilisé pour ajouter/supprimer des recettes vers/de la Ferronnerie Immersive.

## Appeler le paquet

Vous pouvez appeler le package Refinery en utilisant `mods.immersiveengineering.Refinery`.

## Ajouter une recette

| Requis | Type de texte | Type de données                              |
| ------ | ------------- | -------------------------------------------- |
| Requis | Sortie        | [Fluidstack](/Vanilla/Liquids/ILiquidStack/) |
| Requis | Input 1       | [Fluidstack](/Vanilla/Liquids/ILiquidStack/) |
| Requis | Input 2       | [Fluidstack](/Vanilla/Liquids/ILiquidStack/) |
| Requis | Énergie       | Nombre entier                                |

### Exemple

```zenscript
//Exemple
mods.immersiveengineering.Refinery.addRecipe(ILiquidStack, ILiquidStack input0, ILiquidStack input1, int energy);

mods.immersiveengineering.Refinery.addRecipe(<liquid:iron>, <liquid:water>, <liquid:lava>, 2048);
```

## Supprimer la recette

| Type de texte | Type de données                              |
| ------------- | -------------------------------------------- |
| Sortie        | [Fluidstack](/Vanilla/Liquids/ILiquidStack/) |

### Exemple

```zenscript
//Exemple
mods.immersiveengineering.Refinery.removeRecipe(ILiquidStack output);

mods.immersiveengineering.Refinery.removeRecipe(<liquid:iron>);
```