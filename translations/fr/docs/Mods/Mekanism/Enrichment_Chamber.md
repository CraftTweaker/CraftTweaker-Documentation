# Chambre d'Enrichissement

Depuis le Mékanisme 9.7.0, il est maintenant possible de voir toutes les chaînes de recettes de la Chambre de richesse à travers la commande `/ct mekrecipes enrichissement`

## Ajouter

```zenscript
mods.mekanism.enrichment.addRecipe(IIngredient inputStack, IItemStack outputStack);

mods.mekanism.enrichment.addRecipe(<minecraft:coal_block>, <mekanism:compressedcarbon> * 9);
```

Depuis Mekanism 9.7.0 il est possible d'utiliser IIngredients comme la stack d'entrée au lieu de IItemStacks.

Note: Actuellement tout cela fait une boucle sur les différentes possibilités de java tout en ajoutant au lieu de vous avoir à le faire dans ZenScript. Actuellement, il n'y a pas de support pour les composants composés ou oredictionnaire dans les machines elles-mêmes.

## Retirer

```zenscript
mods.mekanism.enrichment.removeRecipe(IIngredient inputStack, @Optional IIngredient outputStack);

mods.mekanism.enrichment.removeRecipe(<minecraft:mossy_cobblestone>, <minecraft:cobblestone>);
mods.mekanism.enrichment.removeRecipe(<minecraft:stonebrick:1>);
```

Spécifier un paramètre de sortie ne supprimera que la recette spécifique qui résulte de cette sortie. En omettant le paramètre de sortie, vous supprimerez toutes les recettes que l'élément d'entrée peut produire.

## Suppression de toutes les recettes

Depuis le Mékanisme 9.7.0, il est maintenant possible de supprimer toutes les recettes de la Chambre de richesse. (Ceci exclut toutes les recettes ajoutées via CraftTweaker)

```zenscript
mods.mekanism.enrichment.removeAllRecipes();
```