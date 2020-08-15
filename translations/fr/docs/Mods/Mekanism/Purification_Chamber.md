# Chambre de purification

Depuis le Mékanisme 9.7.0, il est maintenant possible de voir toutes les chaînes de recettes de la Chambre de Purification par la commande `purification /ct mekrecipes`

## Ajouter

```zenscript
mods.mekanism.purification.addRecipe(IIngredient itemInput, @Optional IGasStack gasInput, IItemStack itemOutput);

mods.mekanism.purification.addRecipe(<minecraft:wool:1>, <gas:hydrogenchloride>, <minecraft:wool>);
mods.mekanism.purification.addRecipe(<minecraft:coal:1>, <minecraft:coal>);
```

Depuis le Mékanisme 9.7.0 l'entrée de gaz n'est plus limitée à l'oxygène

Aussi depuis le Mékanism 9.7.0, il est possible d'utiliser IIngredients comme itemInput au lieu de IItemStacks.

Note: Actuellement tout cela fait une boucle sur les différentes possibilités de java tout en ajoutant au lieu de vous avoir à le faire dans ZenScript. Actuellement, il n'y a pas de support pour les composants composés ou oredictionnaire dans les machines elles-mêmes.

## Retirer

```zenscript
mods.mekanism.purification.removeRecipe(IIngredient itemOutput, @Optional IIngredient itemInput, @Optional Ingredient gasInput);

mods.mekanism.purification.removeRecipe(<mekanism:clump:2>, <mekanism:shard:2>, <gas:oxygen>);
mods.mekanism.purification.removeRecipe(<mekanism:clump:1>);
```

Spécifier un paramètre d'entrée ne supprimera que la recette spécifique qui utilise cette entrée. L'omission du paramètre d'entrée supprimera toutes les recettes qui produisent la sortie spécifiée.

## Suppression de toutes les recettes

Depuis le Mékanisme 9.7.0 il est maintenant possible de supprimer toutes les recettes de la Chambre de Purification. (Ceci exclut toutes les recettes ajoutées via CraftTweaker)

```zenscript
mods mekanism.purification.removeAllRecipes();
```