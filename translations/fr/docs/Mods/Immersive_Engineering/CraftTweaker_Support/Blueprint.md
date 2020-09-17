# Schéma

Le pack d'artisanat de plans peut être utilisé pour ajouter/retirer des recettes à/de l'artisanat de plans de génie immersif.

## PPS

La chaîne [Catégorie](/Mods/Immersive_Engineering/Variables/Categories/) est assez spéciale. Pour toute chaîne saisie qui n'a pas encore de catégorie établie, elle créera une nouvelle catégorie et donc un nouveau plan. Cela signifie que vous pouvez ajouter une catégorie de plans appelée « Crêpes de bananes » qui fournit des « Recettes alimentaires ». Après la première entrée trouvée, il générera toutes les recettes supplémentaires pour cette chaîne de catégorie sous la catégorie générée.

## Appeler le paquet

Vous pouvez appeler le Pack de Plan en utilisant `mods.immersiveengineering.Blueprint`.

## Ajouter une recette

| Requis | Type de texte | Type de données                                                       |
| ------ | ------------- | --------------------------------------------------------------------- |
| Requis | Catégorie     | Chaîne [Catégorie](/Mods/Immersive_Engineering/Variables/Categories/) |
| Requis | Sortie        | [IItemstack](/Vanilla/Items/IItemStack/)                              |
| Requis | Inputs        | [Ingrédient](/Vanilla/Variable_Types/IIngredient/)                    |

### Exemple

```zenscript
//Exemple:
mods.immersiveengineering.Blueprint.addRecipe(String category, IItemStack output, IIngredient[] inputs);

//Using an existing Category String
mods.immersiveengineering.Blueprint. ddRecipe("composents", <minecraft:diamond>, [<ore:logWood>, <minecraft:dirt>]);

//Utiliser une nouvelle chaîne de catégories (Cela génère un nouvel élément de plan)
mods. mmersiveengineering.Blueprint.addRecipe("Banana Pances", <minecraft:diamond>, [<ore:logWood>, <minecraft:dirt>]);
```

## Supprimer la recette

| Type de texte | Type de données                          |
| ------------- | ---------------------------------------- |
| Sortie        | [IItemstack](/Vanilla/Items/IItemStack/) |

### Exemple:

```zenscript
//Exemple:
mods.immersiveengineering.Blueprint.removeRecipe(IItemStack output);
mods.immersiveengineering.Blueprint.removeRecipe(<minecraft:diamond>);
```