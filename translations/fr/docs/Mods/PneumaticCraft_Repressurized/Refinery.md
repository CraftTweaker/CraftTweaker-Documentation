# Raffinerie

La Refinery est une structure multibloc qui utilise la chaleur pour convertir un fluide d'entrée en deux ou plusieurs fluides de sortie. Le multibloc se compose de deux à quatre blocs de raffinerie (inclus) et le nombre de fluides de production possibles est limité par le nombre de blocs de raffinerie dans la structure.

Avant le PneumaticCraft: Repressurisé v0.9.0, la température minimale de toute recette de Refinerie (c'est-à-dire la température à laquelle commence le traitement) était toujours de 373K, ou de 100°C. Cependant, en v0.9.0 et plus tard, il est possible de spécifier une température minimale lors de l'ajout d'une recette Refinery .

La raffinerie commencera à traiter les liquides à la température minimale de la recette, et fonctionnera plus rapidement à mesure que la température augmente.

Notez qu'il est possible d'avoir deux recettes ou plus avec la même entrée, à condition que le nombre de sorties soit différent. Dans ce cas, la recette produisant les sorties les plus possibles (compte tenu du nombre de blocs de raffinerie dans le multibloc) sera utilisée.

## Appel en cours

Vous pouvez appeler le package Refinery en utilisant `mods.pneumaticcraft.refinery`.

## Enlèvement

Cette fonction supprime la première recette qu'elle trouve qui correspond à tous les [ingrédients](/Vanilla/Variable_Types/IIngredient/) `envoyés`:

```zenscript
mods.pneumaticcraft.refinery.removeRecipe(IIngredient[] sorties);
```

Cette fonction supprime la première recette qu'elle trouve qui correspond à l'entrée [Ingrédient](/Vanilla/Variable_Types/IIngredient/) ``:

```zenscript
mods.pneumaticcraft.refinery.removeRecipes(IIngredient input);
```

Cette fonction supprimera *toutes les recettes* de Raffinerie :

```zenscript
mods.pneumaticcraft.refinery.removeAllRecipes();
```

## Ajout en cours

Ces fonctions ajoutent une nouvelle recette à la raffinerie:

```zenscript
// Ajoute une recette avec la température minimale par défaut de 373K (100°C)
mods.pneumaticcraft.refinery. ddRecipe(ILiquidStack entrée, ILiquidStack[] sorties);

// (v0.9.0+ requis) Ajoute une recette avec une température minimale donnée
mods . neumaticcraft.raffinerie. ddRecipe(int minimumTemperature, ILiquidStack entrée, ILiquidStack[] sorties);


// Exemple: les deux recettes utilisent l'eau comme entrée
// La première recette sera utilisée dans une raffinerie de 2 blocs
mods. neumaticcraft.raffinerie. ddRecipe(<liquid:water> * 10, [<liquid:lava> * 2, <liquid:oil> * 5]);
// La seconde recette sera utilisée dans une raffinerie de 3 ou 4 blocs,
// et nécessite également une température minimale de 473K, ou 200°C
mods. neumaticcraft.refinery.addRecipe(473, <liquid:water> * 10, [<liquid:lava> * 2, <liquid:oil> * 5, <liquid:lpg> * 2]);
```