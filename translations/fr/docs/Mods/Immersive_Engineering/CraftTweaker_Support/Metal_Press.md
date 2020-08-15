# Presse métallique

Le pack de presse métallique peut être utilisé pour ajouter/retirer des recettes de/vers la presse métallique d'ingénierie immersive.

## Appeler le paquet

Vous pouvez appeler le package MetalPress en utilisant `mods.immersiveengineering.MetalPress`.

## Ajouter une recette

| Requis | Type de texte | Type de données                                    |
| ------ | ------------- | -------------------------------------------------- |
| Requis | Sortie        | [IItemstack](/Vanilla/Items/IItemStack/)           |
| Requis | Input         | [Ingrédient](/Vanilla/Variable_Types/IIngredient/) |
| Requis | Mélanger      | [IItemstack](/Vanilla/Items/IItemStack/)           |
| Requis | Énergie       | Nombre entier                                      |
| Requis | Input Size    | Nombre entier                                      |

### Exemple

```zenscript
//Exemple:
mods.immersiveengineering.MetalPress.addRecipe(IItemStack, IIngredient input, IItemStack mold, int énergie, @Optional int inputSize);

mods. mmersiveengineering.MetalPress.addRecipe(<minecraft:diamond>, <ore:logWood>, <minecraft:emerald>, 2000);
mods.immersiveengineering.MetalPress.addRecipe(<minecraft:diamond>, <ore:logWood>, <minecraft:emerald>, 2000, 16);
```

## Supprimer la recette

| Type de texte | Type de données                          |
| ------------- | ---------------------------------------- |
| Sortie        | [IItemstack](/Vanilla/Items/IItemStack/) |

### Exemple

```zenscript
//Exemple:
mods.immersiveengineering.MetalPress.removeRecipe(IItemstack output);

mods.immersiveengineering.MetalPress.removeRecipe(<minecraft:diamond>);
```

## Supprimer par Mold

| Type de texte | Type de données                          |
| ------------- | ---------------------------------------- |
| Sortie        | [IItemstack](/Vanilla/Items/IItemStack/) |

### Exemple

```zenscript
//Exemple:
mods.immersiveengineering.MetalPress.removeRecipeByMold(IItemstack output);

mods.immersiveengineering.MetalPress.removeRecipeByMold(<minecraft:diamond>);
```