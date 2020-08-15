# Usine de traitement thermopneumatique

L'usine de traitement thermopneumatique (TPP) utilise la pression et la chaleur pour convertir un fluide et/ou un ingrédient solide en un autre fluide. Les températures doivent être spécifiées en Kelvin: 273 K = 0°C (32°F), 373 K = 100°C (212°F).

*Techniquement, 273.16 K = 0°C, mais pour les besoins de ce mod il est simplifié en un entier décalage.*

## Appel en cours

Vous pouvez appeler le paquet TPP en utilisant `mods.pneumaticcraft.thermopneumaticprocessingplant`.

## Enlèvement

Cette fonction supprime la première recette qu'elle trouve avec la sortie [IIngrédient](/Vanilla/Variable_Types/IIngredient/) ``:

```zenscript
mods.pneumaticcraft.thermopneumaticprocessingplant.removeRecipe(IIngredient output);
// Exemple
mods.pneumaticcraft.thermopneumaticprocessingplant.removeRecipe(<liquid:lpg>);
```

Cette fonction supprime *toutes les recettes* TPP :

```zenscript
mods.pneumaticcraft.thermopneumaticprocessingplant.removeAllRecipes();
```

## Ajout en cours

Les fonctions suivantes peuvent être utilisées pour ajouter des recettes au TPP :

```zenscript
// Ajoute une recette qui convertit un élément d'entrée en un fluide de sortie
mods.pneumaticcraft.thermopneumaticprocessingplant. ddRecipe(IItemStack itemInput, double pression, double température, sortie ILiquidStack) ;

// Ajoute une recette qui convertit un fluide d'entrée et un élément en un fluide de sortie (l'élément peut être null)
mods. neumaticcraft.thermopneumaticprocessingplant.addRecipe(ILiquidStack liquidInput, IItemStack itemInput, double pression, double température, ILiquidStack output);

// Exemple: convertir l'eau et la redstone en un liquide redstone à 3. bar et 473K (200C)
mods.pneumaticcraft.thermopneumaticprocessingplant.addRecipe(<liquid:water>, <item:redstone>, 3. , 473, <liquid:redstone> * 250);
// Exemple: convertir de l'huile de 10mB en lave de 5mB à 3.0 bar et 473K
mods.pneumaticcraft.thermopneumaticprocessingplant. ddRecipe(<liquid:oil> * 10, null, 3.0, 473, <liquid:lava> * 5);
// Exemple: convert 1 netherrack into 50mB lava at 1. bar et 573K
mods.pneumaticcraft.thermopneumaticprocessingplant.addRecipe(<minecraft:netherrack>, 1.5, 573, <liquid:lava> * 50);
```