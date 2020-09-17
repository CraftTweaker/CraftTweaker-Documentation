# Responsable de l'Information Chimique

Depuis Mekanism 9.7.0, il est maintenant possible de voir toutes les chaînes de recettes de l'infuser chimique via la commande `/ct mekrecipes chemicalInfuser`

## Ajouter

```zenscript
mods.mekanism.chemical.infuser.addRecipe(IGasStack inputGas1, IGasStack inputGas2, IGasStack outputGas);

mods.mekanism.chemical.infuser.addRecipe(<gas:water>, <gas:deuterium>, <gas:tritium>);
```

## Retirer

```zenscript
mods.mekanism.chemical.infuser.removeRecipe(IIngredient outputGas, @Optional Igredient inputGas1, @Optional IIngredient inputGas2);

mods.mekanism.chemical.infuser.removeRecipe(<gas:hydrogenchloride>, <gas:hydrogen>, <gas:chlorine>);
mods.mekanism.chemical.infuser.removeRecipe(<gas:fusionfuel>);
```

Spécifier un paramètre d'entrée ne supprimera que la recette spécifique qui utilise cette entrée. L'omission du paramètre d'entrée supprimera toutes les recettes qui produisent la sortie spécifiée.

## Suppression de toutes les recettes

Depuis le Mékanism 9.7.0, il est maintenant possible de supprimer toutes les recettes des utilisateurs de produits chimiques. (Ceci exclut toutes les recettes ajoutées via CraftTweaker)

```zenscript
mods.mekanism.chemical.infuser.removeAllRecipes();
```