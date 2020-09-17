# Haut fourneau

L'ensemble de fours explosifs peut être utilisé pour ajouter/retirer des recettes/combustibles vers/depuis le four de génie immersif.

## Appeler le paquet

Vous pouvez appeler le paquet BlastFurnace en utilisant `mods.immersiveengineering.BlastFurnace`.

## Ajouter une recette :

| Requis    | Type de texte | Type de données                                    |
| --------- | ------------- | -------------------------------------------------- |
| Requis    | Sortie        | [IItemstack](/Vanilla/Items/IItemStack/)           |
| Requis    | Input         | [Ingrédient](/Vanilla/Variable_Types/IIngredient/) |
| Requis    | Date et heure | Nombre entier                                      |
| Optionnel | Slag          | [IItemstack](/Vanilla/Items/IItemStack/)           |

### Exemple

```zenscript
//Exemple:
mods.immersiveengineering.BlastFurnace.addRecipe(IItemStack, Ingredient input, int time, @Optional IItemStack slag);
mods.immersiveengineering. lastFurnace.addRecipe(<minecraft:diamond>, <ore:logWood>, 2000);
mods.immersiveengineering.BlastFurnace.addRecipe(<minecraft:diamond>, <ore:logWood>, 2000, <minecraft:dirt>);
```

## Supprimer la recette

| Type de texte | Type de données                          |
| ------------- | ---------------------------------------- |
| Sortie        | [IItemstack](/Vanilla/Items/IItemStack/) |

### Exemple:

```zenscript
//Exemple:
mods.immersiveengineering.BlastFurnace.removeRecipe(IItemStack output);
mods.immersiveengineering.BlastFurnace.removeRecipe(<minecraft:diamond>;
```

## Ajouter du carburant

| Requis | Type de texte | Type de données                                    |
| ------ | ------------- | -------------------------------------------------- |
| Requis | Input         | [Ingrédient](/Vanilla/Variable_Types/IIngredient/) |
| Requis | Date et heure | Nombre entier                                      |

### Exemple

```zenscript
//Exemple:
mods.immersiveengineering.BlastFurnace.addFuel(IIngredient input, temps d'int);
mods.immersiveengineering.BlastFurnace.addFuel(<ore:plankWood>, 2000);
```

## Retirer le carburant

| Requis | Type de texte | Type de données                          |
| ------ | ------------- | ---------------------------------------- |
| Requis | Sortie        | [IItemstack](/Vanilla/Items/IItemStack/) |

### Exemple

```zenscript
//Exemple:
mods.immersiveengineering.BlastFurnace.removeFuel(IItemStack sortie);
mods.immersiveengineering.BlastFurnace.removeFuel(<minecraft:planks>);
```