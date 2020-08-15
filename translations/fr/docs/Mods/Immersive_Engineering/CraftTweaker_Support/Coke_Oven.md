# Four à coke

## Appeler le paquet

Vous pouvez appeler le package CokeOven en utilisant `mods.immersiveengineering.CokeOven`.

## Ajouter une recette

| Requis | Type de texte       | Type de données                                    |
| ------ | ------------------- | -------------------------------------------------- |
| Requis | Sortie              | [IItemstack](/Vanilla/Items/IItemStack/)           |
| Requis | Sortie de Carburant | Nombre entier                                      |
| Requis | Input               | [Ingrédient](/Vanilla/Variable_Types/IIngredient/) |
| Requis | Date et heure       | Nombre entier                                      |

### Exemple

```zenscript
//Exemple:
mods.immersiveengineering.CokeOven.addRecipe(IItemStack, int fuelOutput, IIngredient input, int time);
mods.immersiveengineering.CokeOven.addRecipe(<minecraft:coal>, 2, <ore:logWood>, 2000);
```

## Supprimer la recette

| Type de texte | Type de données                          |
| ------------- | ---------------------------------------- |
| Sortie        | [IItemstack](/Vanilla/Items/IItemStack/) |

### Exemple:

```zenscript
//Exemple:
mods.immersiveengineering.CokeOven.removeRecipe(IItemStack output);
mods.immersiveengineering.CokeOven.removeRecipe(<minecraft:diamond>);
```