# Mixeur en plastique

Le mélangeur en plastique est une machine avec deux fonctions :

* Pour solidifier le liquide plastique liquide vers les feuilles en plastique solide, en utilisant des teintures rouges, vertes et bleues pour colorier les feuilles.
* Faire fondre des feuilles en plastique solide en plastique liquide. Cela nécessite une température minimale de 150°C (423K).

Le support CraftTweaker ajoute la possibilité de spécifier n'importe quelle combinaison d'articles et de liquides à des fins de fusion et/ou de solidification. Il est possible de spécifier que les articles ne doivent être fondus, que les liquides doivent être solidifiés ou pour permettre un processus bidirectionnel.

Bien que l'objet de solidification puisse être n'importe quel objet, il est plus logique d'utiliser ici des objets colombes puisque les teintures sont toujours utilisées, que l'élément de sortie soit colorable ou non.

## Appel en cours

Vous pouvez appeler le package Plastic Mixer en utilisant `mods.pneumaticcraft.plasticmixer`.

## Enlèvement

This function removes the first recipe it finds with the given [ILiquidStack](/Vanilla/Liquids/ILiquidStack/) `input`:

```zenscript
mods.pneumaticcraft.plasticmixer.removeRecipe(ILiquidStack fluid);
// Exemple
mods.pneumaticcraft.plasticmixer.removeRecipe(<liquid:plastic>);
```

Cette fonction supprime *toutes les recettes* de mélangeurs en plastique :

```zenscript
mods.pneumaticcraft.plasticmixer.removeAllRecipes();
```

## Ajout en cours

Les fonctions suivantes peuvent être utilisées pour ajouter des recettes au TPP :

```zenscript
// Add a two-way recipe (temperature in Kelvin)
mods.pneumaticcraft.plasticmixer.addRecipe(ILiquidStack liquid, IItemStack stack, int temperature);

// Add a recipe allowing solidification only
mods.pneumaticcraft.plasticmixer.addSolidifyOnlyRecipe(ILiquidStack liquidInput, IItemStack itemOutput);

// Add a recipe allowing melting only (temperature in Kelvin)
mods.pneumaticcraft.plasticmixer.addMeltOnlyRecipe(IItemStack itemInput, ILiquidStack fluidOutput, int temperature);

// Example: convert 100mB Lava to/from Concrete (melt at 573K)
mods.pneumaticcraft.plasticmixer.addRecipe(<liquid:lava> * 100, <minecraft:concrete>, 573);

// Example: convert 2000mB Oil to Plastic (but don't allow melting back)
mods.pneumaticcraft.plasticmixer.addSolidifyOnlyRecipe(<liquid:oil> * 2000, <pneumaticcraft:plastic>);

// Example: convert Plastic to 100mB Oil at 473K (but don't allow solidifying)
mods.pneumaticcraft.plasticmixer.addMeltOnlyRecipe(<pneumaticcraft:plastic>, <liquid:oil> * 100, 473);
```