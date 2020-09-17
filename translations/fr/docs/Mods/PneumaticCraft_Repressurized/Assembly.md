# Système d'assemblage robotisé

Le Système d’assemblage robotique est un ensemble multibloc composé du Contrôleur de Ruche, des Unités d'E/S de Ruche, de Plate-forme d’Ruche, du laser d’assemblage et du perçage d’assemblage. Il convertit les éléments d'entrée en sortie en utilisant le laser et/ou le perçage.

Il y a plusieurs fonctions pour ajouter et supprimer des recettes, selon que la recette nécessite l'utilisation du laser, de la foreuse ou des deux.

## Appel en cours

Vous pouvez appeler le paquet Ruche en utilisant `mods.pneumaticcraft.assembly`.

## Enlèvement

Ces fonctions suppriment la première recette qu'ils trouvent avec la sortie [IItemStack](/Vanilla/Items/IItemStack/) ``:

```zenscript
mods.pneumaticcraft.assembly.removeLaserRecipe(IItemStack output);
mods.pneumaticcraft.assembly.removeDrillRecipe(IItemStack output);
mods.pneumaticcraft.assembly.removeDrillLaserRecipe(IItemStack output);

// Examples
mods.pneumaticcraft.assembly.removeLaserRecipe(<pneumaticcraft:aphorism_tile>);
mods.pneumaticcraft.assembly.removeDrillRecipe(<pneumaticcraft:pressure_chamber_valve>);
```

Ces fonctions suppriment *toutes les recettes* actuellement définies pour le système de Ruche :

```zenscript
mods.pneumaticcraft.assembly.removeAllLaserRecipes();
mods.pneumaticcraft.removeAllDrillRecipes();
mods.pneumaticcraft.removeAllDrillLaserRecipes();
```

## Ajout en cours

Ces fonctions sont utilisées pour ajouter de nouvelles recettes pour le système d'assemblage :

```zenscript
mods.pneumaticcraft.assembly.addLaserRecipe(IItemStack input, IItemStack output)
mods.pneumaticcraft.assembly.addDrillRecipe(IItemStack input, IItemStack output)
mods.pneumaticcraft.assembly.addDrillLaserRecipe(IItemStack input, IItemStack output)

// Examples
mods.pneumaticcraft.assembly.addLaserRecipe(<pneumaticcraft:ingot_iron_compressed> * 2, <pneumaticcraft:compressed_iron_gear>);
```