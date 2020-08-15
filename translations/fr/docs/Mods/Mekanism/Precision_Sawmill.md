# Precision Sawmill

Depuis le Mékanisme 9.7.0 il est maintenant possible de voir toutes les chaînes de recettes de la Scierie de Précision à travers la commande `scierie /ct mekrecipes`

## Ajouter

```zenscript
mods.mekanism.sawmill.addRecipe(IIngredient inputStack, IItemStack outputStack, @Optional IItemStack bonusOutput, @Optional double bonusChance);

mods. ekanism.sawmill.addRecipe(<minecraft:bow>, <minecraft:stick> * 3, <minecraft:string> * 3, 0,5 );
mods.mekanism.sawmill.addRecipe(<minecraft:torch>, <minecraft:stick>);
```

Depuis Mekanism 9.7.0 il est possible d'utiliser IIngredients comme la stack d'entrée au lieu de IItemStacks.

Note: Actuellement tout cela fait une boucle sur les différentes possibilités de java tout en ajoutant au lieu de vous avoir à le faire dans ZenScript. Actuellement, il n'y a pas de support pour les composants composés ou oredictionnaire dans les machines elles-mêmes.

## Retirer

```zenscript
mods.mekanism.sawmill.removeRecipe(IIngredient inputStack, @Optional IIngredient outputStack, @Optional Igredient bonusOutput);

mods.mekanism.sawmill.removeRecipe(<minecraft:bed>, <minecraft:planks>, <minecraft:wool>);
mods.mekanism.sawmill.removeRecipe(<minecraft:planks:*>);
```

Spécifier un paramètre de sortie ne supprimera que la recette spécifique qui résulte de cette sortie. En omettant le paramètre de sortie, vous supprimerez toutes les recettes que l'élément d'entrée peut produire.

## Suppression de toutes les recettes

Depuis le Mékanisme 9.7.0, il est désormais possible de supprimer toutes les recettes de scierie de précision. (Ceci exclut toutes les recettes ajoutées via CraftTweaker)

```zenscript
mod mekanism.sawmill.removeAllRecipes();
```