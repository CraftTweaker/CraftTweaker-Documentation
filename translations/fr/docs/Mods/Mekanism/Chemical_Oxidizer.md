# Oxificateur chimique

Depuis le Mékanisme 9.7.0, il est maintenant possible de voir toutes les chaînes de recettes de l'oxydant chimique à travers la commande `/ct mekrecipes oxydant`

## Ajouter

```zenscript
mods.mekanism.chemical.oxidizer.addRecipe(IIngredient inputStack, IGasStack outputGas);

mods.mekanism.chemical.oxidizer.addRecipe(<mekanism:dust:2>, <gas:cleanOsmium>);
```

Depuis Mekanism 9.7.0 il est possible d'utiliser IIngredients comme la stack d'entrée au lieu de IItemStacks.

Note: Actuellement tout cela fait une boucle sur les différentes possibilités de java tout en ajoutant au lieu de vous avoir à le faire dans ZenScript. Actuellement, il n'y a pas de support pour les composants composés ou oredictionnaire dans les machines elles-mêmes.

## Retirer

```zenscript
mods.mekanism.chemical.oxidizer.removeRecipe(IIngredient outputGas, @Optional Igredient inputStack);

mods.mekanism.chemical.oxidizer.removeRecipe(<gas:brine>, <mekanism:salt>);
mods.mekanism.chemical.oxidizer.removeRecipe(<gas:lithium>);
```

Spécifier un paramètre d'entrée ne supprimera que la recette spécifique qui utilise cette entrée. L'omission du paramètre d'entrée supprimera toutes les recettes qui produisent la sortie spécifiée.

## Suppression de toutes les recettes

Depuis le Mékanisme 9.7.0, il est maintenant possible de supprimer toutes les recettes d'oxydants chimiques. (Ceci exclut toutes les recettes ajoutées via CraftTweaker)

```zenscript
mods.mekanism.chemical.oxidizer.removeAllRecipes();
```