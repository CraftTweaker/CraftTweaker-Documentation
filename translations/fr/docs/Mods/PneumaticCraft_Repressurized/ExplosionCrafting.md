# Fabrication d'Explosion

L'artisanat d'Explosion est utilisé pour transformer un objet en un autre en l'exposant à une explosion lorsqu'il s'agit d'un objet au sol. Un taux de perte configurable (aléatoire) peut être spécifié. Par défaut, il est utilisé pour convertir les lingots de fer en lingots de fer compressés avec un taux de perte de 20%.

## Appel en cours

Vous pouvez appeler le pack d'artisanat d'Explosion en utilisant `mods.pneumaticcraft.explosioncrafting`

## Enlèvement

Cette fonction supprime la première recette qu'elle trouve avec la sortie [IIngrédient](/Vanilla/Variable_Types/IIngredient/) ``:

```zenscript
mods.pneumaticcraft.explosioncrafting.removeRecipe(IIngredient output);
// Exemple
mods.pneumaticcraft.explosioncrafting.removeRecipe(<pneumaticcraft:ingot_iron_compressed>);
```

Cette fonction supprime *toutes les recettes* d'artisanat d'Explosion :

```zenscript
mods.pneumaticcraft.explosioncrafting.removeAllRecipes();
```

## Ajout en cours

Ces fonctions sont utilisées pour ajouter de nouvelles recettes d'artisanat d'Explosion :

```zenscript
mods.pneumaticcraft.explosioncrafting.addRecipe(IItemStack input, IItemStack output, int loss_rate);
mods.pneumaticcraft.explosioncrafting.addRecipe(IOreDictEntry input, IItemStack output, int loss_rate);

// Exemple
mods. neumaticcraft.explosioncrafting.removeAllRecipes();
// Un pack de mode expert pourrait faire du fer simple un très mauvais choix, et l'acier beaucoup mieux.
mods.pneumaticcraft.explosioncrafting.addRecipe(<ore:ingotIron>, <pneumaticcraft:ingot_iron_compressed>, 95);
mods.pneumaticcraft.explosioncrafting. ddRecipe(<ore:ingotSteel>, <pneumaticcraft:ingot_iron_compressed>, 10);
// Un moyen de faire beaucoup de briques de Nether, pour (en moyenne) 4x le coût de mods
Netherrack. neumaticcraft.explosioncrafting.addRecipe(<ore:netherrack>, <minecraft:netherbrick>, 75);
```