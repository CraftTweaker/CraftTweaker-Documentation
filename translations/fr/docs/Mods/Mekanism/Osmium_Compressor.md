# Osmium Compresseur

Depuis le Mékanisme 9.7.0 il est maintenant possible de voir toutes les chaînes de recettes de l'Osmium Compressor à travers la commande `compresseur /ct mekrecipes`

## Ajouter

```zenscript
mods.mekanism.compressor.addRecipe(IIngredient inputStack, @Optional IGasStack inputGas, IItemStack outputStack);

mods.mekanism.compressor.addRecipe(<mekanism:basicblock:3>, <gas:liquidosmium>, <minecraft:stone>);
mods.mekanism.compressor.addRecipe(<mekanism:basicblock:1>, <minecraft:netherrack>);
```

Depuis le Mékanisme 9.7.0 inputGas n'est plus limité à l'osmium.

Aussi depuis Mekanism 9.7.0 il est possible d'utiliser IIngredients comme la inputStack au lieu de IItemStacks.

Note: Actuellement tout cela fait une boucle sur les différentes possibilités de java tout en ajoutant au lieu de vous avoir à le faire dans ZenScript. Actuellement, il n'y a pas de support pour les composants composés ou oredictionnaire dans les machines elles-mêmes.

## Retirer

```zenscript
mods.mekanism.compressor.removeRecipe(IIngredient outputStack, @Optional IIngredient inputStack, @Optional Igredient inputGas);

mods.mekanism.compressor.removeRecipe(<mekanism:ingot>, <mekanism:otherdust:5>, <gas:liquidosmium>);
mods.mekanism.compressor.removeRecipe(<mekanism:ingot:3>);
```

Spécifier un paramètre d'entrée ne supprimera que la recette spécifique qui utilise cette entrée. L'omission du paramètre d'entrée supprimera toutes les recettes qui produisent la sortie spécifiée.

## Suppression de toutes les recettes

Depuis le Mekanism 9.7.0 il est maintenant possible de supprimer toutes les recettes Osmium Compressor. (Ceci exclut toutes les recettes ajoutées via CraftTweaker)

```zenscript
mods.mekanism.compressor.removeAllRecipes();
```