# Chambre de Pression

La Chambre de pression est une structure multibloc qui utilise de l'air comprimé pour convertir un ou plusieurs éléments d'entrée en un ou plusieurs éléments de sortie. Les recettes de chambre de pression ont une valeur de pression associée, qui est la pression d'air dans la barre requise pour effectuer la conversion.

## Appel en cours

Vous pouvez appeler le package de la Chambre de Pression en utilisant `mods.pneumaticcraft.pressurechamber`.

## Enlèvement

Cette fonction supprime la première recette qu'elle trouve avec le tableau [IItemStack](/Vanilla/Items/IItemStack/) `fournit`:

```zenscript
mods.pneumaticcraft.pressurechamber.removeRecipe(IItemStack[] sorties);
// Exemple
mods.pneumaticcraft.pressurechamber.removeRecipe([<pneumaticcraft:ingot_iron_compressed>]);
```

Cette fonction supprime *toutes les recettes* de la chambre de pression :

```zenscript
mods.pneumaticcraft.pressurechamber.removeAllRecipes();
```

## Ajout en cours

Cette fonction est utilisée pour ajouter de nouvelles recettes à la chambre de pression :

```zenscript
mods.pneumaticcraft.pressurechamber.addRecipe(IIngredient[] entrées, pression double, IItemStack[] sorties);

// Exemple
mods.pneumaticcraft.pressurechamber.addRecipe([<minecraft:gold_ingot> * 2,<minecraft:apple>], 2.0, [<minecraft:golden_apple>]);
```