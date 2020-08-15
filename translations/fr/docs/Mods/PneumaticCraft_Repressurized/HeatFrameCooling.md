# Refroidissement par cadre thermique

Le refroidissement de cadre thermique peut être utilisé pour transformer un objet en un autre en plaçant des objets dans un coffre ou un autre inventaire avec un cadre thermique, et le refroidir à moins de 0°C (communément à l'aide d'un tube Vortex).

## Appel en cours

Vous pouvez appeler le pack de refroidissement pour cadre thermique en utilisant `mods.pneumaticcraft.heatframeing`

## Enlèvement

Cette fonction supprime la première recette qu'elle trouve avec la sortie [IIngrédient](/Vanilla/Variable_Types/IIngredient/) ``:

```zenscript
mods.pneumaticcraft.heatframecooling.removeRecipe(IIngredient output);
// Exemple
mods.pneumaticcraft.heatframecooling.removeRecipe(<minecraft:obsidian>);
```

Cette fonction supprime *toutes les recettes* de refroidissement de cadre thermique :

```zenscript
mods.pneumaticcraft.heatframecooling.removeAllRecipes();
```

## Ajout en cours

Ces fonctions sont utilisées pour ajouter de nouvelles recettes pour le système de refroidissement à cadre thermique :

```zenscript
mods.pneumaticcraft.heatframecooling.addRecipe(IItemStack input, IItemStack output);
mods.pneumaticcraft.heatframecooling.addRecipe(IOreDictEntry input, IItemStack output);

// Example
mods.pneumaticcraft.heatframecooling.addRecipe(<minecraft:slime_ball>, <minecraft:snow_ball>);
```