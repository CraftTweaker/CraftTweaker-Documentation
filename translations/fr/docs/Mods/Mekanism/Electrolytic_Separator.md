# Séparateur électrolytique

Depuis le Mékanisme 9.7.0, il est maintenant possible de voir toutes les chaînes de recettes du Séparateur Electrolytique via la commande `/ct mekrecipes separator`

## Ajouter

```zenscript
mods.mekanism.separator.addRecipe(ILiquidStack inputFluid, double inputRF, IGasStack outputGas1, IGasStack outputGas2);

mods.mekanism.separator.addRecipe(<liquid:liquidfusionfuel>, 5000, <gas:deuterium>, <gas:tritium>);
```

## Retirer

```zenscript
mods.mekanism.separator.removeRecipe(IIngredient inputFluid, @Optional IIngredient outputGas1, @Optional Ingredient outputGas2);

mods.mekanism.separator.removeRecipe(<liquid:heavywater>, <gas:deuterium>, <gas:oxygen>);
mods.mekanism.separator.removeRecipe(<liquid:water>);
```

Spécifier un paramètre de sortie ne supprimera que la recette spécifique qui résulte de cette sortie. En omettant le paramètre de sortie, vous supprimerez toutes les recettes que l'élément d'entrée peut produire.

## Suppression de toutes les recettes

Depuis le Mékanisme 9.7.0, il est maintenant possible de supprimer toutes les recettes de Séparateurs Electrolytiques. (Ceci exclut toutes les recettes ajoutées via CraftTweaker)

```zenscript
mods.mekanism.separator.removeAllRecipes();
```