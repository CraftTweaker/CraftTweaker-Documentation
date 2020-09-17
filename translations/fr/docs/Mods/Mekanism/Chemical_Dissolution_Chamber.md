# Chambre de dissolution chimique

Depuis le Mékanisme 9.7. il est maintenant possible de voir toutes les chaînes de recettes de la Chambre de Dissolution Chimique à travers la commande `dissolution /ct mekrecipes`

## Ajouter

```zenscript
mods.mekanism.chemical.dissolution.addRecipe(IIngredient inputStack, IGasStack outputGas);

mods.mekanism.chemical.dissolution.addRecipe(<minecraft:ice>, <gas:water>);
```

Depuis Mekanism 9.7.0 il est possible d'utiliser IIngredients comme la stack d'entrée au lieu de IItemStacks.

Note: Actuellement tout cela fait une boucle sur les différentes possibilités de java tout en ajoutant au lieu de vous avoir à le faire dans ZenScript. Actuellement, il n'y a pas de support pour les composants composés ou oredictionnaire dans les machines elles-mêmes.

## Retirer

```zenscript
mods.mekanism.chemical.dissolution.removeRecipe(IIngredient outputGas, @Optional Igredient inputStack);

mods.mekanism.chemical.dissolution.removeRecipe(<gas:osmium>, <mekanism:oreblock>);
mods.mekanism.chemical.dissolution.removeRecipe(<gas:tin>);
```

Spécifier un paramètre d'entrée ne supprimera que la recette spécifique qui utilise cette entrée. L'omission du paramètre d'entrée supprimera toutes les recettes qui produisent la sortie spécifiée.

## Suppression de toutes les recettes

Depuis le Mekanism 9.7.0 il est maintenant possible de supprimer toutes les recettes de la chambre de Dissolution Chimique. (Ceci exclut toutes les recettes ajoutées via CraftTweaker)

```zenscript
mods.mekanism.chemical.dissolution.removeAllRecipes();
```