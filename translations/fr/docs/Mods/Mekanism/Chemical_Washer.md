# Décasseur chimique

Depuis le Mékanisme 9.7.0, il est maintenant possible de voir toutes les chaînes de recettes du Détergent Chimique à travers la commande `/ct mekrecipes washer`

## Ajouter

```zenscript
mods.mekanism.chemical.washer.addRecipe(IGasStack inputGas, IGasStack outputGas);

mods.mekanism.chemical.washer.addRecipe(<gas:deuterium>, <gas:tritium>);
```

## Retirer

```zenscript
mods.mekanism.chemical.washer.removeRecipe(IIngredient outputGas, @Optional Igredient inputGas);

mods.mekanism.chemical.washer.removeRecipe(<gas:cleanLead>, <gas:lead>);
mods.mekanism.chemical.washer.removeRecipe(<gas:cleanOsmium>);
```

Spécifier un paramètre d'entrée ne supprimera que la recette spécifique qui utilise cette entrée. L'omission du paramètre d'entrée supprimera toutes les recettes qui produisent la sortie spécifiée.

## Suppression de toutes les recettes

Depuis le Mékanisme 9.7.0, il est maintenant possible de supprimer toutes les recettes de Washer chimiques. (Ceci exclut toutes les recettes ajoutées via CraftTweaker)

```zenscript
mods.mekanism.chemical.washer.removeAllRecipes();
```