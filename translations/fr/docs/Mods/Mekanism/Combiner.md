# Combiner

Depuis le Mékanisme 9.7.0, il est maintenant possible de voir toutes les chaînes de recettes du Combiner à travers la commande `/ct mekrecipes combiner`

## Ajouter

```zenscript
mods.mekanism.combiner.addRecipe(IIngredient itemInput, @Optional IIngredient extraInput, IItemStack itemOutput);

mods.mekanism.combiner.addRecipe(<minecraft:stone> * 4, <minecraft:cobblestone>, <minecraft:stonebrick>);
mods.mekanism.combiner.addRecipe(<minecraft:torch> * 4, <minecraft:stick>);
```

Depuis Mekanism 9.7.0, il est possible d'utiliser IIngredients comme itemInput et extraInput au lieu de IItemStacks.

Note: Actuellement tout cela fait une boucle sur les différentes possibilités de java tout en ajoutant au lieu de vous avoir à le faire dans ZenScript. Actuellement, il n'y a pas de support pour les composants composés ou oredictionnaire dans les machines elles-mêmes.

## Retirer

```zenscript
mods.mekanism.combiner.removeRecipe(IIngredient outputStack, @Optional IIngredient inputStack, @Optional Igredient extraInput);

mods.mekanism.combiner.removeRecipe(<minecraft:gravel>, <minecraft:flint>, <minecraft:cobblestone>);
mods.mekanism.combiner.removeRecipe(<minecraft:iron_ore>);
```

Spécifier un paramètre d'entrée ne supprimera que la recette spécifique qui utilise cette entrée. L'omission du paramètre d'entrée supprimera toutes les recettes qui produisent la sortie spécifiée.

## Suppression de toutes les recettes

Depuis le Mékanisme 9.7.0, il est maintenant possible de supprimer toutes les recettes de Combiner. (Ceci exclut toutes les recettes ajoutées via CraftTweaker)

```zenscript
mods mekanism.combiner.removeAllRecipes();
```