# Machine à embouteiller

## Appeler le paquet

Vous pouvez appeler le paquet BottlingMachine en utilisant `mods.immersiveengineering.BottlingMachine`.

## Ajouter une recette

| Requis | Type de texte | Type de données                                    |
| ------ | ------------- | -------------------------------------------------- |
| Requis | Sortie        | [IItemstack](/Vanilla/Items/IItemStack/)           |
| Requis | Input         | [Ingrédient](/Vanilla/Variable_Types/IIngredient/) |
| Requis | Fluide        | [Fluidstack](/Vanilla/Liquids/ILiquidStack/)       |

### Exemple

```zenscript
//Exemple:
mods.immersiveengineering.BottlingMachine.addRecipe(IItemStack, Ingredient input, ILiquidStack fluid);
mods.immersiveengineering.BottlingMachine.addRecipe(<minecraft:diamond>, <ore:logWood>, <liquid:water>);
```

## Supprimer la recette

| Type de texte | Type de données                          |
| ------------- | ---------------------------------------- |
| Sortie        | [IItemstack](/Vanilla/Items/IItemStack/) |

### Exemple

```zenscript
//Exemple:
mods.immersiveengineering.BottlingMachine.removeRecipe(IItemStack output);
mods.immersiveengineering.BottlingMachine.removeRecipe(<minecraft:diamond>);
```