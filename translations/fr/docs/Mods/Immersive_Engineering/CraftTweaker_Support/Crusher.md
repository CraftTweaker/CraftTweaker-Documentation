# Broyeur

Le paquet Broyeur peut être utilisé pour ajouter/retirer des recettes de/de/depuis le broyeur d'ingénierie immersif.

## Appeler le paquet

Vous pouvez appeler le paquet Crusher en utilisant `mods.immersiveengineering.Crusher`.

## Ajouter une recette

| Requis    | Type de texte     | Type de données                                    |
| --------- | ----------------- | -------------------------------------------------- |
| Requis    | Sortie            | [IItemStack](/Vanilla/Items/IItemStack/)           |
| Requis    | Input             | [Ingrédient](/Vanilla/Variable_Types/IIngredient/) |
| Requis    | Énergie           | Indice                                             |
| Optionnel | Sortie secondaire | [IItemStack](/Vanilla/Items/IItemStack/)           |
| Optionnel | Chance secondaire | double                                             |

### Exemple

```zenscript
//Exemple:
mods.immersiveengineering.Crusher.addRecipe(sortie IItemStack, entrée IIngredient, int énergie, @Optional IItemStack secondaryOutput, @Optional double secondaryChance);

mods.immersiveengineering.Crusher. ddRecipe(<minecraft:diamond>, <ore:logWood>, 2048 );
mods.immersiveengineering.Crusher.addRecipe(<minecraft:diamond>, <ore:logWood>, 2048, <minecraft:dirt>);
mods. mmersiveengineering.Crusher.addRecipe(<minecraft:diamond>, <ore:logWood>, 2048, <minecraft:dirt>, 0.5);
```

## Supprimer la recette par sortie

| Type de texte | Type de données                          |
| ------------- | ---------------------------------------- |
| Sortie        | [IItemstack](/Vanilla/Items/IItemStack/) |

### Exemple

```zenscript
//Exemple:
mods.immersiveengineering.Crusher.removeRecipe(IItemstack output);

mods.immersiveengineering.Crusher.removeRecipe(<minecraft:diamond>);
```

## Supprimer la recette par entrée

| Type de texte | Type de données                          |
| ------------- | ---------------------------------------- |
| Input         | [IItemstack](/Vanilla/Items/IItemStack/) |

### Exemple

```zenscript
//Exemple:
mods.immersiveengineering.Crusher.removeRecipesForInput(IItemstack input);

mods.immersiveengineering.Crusher.removeRecipesForInput(<minecraft:diamond>);
```