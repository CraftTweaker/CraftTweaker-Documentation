# Mixeur

Le paquet Mixer peut être utilisé pour ajouter/retirer des recettes de/vers le mixeur de génie immersif.

## Appeler le paquet

Vous pouvez appeler le package Mixer en utilisant `mods.immersiveengineering.Mixer`.

## Ajouter une recette

| Requis | Type de texte    | Type de données                                                        |
| ------ | ---------------- | ---------------------------------------------------------------------- |
| Requis | Sortie du Fluide | [Fluidstack](/Vanilla/Liquids/ILiquidStack/)                           |
| Requis | Fluid Input      | [Fluidstack](/Vanilla/Liquids/ILiquidStack/)                           |
| Requis | Item Inputs      | [Ingrédient](/Vanilla/Variable_Types/IIngredient/) en tant que tableau |
| Requis | Énergie          | Nombre entier                                                          |

### Exemple

```zenscript
//Exemple:
mods.immersiveengineering.Mixer.addRecipe(ILiquidStack, ILiquidStack fluidInput, IIngredient[] itemInputs, int energy);

mods.immersiveengineering.Mixer.addRecipe(<liquid:lava>, <liquid:water>, [<ore:logWood>, <minecraft:dirt>], 2048);
```

## Supprimer la recette

| Type de texte | Type de données                              |
| ------------- | -------------------------------------------- |
| Sortie        | [Fluidstack](/Vanilla/Liquids/ILiquidStack/) |

### Exemple

```zenscript
//Exemple:
mods.immersiveengineering.Mixer.removeRecipe(ILiquidStack output);

mods.immersiveengineering.Mixer.removeRecipe(<liquid:lava>);
```