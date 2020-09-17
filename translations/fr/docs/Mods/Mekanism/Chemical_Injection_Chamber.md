# Chambre d'injection chimique

Depuis le Mékanisme 9.7. il est maintenant possible de voir toutes les chaînes de recettes de la chambre d'injection chimique via la commande `/ct mekrecipes injection`

## Ajouter

```zenscript
mods.mekanism.chemical.injection.addRecipe(IIngredient inputStack, IGasStack inputGas, IItemStack outputStack);

mods.mekanism.chemical.injection.addpe(<minecraft:hardened_clay:1>, <gas:water>, <minecraft:clay>);
```

Depuis le Mékanisme 9.7.0 l'entrée de gaz n'est plus limitée à l'acide sulfurique, à l'eau ou au chlorure d'hydrogène

Aussi depuis Mekanism 9.7.0 il est possible d'utiliser IIngredients comme la inputStack au lieu de IItemStacks.

Note: Actuellement tout cela fait une boucle sur les différentes possibilités de java tout en ajoutant au lieu de vous avoir à le faire dans ZenScript. Actuellement, il n'y a pas de support pour les composants composés ou oredictionnaire dans les machines elles-mêmes.

## Retirer

```zenscript
mods.mekanism.chemical.injection.removeRecipe(IIngredient outputStack, @Optional Igredient inputStack, @Optional IIngredient inputGas);

mods.mekanism.chemical.injection.removeRecipe(<mekanism:shard:2>, <mekanism:oreblock>, <gas:hydrogenchloride>);
mods.mekanism.chemical.injection.removeRecipe(<mekanism:shard:1>);
```

Spécifier un paramètre d'entrée ne supprimera que la recette spécifique qui utilise cette entrée. L'omission du paramètre d'entrée supprimera toutes les recettes qui produisent la sortie spécifiée.

## Suppression de toutes les recettes

Depuis le Mékanisme 9.7.0, il est maintenant possible de supprimer toutes les recettes de la chambre d'injection chimique. (Ceci exclut toutes les recettes ajoutées via CraftTweaker)

```zenscript
mods.mekanism.chemical.injection.removeAllRecipes();
```