# Crusher

The Crusher package can be used to add/remove recipes to/from the Immersive Engineering Crusher.

## Calling The Package

You can call the Crusher package using `mods.immersiveengineering.Crusher`.

## Ajouter une recette

| Required  | Type de texte    | Type de données                                    |
| --------- | ---------------- | -------------------------------------------------- |
| Required  | Sortie           | [IItemStack](/Vanilla/Items/IItemStack/)           |
| Required  | Input            | [Ingrédient](/Vanilla/Variable_Types/IIngredient/) |
| Required  | Energy           | Indice                                             |
| Optionnel | Secondary Output | [IItemStack](/Vanilla/Items/IItemStack/)           |
| Optionnel | Secondary Chance | double                                             |

### Exemple

```zenscript
//Example:
mods.immersiveengineering.Crusher.addRecipe(IItemStack output, IIngredient input, int energy, @Optional IItemStack secondaryOutput, @Optional double secondaryChance);

mods.immersiveengineering.Crusher.addRecipe(<minecraft:diamond>, <ore:logWood>, 2048);
mods.immersiveengineering.Crusher.addRecipe(<minecraft:diamond>, <ore:logWood>, 2048, <minecraft:dirt>);
mods.immersiveengineering.Crusher.addRecipe(<minecraft:diamond>, <ore:logWood>, 2048, <minecraft:dirt>, 0.5);
```

## Remove Recipe by Output

| Type de texte | Type de données                          |
| ------------- | ---------------------------------------- |
| Sortie        | [IItemstack](/Vanilla/Items/IItemStack/) |

### Exemple

```zenscript
//Example:
mods.immersiveengineering.Crusher.removeRecipe(IItemstack output);

mods.immersiveengineering.Crusher.removeRecipe(<minecraft:diamond>);
```

## Remove Recipe By Input

| Type de texte | Type de données                          |
| ------------- | ---------------------------------------- |
| Input         | [IItemstack](/Vanilla/Items/IItemStack/) |

### Exemple

```zenscript
//Example:
mods.immersiveengineering.Crusher.removeRecipesForInput(IItemstack input);

mods.immersiveengineering.Crusher.removeRecipesForInput(<minecraft:diamond>);
```