# Fonderie Energie

Depuis le Mékanisme 9.7.0, il est maintenant possible de voir toutes les chaînes de recettes de la Fonderie Energie à travers la commande `fonderie /ct mekrecipes`

## Ajouter

```zenscript
mods.mekanism.smelter.addRecipe(IIngredient inputStack, IItemStack outputStack);

mods.mekanism.smelter.addRecipe(<minecraft:tallgrass:1>, <minecraft:deadbush>);
```

Depuis Mekanism 9.7.0 il est possible d'utiliser IIngredients comme la stack d'entrée au lieu de IItemStacks.

Note: Actuellement tout cela fait une boucle sur les différentes possibilités de java tout en ajoutant au lieu de vous avoir à le faire dans ZenScript. Actuellement, il n'y a pas de support pour les composants composés ou oredictionnaire dans les machines elles-mêmes.

## Retirer

```zenscript
mods.mekanism.smelter.removeRecipe(IIngredient inputStack, @Optional IIngredient outputStack);

mods.mekanism.smelter.removeRecipe(<minecraft:sand:*>, <minecraft:glass>);
mods.mekanism.smelter.removeRecipe(<minecraft:cobblestone>);
```

Spécifier un paramètre de sortie ne supprimera que la recette spécifique qui résulte de cette sortie. En omettant le paramètre de sortie, vous supprimerez toutes les recettes que l'élément d'entrée peut produire.

## Suppression de toutes les recettes

Depuis le Mékanisme 9.7.0 il est maintenant possible de supprimer toutes les recettes de Fonderie Energied. (Ceci exclut toutes les recettes ajoutées via CraftTweaker)

```zenscript
mods mekanism.smelter.removeAllRecipes();
```